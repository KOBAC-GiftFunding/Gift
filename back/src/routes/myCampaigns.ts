import { Router } from 'express';
import {
  getMyCampaigns,
  getCampaignDetails,
  updateCampaignStatus
} from '../controllers/myCampaigns';

const router = Router();

router.get('/', getMyCampaigns); // 참여한 펀딩 목록 조회
router.get('/:campaignID', getCampaignDetails); // 특정 펀딩 상세 조회
router.patch('/:campaignID/status', updateCampaignStatus); // 펀딩 상태 업데이트

export default router;
