import express from "express";
import {
  createEvent,
  deleteEvent,
  editEvent,
  getEvent,
  getEvents,
} from "./controller/eventController.js";

export const eventRouter = express.Router();

//@desc get all events
//@route GET api/events
//@access private
eventRouter.get("/events", getEvents);

//@desc get event by id
//@route GET api/event/:id
//@access private
eventRouter.get("/event/:id", getEvent);

//@desc create a new event
//@route POST api/event
//@access private
eventRouter.post("/event", createEvent);

//@desc edit a event
//@route PUT api/event/:id
//@access private
eventRouter.put("/event/:id", editEvent);

//@desc delete a event
//@route DELETE api/event/:id
//@access private
eventRouter.delete("/event/:id", deleteEvent);

// eventRouter.route("/events/:id").get(getEvent).put(editEvent).delete(deleteEvent);
