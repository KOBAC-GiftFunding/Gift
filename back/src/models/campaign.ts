import mongoose, { Schema, Document } from 'mongoose';

export interface ICampaign extends Document {
  title: string;
  goalAmount: number;
  currentAmount: number;
  deadline: Date;
  description: string;
}

const CampaignSchema: Schema = new Schema({
  title: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  deadline: { type: Date, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<ICampaign>('Campaign', CampaignSchema);
