import { Head, router } from '@inertiajs/react';
import {useState, useEffect} from "react";
import { Play } from "lucide-react";
import Pagination from "@/Components/Partials/Pagination.jsx";
import Footer from "@/Components/Partials/Footer.jsx";
import MoviePopOver from "@/Components/Partials/MoviePopOver.jsx";
import MovieHeader from "@/Components/Partials/MovieHeader.jsx";
import MovieHeroAction from "@/Components/Partials/MovieHeroAction.jsx";

export default function FavouriteMovies({ auth, favouriteMovies: initialFavouriteMovies}) {
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [favouriteMovies, setFavouriteMovies] = useState(initialFavouriteMovies);
    const moviesPerPage = favouriteMovies.meta.per_page;

    const openModal = (movie) => {
        setSelectedMovie(movie)
        document.body.style.overflow = "hidden"
    }

    const addToFavourite = (movieId) => {
        router.post('/movies/favourites', {
            movie_id: movieId,
        }, {
            preserveState: true
        });
    }

    const closeModal = () => {
        setSelectedMovie(null)
        document.body.style.overflow = "unset"
    }

    const afterPagination = ({props : { movies }}) => {
        setFavouriteMovies(movies);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            const params = { page: 1 };

            if (searchQuery && searchQuery.trim() !== "") {
                params.search = searchQuery.trim();
            }

            router.get('/favourite-movies', params, {
                preserveState: true,
                preserveScroll: true,
                replace: true,
                onSuccess: (page) => {
                    setFavouriteMovies(page.props.favouriteMovies);
                    console.log(page.props.favouriteMovies);
                }
            });
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    const totalPages = Math.ceil(favouriteMovies.meta.total / favouriteMovies.meta.per_page);
    const indexOfLastMovie = favouriteMovies.meta.current_page * favouriteMovies.meta.per_page;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const currentMovies = favouriteMovies.data.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
        <>
            <Head title="Movies" />
            <div className="min-h-screen bg-black text-white">

                <MovieHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

                <MovieHeroAction pageName="favourites"/>

                {/* Movies Grid */}
                <section id="favourite-movies-section" className="container mx-auto px-4 py-16">
                    <h3 className="text-3xl font-bold mb-8">
                        {searchQuery ? `Search results for "${searchQuery}"` : "Favourite Movies"}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {favouriteMovies.data.map((favouriteMovie) => (
                            <div
                                key={favouriteMovie.id}
                                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                                onClick={() => openModal(favouriteMovie.movie)}
                            >
                                <div className="relative overflow-hidden rounded-lg bg-gray-800">
                                    <img
                                        src={favouriteMovie.movie.poster || "/images/placeholder.webp"}
                                        alt={favouriteMovie.movie.title}
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Play className="w-12 h-12 text-white" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                                        <h4 className="font-semibold text-sm truncate">{favouriteMovie.movie.title}</h4>
                                        <p className="text-xs text-gray-300">
                                            <b>{favouriteMovie.movie.date}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {favouriteMovies.data.length === 0 && searchQuery && (
                        <div className="text-center py-16">
                            <p className="text-gray-400 text-lg">No movies found matching "{searchQuery}"</p>
                        </div>
                    )}
                </section>

                <Pagination items={favouriteMovies} scrollPosId={"favourite-movies-section"} searchQuery={searchQuery} callBack={afterPagination}/>

                <MoviePopOver selectedMovie={selectedMovie} closeModal={closeModal}/>

                <Footer/>
            </div>
        </>
    );
}
