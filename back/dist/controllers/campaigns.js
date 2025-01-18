"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCampaign = exports.getNewCampaigns = exports.getDeadlineCampaigns = void 0;
const campaign_1 = __importDefault(require("../models/campaign"));
// 마감임박 펀딩 조회
const getDeadlineCampaigns = async (req, res) => {
    try {
        const campaigns = await campaign_1.default.find()
            .sort({ deadline: 1 }) // 마감 기한이 빠른 순서로 정렬
            .select('campaignID campaignTitle goalAmount currentAmount deadline progress imageUrl'); // 필요한 필드만 선택
        res.status(200).json(campaigns);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching campaigns', error });
    }
};
exports.getDeadlineCampaigns = getDeadlineCampaigns;
// 신규 펀딩 조회
const getNewCampaigns = async (req, res) => {
    try {
        const campaigns = await campaign_1.default.find()
            .sort({ createdAt: -1 }) // 생성일 기준 최신 순서로 정렬
            .select('campaignID campaignTitle goalAmount currentAmount deadline progress imageUrl');
        res.status(200).json(campaigns);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching campaigns', error });
    }
};
exports.getNewCampaigns = getNewCampaigns;
// 새 펀딩 생성
const createCampaign = async (req, res) => {
    const { campaignTitle, goalAmount, deadline, description } = req.body;
    try {
        // 자동 생성되는 campaignID
        const lastCampaign = await campaign_1.default.findOne().sort({ campaignID: -1 });
        const newCampaignID = lastCampaign ? lastCampaign.campaignID + 1 : 1;
        const newCampaign = new campaign_1.default({
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
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating campaign', error });
    }
};
exports.createCampaign = createCampaign;
