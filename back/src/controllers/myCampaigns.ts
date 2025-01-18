import { Request, Response } from 'express';
import Campaign from '../models/campaign';

export const getMyCampaigns = async (req: Request, res: Response) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const campaigns = await Campaign.find()
      .skip((+page - 1) * +limit)
      .limit(+limit);

    const total = await Campaign.countDocuments();

    res.status(200).json({
      page: +page,
      limit: +limit,
      total,
      campaigns
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching campaigns', error });
  }
};

export const getCampaignDetails = async (req: Request, res: Response): Promise<any> => {
    const { campaignID } = req.params;
  
    try {
      const campaign = await Campaign.findOne({ campaignID: +campaignID });
      if (!campaign) {
        return res.status(404).json({ message: 'Campaign not found' });
      }
  
      res.status(200).json(campaign);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching campaign details', error });
    }
};
  
export const updateCampaignStatus = async (req: Request, res: Response): Promise<any> => {
    const { campaignID } = req.params;
    const { status } = req.body;
  
    try {
      const campaign = await Campaign.findOneAndUpdate(
        { campaignID: +campaignID },
        { status },
        { new: true }
      );
      if (!campaign) {
        return res.status(404).json({ message: 'Campaign not found' });
      }
  
      res.status(200).json({ message: 'Campaign status updated successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating campaign status', error });
    }
};
  
