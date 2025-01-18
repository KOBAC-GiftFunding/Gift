import React, { useState } from 'react';
import FundingCard from '../components/FundingCard';

const NewPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // 한 페이지당 보여줄 카드 수

    // 임시 데이터 생성 (실제로는 API에서 받아올 예정)
    const mockData = Array(10).fill(1).map((_, i) => ({
        id: i + 1,
        title: "To. XXX",
        currentAmount: "0.4509",
        targetAmount: "0.5782",
        deadline: "2025.01.01",
        daysLeft: "10",
        progress: 78
    }));

    // 현재 페이지에 표시할 데이터
    const currentItems = mockData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // 총 페이지 수 계산
    const totalPages = Math.ceil(mockData.length / itemsPerPage);

    // 페이지네이션 버튼 생성
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(i);
    }

    return (
        <div className="container mx-auto px-6 py-8 mt-[30px]">
            <h1 className="text-3xl font-bold mb-8">신규 펀딩</h1>

            {/* 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {currentItems.map((item) => (
                    <FundingCard
                        key={item.id}
                        {...item}
                        onClick={() => console.log(`Clicked card ${item.id}`)}
                    />
                ))}
            </div>

            {/* 페이지네이션 */}
            <div className="flex justify-center items-center gap-2 mt-12">
                <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 disabled:text-gray-300"
                >
                    ‹
                </button>

                {pageButtons.map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg ${currentPage === page
                            ? 'bg-[#3BCFB4] text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 disabled:text-gray-300"
                >
                    ›
                </button>
            </div>
        </div>
    );
};

export default NewPage;