import React from 'react';
import FundingCardList from '../components/FundingCardList';

const MainPage = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <FundingCardList title="마감임박 펀딩" />
            <FundingCardList title="신규 펀딩" />
            <img
                src="/ETH.png"
                alt="ETH Banner"
                className="w-full rounded-lg cursor-pointer"
            />
        </div>
    );
};

export default MainPage;