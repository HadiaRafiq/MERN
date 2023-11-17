import { User } from "../../models/userModel.js";
import { Event } from "../../models/eventModel.js";
import { Attend } from "../../models/attendModel.js";
import mongoose, { Mongoose, Schema } from "mongoose";

export const attendEvent = async (req, res) => {
  const { userId, eventId } = req.body;
  try {
    const user = await User.findById(userId);
    const event = await Event.findById(eventId);

    if (!user || !event) {
      res.status(404).json({ error: `${!user ? "User" : "Event"} not found` });
    }
    const attendRecord = await Attend.create({ userId, eventId });
    res.status(200).json(attendRecord);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAttendanceRecord = async (req, res) => {
  try {
    const attendaceRecords = await Attend.find();
    if (!attendaceRecords.length) {
      res.status(200).json({ message: "List is empty" });
    }
    res.status(200).json({ attendaceRecords });
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getEventAttendanceRecord = async (req, res) => {
  const eventId = req.params.eventId;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      res.status(404).json({ error: "Event not found" });
    }
    const eventsAttendanceRecord = await Attend.find({
      eventId,
    });
    res.status(200).json({ eventsAttendanceRecord });
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const editAttendanceRecord = async (req, res) => {
  const attendId = req.params.attendId;
  const { userId, eventId } = req.body;
  try {
    const user = await User.findOne({ _id: userId });
    const event = await Event.findOne({
      _id: eventId,
    });

    if (!user || !event) {
      return res
        .status(404)
        .json({ error: `${!user ? "User" : "Event"} not found` });
    }

    const updatedRecord = await Attend.findOneAndUpdate(
      { _id: attendId },
      { $set: { ...req.body } },
      { new: true }
    );

    if (!updatedRecord) {
      return res.status(404).json({ error: "Record not found" });
    }

    res.status(200).json({ updatedRecord });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteEventAttendanceRecord = async (req, res) => {
  const attendId = req.params.attendId;
  try {
    const deletedRecord = await Attend.findByIdAndDelete({ _id: attendId });
    if (!deletedRecord) {
      res.status(404).json({ error: "Record not found" });
    }
    res.status(200).json({ deletedRecord });
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
