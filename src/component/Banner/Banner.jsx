import React from 'react';
import bannerImg from '../../assets/banner.png';
import playImg from '../../assets/Play.png';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center w-10/12">
            <div>
                <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    <span className="text-sm font-medium text-purple-600">New: AI-Powered Tools Available</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                    Supercharge Your <br /> Digital Workflow
                </h1>

                <p className="text-gray-500 text-lg mb-4 max-w-lg leading-relaxed">
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>

                <button className="text-gray-500 font-medium hover:underline block mb-8">
                    Explore Products
                </button>

                <div className="flex flex-wrap gap-4">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-700 shadow-lg shadow-purple-200 transition">
                        Explore Products
                    </button>
                    <button className="flex items-center space-x-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-50 transition">
                        <img
                            src={playImg}
                            alt="play button UI"
                            className="w-100% h-auto"
                        />
                        <span>Watch Demo</span>
                    </button>
                </div>
            </div>

            <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl">
                    <img
                        src={bannerImg}
                        alt="Digital Workflow UI"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;