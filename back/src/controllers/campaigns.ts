import { Request, Response } from 'express';
import Campaign from '../models/campaign';

// 마감임박 펀딩 조회
export const getDeadlineCampaigns = async (req: Request, res: Response) => {
  try {
    const campaigns = await Campaign.find().sort({ deadline: 1 }).limit(10);
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching campaigns', error });
  }
};

// 신규 펀딩 조회
export const getNewCampaigns = async (req: Request, res: Response) => {
  try {
    const campaigns = await Campaign.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching campaigns', error });
  }
};

// 새 펀딩 생성
export const createCampaign = async (req: Request, res: Response) => {
  const { title, goalAmount, deadline, description } = req.body;
  try {
    const campaign = new Campaign({ title, goalAmount, deadline, description });
    await campaign.save();
    res.status(201).json({ id: campaign.id, message: 'Campaign created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating campaign', error });
  }
};
