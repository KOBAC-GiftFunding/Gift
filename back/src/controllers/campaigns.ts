import { Request, Response } from 'express';
import Campaign from '../models/campaign';

// 마감임박 펀딩 조회
export const getDeadlineCampaigns = async (req: Request, res: Response) => {
  try {
    const campaigns = await Campaign.find()
      .sort({ deadline: 1 }) // 마감 기한이 빠른 순서로 정렬
      .select('campaignID campaignTitle goalAmount currentAmount deadline progress imageUrl'); // 필요한 필드만 선택
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching campaigns', error });
  }
};

// 신규 펀딩 조회
export const getNewCampaigns = async (req: Request, res: Response) => {
  try {
    const campaigns = await Campaign.find()
      .sort({ createdAt: -1 }) // 생성일 기준 최신 순서로 정렬
      .select('campaignID campaignTitle goalAmount currentAmount deadline progress imageUrl');
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching campaigns', error });
  }
};

// 새 펀딩 생성
export const createCampaign = async (req: Request, res: Response) => {
  const { campaignTitle, goalAmount, deadline, description } = req.body;

  try {
    // 자동 생성되는 campaignID
    const lastCampaign = await Campaign.findOne().sort({ campaignID: -1 });
    const newCampaignID = lastCampaign ? lastCampaign.campaignID + 1 : 1;

    const newCampaign = new Campaign({
      campaignID: newCampaignID,
      campaignTitle,
      goalAmount,
      deadline,
      description,
      progress: 0,
      imageUrl: `https://example.com/images/${campaignTitle.replace(/\s+/g, '-').toLowerCase()}.png`,
    });

    await newCampaign.save();

    res.status(201).json({
      campaignID: newCampaignID,
      message: 'Campaign created successfully.',
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating campaign', error });
  }
};

