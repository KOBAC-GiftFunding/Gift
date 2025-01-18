"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./utils/database"));
const campaigns_1 = __importDefault(require("./routes/campaigns"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// 미들웨어 설정
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// 라우트 설정
app.use('/campaigns', campaigns_1.default);
// 데이터베이스 연결
(0, database_1.default)();
// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
exports.default = app;
