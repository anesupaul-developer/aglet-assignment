import {Search} from "lucide-react";

const MovieHeader = ({searchQuery, setSearchQuery}) => {
  return <>
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
                      <a href="/movies" className="hover:text-red-500 transition-colors">
                          Home
                      </a>
                      <a href="/movies" className="hover:text-red-500 transition-colors">
                          Movies
                      </a>
                      <a href="/favourite-movies" className="hover:text-red-500 transition-colors">
                          My List
                      </a>
                  </nav>
              </div>
          </div>
      </header>
  </>;
};

export default MovieHeader;
