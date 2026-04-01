import { Check } from 'lucide-react';

const Card = ({ cardData, onAddToCart }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto">
            {cardData.map(item => (
                <div key={item.id} className="flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-gray-50 p-3 rounded-2xl">
                            <img src={item.icon} alt="" />
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${item.badgeColor}`}>
                            {item.badge}
                        </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{item.description}</p>

                    <div className="flex items-baseline mb-6">
                        <span className="text-2xl font-semibold text-slate-900">${item.price}</span>
                        <span className="text-slate-400 ml-1">{item.billing}</span>
                    </div>

                    <ul className="space-y-2 mb-6 flex-grow">
                        {item.features.map((feature, id) => (
                            <li key={id} className="flex items-center gap-2 text-sm text-gray-600">
                                <Check size={16} className="text-green-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => onAddToCart(item)}
                        className="w-full bg-[#8b2cf5] hover:bg-[#7a25d9] text-white font-bold py-3 rounded-full transition-all active:scale-95"
                    >
                        Buy Now
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Card;