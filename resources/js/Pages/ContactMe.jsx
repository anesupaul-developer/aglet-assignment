import { Head, Link} from '@inertiajs/react';
import Footer from "@/Components/Partials/Footer.jsx";
import {
    Mail,
    Phone,
    MapPin,
    Instagram,
    Linkedin,
    Twitter,
    Film,
    Award,
    Camera,
    GithubIcon,
    YoutubeIcon, PackageIcon
} from "lucide-react"
import MovieHeader from "@/Components/Partials/MovieHeader.jsx";
import AgletLayout from "@/Layouts/AgletLayout.jsx";
import {Button} from "@/components/ui/button.jsx";

export default function ContactMe({ auth}) {
    return (
        <AgletLayout>
            <Head title="Movies" />
            <div className="min-h-screen bg-black text-white">

                <MovieHeader searchQuery="" setSearchQuery="" isLoggedIn={auth?.user?.id}/>

                <div className="flex flex-col min-h-screen bg-black text-white">
                    <main className="flex-1 bg-gradient-to-b from-black via-gray-900 to-black">
                        <div className="container mx-auto px-4 py-12 md:py-24">
                            <div className="mx-auto max-w-6xl">
                                <div className="text-center mb-12">
                                    <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                                        My Contact Information
                                    </h2>
                                    <p className="text-xl md:text-2xl mb-8 text-gray-300">
                                        Whether you have a question, feedback, or just want to say hello, feel free to contact me anytime.
                                    </p>
                                </div>

                                <div className="grid gap-8 lg:grid-cols-2">
                                    <div className="overflow-hidden bg-gray-900 border border-gray-800 rounded-lg">
                                        <div className="relative">
                                            <div className="aspect-[4/5] relative bg-gradient-to-b from-gray-800 to-gray-900">
                                                <img
                                                    src="/images/contact-us.jpg"
                                                    alt="Anesu"
                                                    className="object-cover w-full h-full"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h2 className="text-2xl font-bold text-white mb-2">Anesu Paul Ngirande</h2>
                                            <p className="text-red-400 font-medium mb-2">Full Stack Developer Specialising in Laravel, Angular and React</p>
                                            <p className="text-gray-400 text-sm">
                                                6+ years experience in web development.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gray-900 border border-gray-800 rounded-lg">
                                            <div className="p-6">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Camera className="h-6 w-6 text-red-400" />
                                                    <h2 className="text-xl font-semibold text-white">Professional Contact</h2>
                                                </div>
                                                <ul className="space-y-4">
                                                    <li className="flex items-center gap-3">
                                                        <Mail className="h-5 w-5 text-gray-400" />
                                                        <span className="text-gray-300">anesupaulngirande@gmail.com</span>
                                                    </li>
                                                    <li className="flex items-center gap-3">
                                                        <Phone className="h-5 w-5 text-gray-400" />
                                                        <span className="text-gray-300">+263 772 982 812</span>
                                                    </li>
                                                    <li className="flex items-center gap-3">
                                                        <MapPin className="h-5 w-5 text-gray-400" />
                                                        <span className="text-gray-300">7269 Lermon Drive Zimre Park, Harare, Zimbabwe</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-gray-900 border border-gray-800 rounded-lg">
                                            <div className="p-6">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Film className="h-6 w-6 text-red-400" />
                                                    <h2 className="text-xl font-semibold text-white">Socials</h2>
                                                </div>
                                                <div className="flex flex-wrap gap-3">
                                                    <Link
                                                        href="https://github.com/anesupaul-developer"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-3 py-2 text-sm border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors"
                                                    >
                                                        <GithubIcon className="h-4 w-4 mr-2" />
                                                        @Anesu
                                                    </Link>
                                                    <Link
                                                        href="https://www.linkedin.com/in/anesu-paul-ngirande-71904a170/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-3 py-2 text-sm border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors"
                                                    >
                                                        <Linkedin className="h-4 w-4 mr-2" />
                                                        Anesu Ngirande
                                                    </Link>
                                                    <Link
                                                        href="https://www.youtube.com/@anesu6184"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-3 py-2 text-sm border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors"
                                                    >
                                                        <YoutubeIcon className="h-4 w-4 mr-2" />
                                                        @anesu6184
                                                    </Link>
                                                    <Link
                                                        href="https://packagist.org/users/anesupaul-developer/packages/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-3 py-2 text-sm border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors"
                                                    >
                                                        <PackageIcon className="h-4 w-4 mr-2" />
                                                        @Packagist
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-red-900/20 to-yellow-900/20 border border-red-800/50 rounded-lg">
                                            <div className="p-6">
                                                <h2 className="text-xl font-semibold mb-4 text-white">Career Highlights</h2>
                                                <blockquote className="pl-4 text-white italic space-y-2">
                                                    <p className="mb-3">1. Responsible for maintaining Smatpay WordPress plugin, PHP SDK, and the Smatprop property management system.</p>
                                                    <p className="mb-3">2. Oversee the development and maintenance of the Njere School ERP and a tertiary school management portal.</p>
                                                    <p className="mb-3">3. Handle deployment and configuration of code via Git with Nginx or Apache2 servers.</p>
                                                    <p className="mb-3">4. Implement integrations with Ecocash for real-time payments, and accounting systems including Pastel, Sage, and Xero.</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

                <Footer/>
            </div>
        </AgletLayout>
    );
}
