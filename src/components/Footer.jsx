const Footer = () => {
    return (
        <footer className="bg-black py-16 border-t border-white/10 text-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Logo Column */}
                    <div className="col-span-1">
                        <div className="mb-8">
                            {/* Simple Logo Icon */}
                            <img src="/assets/pratiLogo.jpg" alt="Prati Logo" className="w-10 h-10 object-contain rounded-full" />
                        </div>
                        <p className="text-gray-500">
                            © 2026 PRATI Inc. <br /> All rights reserved.
                        </p>
                    </div>

                    {/* Links Columns - Pushing to the right like in reference */}
                    <div className="md:col-start-2 md:col-span-3 grid grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-white mb-4">Resources</h4>
                            <ul className="space-y-2 text-gray-500">
                                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Vendors</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Connect</h4>
                            <ul className="space-y-2 text-gray-500">
                                <li><a href="https://www.instagram.com/pratibimbvjti/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-500">
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center mt-12">
                    <div className="w-12 h-1 bg-brand-red/50 rounded-full"></div> {/* Small accent at bottom */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
