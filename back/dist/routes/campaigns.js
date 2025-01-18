"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const campaigns_1 = require("../controllers/campaigns");
const router = (0, express_1.Router)();
// 마감임박 펀딩 조회
router.get('/deadline', campaigns_1.getDeadlineCampaigns);
// 신규 펀딩 조회
router.get('/new', campaigns_1.getNewCampaigns);
// 새 펀딩 생성
router.post('/', campaigns_1.createCampaign);
exports.default = router;
