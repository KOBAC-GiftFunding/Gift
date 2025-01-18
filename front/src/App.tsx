import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import DeadlinePage from './pages/DeadlinePage';
import NewPage from './pages/NewPage';
import CreatePage from './pages/CreatePage';
import DetailPage from './pages/DetailPage';
import MyPage from './pages/MyPage';
import SuccessPage from './pages/SuccessPage';
import FailedPage from './pages/FailedPage';
import OngoingPage from './pages/OngoingPage';



const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-[90px]">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/deadline" element={<DeadlinePage />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/success/:id" element={<SuccessPage />} />
            <Route path="/failed/:id" element={<FailedPage />} />
            <Route path="/ongoing/:id" element={<OngoingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;