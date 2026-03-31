import React from 'react';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png';

const Steps = () => {
    const steps = [
        {
            id: "01",
            title: "Create Account",
            description: "Sign up for free in seconds. No credit card required to get started.",
            img: userImg,
        },
        {
            id: "02",
            title: "Choose Products",
            description: "Browse our catalog and select the tools that fit your needs.",
            img: packageImg,
        },
        {
            id: "03",
            title: "Start Creating",
            description: "Download and start using your premium tools immediately.",
            img: rocketImg,
        },
    ];

    return (
        <section className="bg-[#f8fafc] py-24 px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header Section */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Get Started In 3 Steps
                </h2>
                <p className="text-gray-500 text-lg mb-16">
                    Start using premium digital tools in minutes, not hours.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col items-center"
                        >
                            {/* Number Badge */}
                            <div className="absolute top-6 right-6 bg-[#7c3aed] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                {step.id}
                            </div>

                            {/* Image Container */}
                            <div className="w-28 h-28 bg-purple-50 rounded-full flex items-center justify-center mb-8">
                                <img
                                    src={step.img}
                                    alt={step.title}
                                    className="w-14 h-14 object-contain"
                                />
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed max-w-[250px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;