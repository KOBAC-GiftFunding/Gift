"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCampaignStatus = exports.getCampaignDetails = exports.getMyCampaigns = void 0;
const campaign_1 = __importDefault(require("../models/campaign"));
const getMyCampaigns = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const campaigns = await campaign_1.default.find()
            .skip((+page - 1) * +limit)
            .limit(+limit);
        const total = await campaign_1.default.countDocuments();
        res.status(200).json({
            page: +page,
            limit: +limit,
            total,
            campaigns
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching campaigns', error });
    }
};
exports.getMyCampaigns = getMyCampaigns;
const getCampaignDetails = async (req, res) => {
    const { campaignID } = req.params;
    try {
        const campaign = await campaign_1.default.findOne({ campaignID: +campaignID });
        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }
        res.status(200).json(campaign);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching campaign details', error });
    }
};
exports.getCampaignDetails = getCampaignDetails;
const updateCampaignStatus = async (req, res) => {
    const { campaignID } = req.params;
    const { status } = req.body;
    try {
        const campaign = await campaign_1.default.findOneAndUpdate({ campaignID: +campaignID }, { status }, { new: true });
        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }
        res.status(200).json({ message: 'Campaign status updated successfully.' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating campaign status', error });
    }
};
exports.updateCampaignStatus = updateCampaignStatus;
