import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  address: { type: String, unique: true },
  favorite: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
});
