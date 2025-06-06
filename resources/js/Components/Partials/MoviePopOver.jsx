import { Play, Plus, Star, X, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {router} from "@inertiajs/react";

const MoviePopOver = ({selectedMovie, closeModal, isLoggedIn, sliceMovie}) => {
    const addToFavourite = (movieId) => {
        router.post('/favourite-movies', {
            movie_id: movieId,
        }, {
            preserveState: true,
            onSuccess: () => {
                selectedMovie.is_favourite = !selectedMovie.is_favourite;
            }
        });
    }

    const removeFromFavourite = (movieId) => {
        router.delete(`/favourite-movies/${movieId}`, {
            preserveState: true,
            onSuccess: () => {
                selectedMovie.is_favourite = !selectedMovie.is_favourite;
                sliceMovie(selectedMovie);
            }
        });
    }

    return (
        <>
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
                                src={selectedMovie.backdrop || "/images/placeholder.webp"}
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
                                        src={selectedMovie.poster || "/images/placeholder.webp"}
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

                                        {
                                            selectedMovie.is_favourite ? (
                                                isLoggedIn ? (
                                                    <Button
                                                        variant="outline"
                                                        className="border-amber-700 bg-amber-900 hover:bg-amber-600 hover:text-white"
                                                        onClick={() => removeFromFavourite(selectedMovie.id)}
                                                    >
                                                        Remove From Favourite
                                                    </Button>
                                                ) : null
                                            ) : (
                                                <Button
                                                    variant="outline"
                                                    className="border-emerald-700 bg-emerald-900 hover:bg-emerald-600 hover:text-white"
                                                    onClick={() => addToFavourite(selectedMovie.id)}
                                                >
                                                    Add To Favourite
                                                </Button>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MoviePopOver;
