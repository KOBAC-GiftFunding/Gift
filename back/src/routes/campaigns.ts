import { Router } from 'express';
import { getDeadlineCampaigns, getNewCampaigns, createCampaign } from '../controllers/campaigns';

const router = Router();

router.get('/?sort=deadline', getDeadlineCampaigns);
router.get('/?sort=new', getNewCampaigns);
router.post('/', createCampaign);

export default router;
