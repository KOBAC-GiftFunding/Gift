import { Router } from 'express';
import { getDeadlineCampaigns, getNewCampaigns, createCampaign } from '../controllers/campaigns';

const router = Router();

// 마감임박 펀딩 조회
router.get('/deadline', getDeadlineCampaigns);

// 신규 펀딩 조회
router.get('/new', getNewCampaigns);

// 새 펀딩 생성
router.post('/', createCampaign);

export default router;

