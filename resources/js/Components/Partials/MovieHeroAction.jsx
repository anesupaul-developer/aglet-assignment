import {Button} from "@/components/ui/button.jsx";

const MovieHeroAction = ({pageName}) => {
    return <>
        {
            pageName === 'movies' ?
                <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black">
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
                :
                <section className="relative mt-6 flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black"></section>
        }
    </>
};

export default MovieHeroAction;
