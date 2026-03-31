import React from 'react';
import facebookImg from '../../assets/Facebook.png';
import instraImg from '../../assets/Instagram.png';
import xImg from '../../assets/x.png';

const Footer = () => {
    const footerLinks = {
        Product: ['Features', 'Pricing', 'Templates', 'Integrations'],
        Company: ['About', 'Blog', 'Careers', 'Press'],
        Resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
    };

    const socialIcons = [
        { img: instraImg, alt: 'Instagram' },
        { img: facebookImg, alt: 'Facebook' },
        { img: xImg, alt: 'X' },
    ];

    return (
        <footer className="bg-[#0f172a] text-white pt-20 pb-10 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

                    {/* Brand Column - Spans 2 columns */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6 text-white">DigiTools</h2>
                        <p className="text-gray-400 text-base leading-relaxed max-w-xs">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Dynamic Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-bold text-lg mb-6">{title}</h3>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Links Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Social Links</h3>
                        <div className="flex gap-3">
                            {socialIcons.map((social, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-purple-500 transition-all duration-300 group"
                                >
                                    <img
                                        src={social.img}
                                        alt={social.alt}
                                        className="w-5 h-5 object-contain group-hover:brightness-0 group-hover:invert"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-500 text-sm">
                        © 2026 Digitools. All rights reserved.
                    </p>

                    <div className="flex gap-8 text-gray-500 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;