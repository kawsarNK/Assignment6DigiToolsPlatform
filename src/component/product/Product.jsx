import React, { use } from 'react';
import Card from '../card/Card';

const Product = ({ cardPromise }) => {
    const cardData = use(cardPromise);
    return (
        < div className='Container mx-auto bg-slate-50 py-10 px-6"'>
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
            </div >
            <Card cardData={cardData} />

        </div >

    );
};

export default Product;