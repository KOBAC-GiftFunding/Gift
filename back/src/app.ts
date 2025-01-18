import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/database';
import campaignRoutes from './routes/campaigns';
import myCampaignRoutes from './routes/myCampaigns';

dotenv.config();

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 라우트 설정
app.use('/campaigns', campaignRoutes);
app.use('/my-campaigns', myCampaignRoutes);

// 데이터베이스 연결
connectDB();

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;


