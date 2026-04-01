import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const PricingCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/cardData.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <section className="bg-slate-50 py-10 px-6">
            <div className="mx-auto w-10/12">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">Premium Digital Tools</h2>
                    <p className="text-gray-500 max-w-xl mx-auto mb-6">
                        Choose from our curated collection of premium digital products designed
                        to boost your productivity and creativity.
                    </p>

                    {/* Toggle Switch */}
                    <div className="inline-flex bg-white p-1.5 rounded-full border border-gray-100 shadow-sm">
                        <button className="bg-[#7c3aed] text-white px-6 py-2 rounded-full font-semibold">
                            Products
                        </button>
                        <button className="text-gray-500 px-6 py-1.5 rounded-full font-semibold">
                            Cart (2)
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative flex flex-col">

                            {/* Badge */}
                            <span className={`absolute top-6 right-6 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${item.badgeColor}`}>
                                {item.badge}
                            </span>

                            {/* Icon Placeholder (You can map specific icons here) */}
                            <div className="w-12 h-12 bg-slate-50 rounded-xl mb-6 flex items-center justify-center">
                                <span className="text-2xl">🛠️</span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="mb-4">
                                <span className="text-xl font-bold text-slate-900">${item.price}</span>
                                <span className="text-gray-400 text-sm font-medium">{item.billing}</span>
                            </div>

                            {/* Feature List */}
                            <ul className="space-y-2 mb-6 flex-grow">
                                {item.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                        <Check size={16} className="text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-3 bg-[#7c3aed] text-white rounded-2xl font-bold hover:bg-[#6d28d9] transition-all active:scale-95">
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingCard;