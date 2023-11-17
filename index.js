import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRoutes.js";
import { eventRouter } from "./routes/eventRoutes.js";
import { attendRouter } from "./routes/attendRoutes.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

// Parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", userRouter);
app.use("/api", eventRouter);
app.use("/api", attendRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Connected to database and server started on port ${PORT} 🚀`)
    );
  })
  .catch((e) => {
    console.log("Error connecting to the database", e);
  });
