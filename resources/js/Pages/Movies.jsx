import { Head, router } from '@inertiajs/react';
import {useState, useEffect} from "react";
import Pagination from "@/Components/Partials/Pagination.jsx";
import Footer from "@/Components/Partials/Footer.jsx";
import MoviePopOver from "@/Components/Partials/MoviePopOver.jsx";
import MovieHeader from "@/Components/Partials/MovieHeader.jsx";
import MovieHeroAction from "@/Components/Partials/MovieHeroAction.jsx";
import MovieGridSection from "@/Components/Partials/MovieGridSection.jsx";

export default function Movies({ auth, movies: initialMovies}) {
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState(initialMovies);
    const moviesPerPage = movies.meta.per_page;

    const openModal = (movie) => {
        setSelectedMovie(movie)
        document.body.style.overflow = "hidden"
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

                <MovieHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

                <MovieHeroAction pageName="movies"/>

                <MovieGridSection defaultText="All Movies"
                                  openModal={openModal}
                                  searchQuery={searchQuery}
                                  movies={movies}/>

                <Pagination items={movies} scrollPosId={"movies-section"} searchQuery={searchQuery} callBack={afterPagination}/>

                <MoviePopOver selectedMovie={selectedMovie} closeModal={closeModal}/>

                <Footer/>
            </div>
        </>
    );
}
