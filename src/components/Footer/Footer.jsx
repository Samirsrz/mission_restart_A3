import React from 'react';
import logo from'../../assets/logo.png'
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10 mt-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8">
                
                <div>
                    <span className="text-white text-xl font-bold mb-3"> <img className='w-12' src={logo} alt="" />HERO.IO</span>
                    <p className="text-sm">Discover the best apps for your everyday life. Trusted by millions worldwide.</p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Home</li>
                        <li>About</li>
                        <li>Apps</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-3">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li>support@appstore.com</li>
                        <li>+1 800 123 4567</li>
                        <li>New York, USA</li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-sm text-gray-600 mt-8 border-t border-gray-700 pt-5">
                © 2026 AppStore. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;