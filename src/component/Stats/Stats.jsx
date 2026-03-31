import React from 'react';

const Stats = () => {
    return (
        <section className="bg-purple-600 py-12">
            <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="text-center md:border-r border-purple-400/50 last:border-0">
                    <h2 className="text-white text-5xl font-bold mb-2">50K+</h2>
                    <p className="text-purple-100 text-lg font-medium opacity-90">Active Users</p>
                </div>

                <div className="text-center md:border-r border-purple-400/50 last:border-0">
                    <h2 className="text-white text-5xl font-bold mb-2">200+</h2>
                    <p className="text-purple-100 text-lg font-medium opacity-90">Premium Tools</p>
                </div>

                <div className="text-center">
                    <h2 className="text-white text-5xl font-bold mb-2">4.9</h2>
                    <p className="text-purple-100 text-lg font-medium opacity-90">Rating</p>
                </div>

            </div>
        </section>
    );
};

export default Stats;