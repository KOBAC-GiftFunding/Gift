import mongoose, { Schema, Document } from 'mongoose';

export interface ICampaign extends Document {
  campaignID: number;
  campaignTitle: string;
  goalAmount: number;
  currentAmount: number;
  deadline: Date;
  progress: number;
  imageUrl: string;
  description: string;
  createdAt: Date; // 신규 펀딩 정렬 기준
}

const CampaignSchema: Schema = new Schema({
  campaignID: { type: Number, required: true, unique: true },
  campaignTitle: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  deadline: { type: Date, required: true },
  progress: { type: Number, default: 0 },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ICampaign>('Campaign', CampaignSchema);
