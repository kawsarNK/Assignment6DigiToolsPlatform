import React from 'react';
import { Check } from 'lucide-react';

const SimplePricing = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-3">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-500 text-md mb-12">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">


                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full text-left">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
                        <p className="text-gray-500 mb-6">Perfect for getting started</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-gray-400">/Month</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-grow">
                            <li className="flex items-center text-gray-600 gap-2"><Check size={18} className="text-green-500" /> Access to 10 free tools</li>
                            <li className="flex items-center text-gray-600 gap-2"><Check size={18} className="text-green-500" /> Basic templates</li>
                            <li className="flex items-center text-gray-600 gap-2"><Check size={18} className="text-green-500" /> Community support</li>
                            <li className="flex items-center text-gray-600 gap-2"><Check size={18} className="text-green-500" /> 1 project per month</li>
                        </ul>
                        <button className="w-full py-3 bg-[#7c3aed] text-white rounded-xl font-bold hover:bg-[#6d28d9] transition">
                            Get Started Free
                        </button>
                    </div>

                    <div className="relative bg-[#7c3aed] p-8 rounded-2xl shadow-xl flex flex-col h-full text-left transform md:scale-105 z-10">
                        {/* Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fef9c3] text-[#ca8a04] text-xs font-bold px-4 py-1.5 rounded-full border border-[#fde047]">
                            Most Popular
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                        <p className="text-purple-100 opacity-80 mb-6">Best for professionals</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">$29</span>
                            <span className="text-purple-200">/Month</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-grow">
                            <li className="flex items-center text-white gap-2"><Check size={18} /> Access to all premium tools</li>
                            <li className="flex items-center text-white gap-2"><Check size={18} /> Unlimited templates</li>
                            <li className="flex items-center text-white gap-2"><Check size={18} /> Priority support</li>
                            <li className="flex items-center text-white gap-2"><Check size={18} /> Unlimited projects</li>
                            <li className="flex items-center text-white gap-2"><Check size={18} /> Cloud sync</li>
                            <li className="flex items-center text-white gap-2"><Check size={18} /> Advanced analytics</li>
                        </ul>
                        <button className="w-full py-3 bg-white text-[#7c3aed] rounded-xl font-bold hover:bg-gray-50 transition">
                            Start Pro Trial
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full text-left">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
                        <p className="text-gray-500 mb-6">For teams and businesses</p>
                        <div className="mb-8">
                            <span className="text-4xl font-bold">$99</span>
                            <span className="text-gray-400">/Month</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-grow">
                            <li className="flex items-center text-gray-600 gap-2"><Check size={18} className="text-green-500" /> Everything in Pro</li>
                            <li className="flex items-center text-gray-600 gap-2"><Check size={18} className="text-green-500" /> Team collaboration</li>
                            <li className="flex items-center text-gray-600 gap-2"><Check size={18} className="text-green-500" /> Custom integrations</li>
                            <li className="flex items-center text-gray-600 gap-2"><Check size={18} className="text-green-500" /> Dedicated support</li>
                            <li className="flex items-center text-gray-600 gap-2"><Check size={18} className="text-green-500" /> SLA guarantee</li>
                            <li className="flex items-center text-gray-600 gap-2"><Check size={18} className="text-green-500" /> Custom branding</li>
                        </ul>
                        <button className="w-full py-3 bg-[#7c3aed] text-white rounded-2xl font-bold hover:bg-[#6d28d9] transition">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SimplePricing;