import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    startdatetime: { type: String, required: true },
    enddatetime: { type: String, required: true },
  },
  { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema);
