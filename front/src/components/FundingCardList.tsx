import React from 'react';
import FundingCard from './FundingCard';

const FundingCardList = ({ title }) => {
    return (
        <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button className="text-[#929292] hover:text-gray-600">
                    전체 보기 <span>›</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <FundingCard key={i} />
                ))}
            </div>
        </div>
    );
};

export default FundingCardList;