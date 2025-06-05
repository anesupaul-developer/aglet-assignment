import { Head, Link, router } from '@inertiajs/react';
import {useMemo, useState, useEffect} from "react";
import { Play, Plus, Star, X, Clock, Calendar, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Pagination from "@/Components/Pagination.jsx";

export default function Movies({ auth, movies: initialMovies}) {
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState(initialMovies);
    const moviesPerPage = movies.meta.per_page;

    const openModal = (movie) => {
        setSelectedMovie(movie)
        document.body.style.overflow = "hidden"
    }

    const addToFavourite = (movieId) => {
        router.post('/movies/favourites', {
            movie_id: movieId,
        }, {
            preserveState: true,
            onSuccess: (page) => {
                console.log('Added to favourites!', page);
            },
            onError: (errors) => {
                console.error('Failed:', errors);
            }
        });
    }

    const closeModal = () => {
        setSelectedMovie(null)
        document.body.style.overflow = "unset"
    }

    const afterPagination = ({props : { movies }}) => {
        setMovies(movies);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            const params = { page: 1 };

            if (searchQuery && searchQuery.trim() !== "") {
                params.search = searchQuery.trim();
            }

            router.get('/movies', params, {
                preserveState: true,
                preserveScroll: true,
                replace: true,
                onSuccess: (page) => {
                    setMovies(page.props.movies);
                    console.log(page.props.movies);
                }
            });
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    const totalPages = Math.ceil(movies.meta.total / movies.meta.per_page);
    const indexOfLastMovie = movies.meta.current_page * movies.meta.per_page;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const currentMovies = movies.data.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
        <>
            <Head title="Movies" />
            <div className="min-h-screen bg-black text-white">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold text-red-600">AgletFlix</h1>

                            {/* Search Bar */}
                            <div className="flex-1 max-w-md mx-8">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Search movies..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <nav className="hidden md:flex space-x-6">
                                <a href="#" className="hover:text-red-500 transition-colors">
                                    Home
                                </a>
                                <a href="#" className="hover:text-red-500 transition-colors">
                                    Movies
                                </a>
                                <a href="#" className="hover:text-red-500 transition-colors">
                                    TV Shows
                                </a>
                                <a href="#" className="hover:text-red-500 transition-colors">
                                    My List
                                </a>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black">
                    <div className="text-center z-10">
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                            Unlimited Movies
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 text-gray-300">Watch anywhere. Cancel anytime.</p>
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                            Start Watching
                        </Button>
                    </div>
                    <div className="absolute inset-0 bg-black/50"></div>
                </section>

                {/* Movies Grid */}
                <section id="movies-section" className="container mx-auto px-4 py-16">
                    <h3 className="text-3xl font-bold mb-8">
                        {searchQuery ? `Search results for "${searchQuery}"` : "Popular Movies"}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {movies.data.map((movie) => (
                            <div
                                key={movie.id}
                                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                                onClick={() => openModal(movie)}
                            >
                                <div className="relative overflow-hidden rounded-lg bg-gray-800">
                                    <img
                                        src={movie.poster || "/placeholder.svg"}
                                        alt={movie.title}
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Play className="w-12 h-12 text-white" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                                        <h4 className="font-semibold text-sm truncate">{movie.title}</h4>
                                        <p className="text-xs text-gray-300">
                                            <b>{movie.date}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {movies.data.length === 0 && searchQuery && (
                        <div className="text-center py-16">
                            <p className="text-gray-400 text-lg">No movies found matching "{searchQuery}"</p>
                        </div>
                    )}
                </section>

                <Pagination items={movies} scrollPosId={"movies-section"} searchQuery={searchQuery} callBack={afterPagination}/>

                {/* Modal */}
                {selectedMovie && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <div className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Backdrop Image */}
                            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                                <img
                                    src={selectedMovie.backdrop || "/placeholder.svg"}
                                    alt={selectedMovie.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Poster */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={selectedMovie.poster || "/placeholder.svg"}
                                            alt={selectedMovie.title}
                                            className="w-32 md:w-48 h-48 md:h-72 object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Movie Details */}
                                    <div className="flex-1">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedMovie.title}</h2>

                                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {selectedMovie.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {selectedMovie.duration}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                {selectedMovie.rating}/10
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {selectedMovie.genre.map((g) => (
                                                <Badge key={g} variant="secondary" className="bg-gray-700 text-gray-200">
                                                    {g}
                                                </Badge>
                                            ))}
                                        </div>

                                        <p className="text-gray-300 mb-6 leading-relaxed">{selectedMovie.synopsis}</p>

                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Button className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
                                                <Play className="w-4 h-4" />
                                                Watch Now
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="border-pink-600 bg-pink-800 hover:bg-pink-700 hover:text-white flex items-center gap-2"
                                            >
                                                <Plus className="w-4 h-4" />
                                                Add to Watchlist
                                            </Button>
                                            <Button variant="outline"
                                                    className="border-emerald-700 bg-emerald-900 hover:bg-emerald-600 hover:text-white"
                                                    onClick={() => addToFavourite(selectedMovie.id)}
                                            >
                                                Add To Favourite
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer */}
                <footer className="bg-gray-900 border-t border-gray-800 mt-16">
                    <div className="container mx-auto px-4 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-red-600 mb-4">AgletFlix</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Your ultimate destination for unlimited movies and TV shows. Stream anywhere, anytime.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4">Browse</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Movies
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            TV Shows
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            New & Popular
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            My List
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4">Support</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Account
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Media Center
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4">Legal</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Terms of Service
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Cookie Preferences
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Corporate Information
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                            <p className="text-gray-400 text-sm">© 2025 AgletFlix. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
