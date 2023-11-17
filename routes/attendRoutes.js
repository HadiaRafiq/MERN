import express from "express";

import {
  attendEvent,
  deleteEventAttendanceRecord,
  editAttendanceRecord,
  getAttendanceRecord,
  getEventAttendanceRecord,
} from "./controller/attendController.js";

export const attendRouter = express.Router();

//@desc create attendance record
//@route POST api/attend
//@access private
attendRouter.post("/attend", attendEvent);

//@desc get all attendance record
//@route GET api/attend
//@access private
attendRouter.get("/attend", getAttendanceRecord);

//@desc get attendance record for specific event
//@route GET api/attend/:eventId
//@access private
attendRouter.get("/attend/:eventId", getEventAttendanceRecord);

//@desc edit attendance record
//@route PUT api/attend/:attendId
//@access private
attendRouter.put("/attend/:attendId", editAttendanceRecord);

//@desc delete attendance record
//@route DELETE api/attend/:attendId
//@access private
attendRouter.delete("/attend/:attendId", deleteEventAttendanceRecord);
