const Footer = () => {
    return (
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
    );
}

export default Footer;
