import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FundingCard from '../components/FundingCard';
import SuccessCard from '../components/SuccessCard';
import FailedCard from '../components/FailedCard';

const MyPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('created');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // 임시 데이터 생성
    const mockData = Array(12).fill(1).map((_, i) => ({
        id: '1234',
        title: "To. XXX",
        currentAmount: "0.4509",
        targetAmount: "0.5782",
        deadline: "2025.01.01",
        daysLeft: "10",
        progress: 78,
        status: i % 3 === 0 ? 'success' : i % 3 === 1 ? 'failed' : 'ongoing'
    }));

    // 현재 페이지 데이터
    const currentItems = mockData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // 총 페이지 수 계산
    const totalPages = Math.ceil(mockData.length / itemsPerPage);
    const pageButtons = Array.from({ length: totalPages }, (_, i) => i + 1);

    // 카드 클릭 핸들러
    const handleCardClick = (id: string, status: string) => {
        switch (status) {
            case 'success':
                navigate(`/success/${id}`);
                break;
            case 'failed':
                navigate(`/failed/${id}`);
                break;
            default:
                navigate(`/ongoing/${id}`);
        }
    };

    return (
        <div className="container mx-auto px-6 py-8 mt-[30px]">
            <h1 className="text-3xl font-bold mb-8">내 펀딩</h1>

            {/* 탭 메뉴 */}
            <div className="flex gap-4 mb-8 border-b">
                <button
                    onClick={() => {
                        setActiveTab('created');
                        setCurrentPage(1);
                    }}
                    className={`pb-4 px-4 ${activeTab === 'created'
                        ? 'text-[#3BCFB4] border-b-2 border-[#3BCFB4]'
                        : 'text-gray-500'
                        }`}
                >
                    모집한 펀딩
                </button>
                <button
                    onClick={() => {
                        setActiveTab('participated');
                        setCurrentPage(1);
                    }}
                    className={`pb-4 px-4 ${activeTab === 'participated'
                        ? 'text-[#3BCFB4] border-b-2 border-[#3BCFB4]'
                        : 'text-gray-500'
                        }`}
                >
                    참여한 펀딩
                </button>
            </div>

            {/* 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {currentItems.map((item) => {
                    if (item.status === 'success') {
                        return (
                            <div onClick={() => handleCardClick(item.id, item.status)}>
                                <SuccessCard key={item.id} {...item} />
                            </div>
                        );
                    } else if (item.status === 'failed') {
                        return (
                            <div onClick={() => handleCardClick(item.id, item.status)}>
                                <FailedCard key={item.id} {...item} />
                            </div>
                        );
                    } else {
                        return (
                            <div onClick={() => handleCardClick(item.id, item.status)}>
                                <FundingCard key={item.id} {...item} />
                            </div>
                        );
                    }
                })}
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

export default MyPage;
