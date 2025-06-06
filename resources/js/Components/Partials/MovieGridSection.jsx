import {Play} from "lucide-react";

const MovieGridSection = ({searchQuery, movies, openModal, defaultText}) => {
    return <>
        <section id="movies-section" className="container mx-auto px-4 py-16">
            <h3 className="text-3xl font-bold mb-8">
                {searchQuery ? `Search results for "${searchQuery}"` : `${defaultText}`}
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
                                src={movie.poster || "/images/placeholder.webp"}
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

    </>;
};

export default MovieGridSection;
