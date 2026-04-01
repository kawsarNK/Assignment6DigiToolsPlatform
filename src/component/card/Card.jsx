import { Check } from 'lucide-react';

const Card = ({ cardData }) => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-10/12 mx-auto">
            {cardData.map(cardData => {
                return <div className="max-w-[23rem] rounded-lg border border-gray-100 bg-white p-8 shadow-sm font-sans">
                    {/* Header Section */}
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-gray-50 p-3 rounded-full">
                            <img className="w-100%" src={cardData.icon} alt="" />

                        </div>
                        <span className={`right-6 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${cardData.badgeColor}`}>
                            {cardData.badge}
                        </span>
                    </div>

                    {/* Title & Description */}
                    <h2 className="text-xl font-bold text-slate-900 mb-3">
                        {cardData.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-4 line-clamp-2">
                        {cardData.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-baseline mb-6">
                        <span className="text-2xl font-semibold text-slate-900">${cardData.price}</span>
                        <span className="text-slate-400 ml-1">{cardData.billing}</span>
                    </div>

                    {/* Features List */}

                    <ul className="space-y-2 mb-6 flex-grow">
                        {cardData.features.map((feature, id) => (
                            <li key={id} className="flex items-center gap-2 text-sm text-gray-600">
                                <Check size={16} className="text-green-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Action Button */}
                    <button className="w-full bg-[#8b2cf5] hover:bg-[#7a25d9] text-white font-semibold py-3 rounded-full transition-colors duration-200 text-lg">
                        Buy Now
                    </button>
                </div>
            })}




        </div>



    );
};

export default Card;