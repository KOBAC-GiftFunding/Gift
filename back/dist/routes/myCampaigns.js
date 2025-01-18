"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const myCampaigns_1 = require("../controllers/myCampaigns");
const router = (0, express_1.Router)();
router.get('/', myCampaigns_1.getMyCampaigns); // 참여한 펀딩 목록 조회
router.get('/:campaignID', myCampaigns_1.getCampaignDetails); // 특정 펀딩 상세 조회
router.patch('/:campaignID/status', myCampaigns_1.updateCampaignStatus); // 펀딩 상태 업데이트
exports.default = router;
