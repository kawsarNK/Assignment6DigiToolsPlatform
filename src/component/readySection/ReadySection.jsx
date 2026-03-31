import React from 'react';

const ReadySection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-[#7c3aed] to-[#a855f7] py-16 px-6 text-center text-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-5">
                    Ready To Transform Your Workflow?
                </h2>
                <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto opacity-90">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                    <button className="bg-white text-[#7c3aed] px-6 py-3 rounded-full font-bold text-md hover:bg-gray-100 transition shadow-lg">
                        Explore Products
                    </button>
                    <button className="border-2 border-white/40 text-white px-6 py-3 rounded-full font-bold text-md hover:bg-white/10 transition">
                        View Pricing
                    </button>
                </div>

                <p className="text-purple-200 text-sm font-medium">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>
    );
};

export default ReadySection;