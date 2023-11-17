import mongoose, { Schema } from "mongoose";

const attendSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
});

export const Attend = mongoose.model("Attend", attendSchema);
