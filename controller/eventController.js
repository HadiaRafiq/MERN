import { Event } from "../../models/eventModel.js";

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    if (!events || events.length === 0) {
      return res.status(404).json({ error: "No events found" });
    }
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Event.findOne({ _id: id });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createEvent = async (req, res) => {
  const { name, startdatetime, enddatetime } = req.body;
  try {
    const event = await Event.create({ name, startdatetime, enddatetime });
    // Alternate method
    // const event = new Event({  name, startdatetime, enddatetime});
    // user.save()
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const editEvent = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedEvent = await Event.findOneAndUpdate(
      { _id: id },
      { $set: { ...req.body } },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    return res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedEvent = await Event.findByIdAndDelete({ _id: id });
    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    return res.status(200).json(deletedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
