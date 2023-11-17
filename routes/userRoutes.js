import express from "express";
import {
  getUser,
  editUser,
  getUsers,
  createUser,
  deleteUser,
} from "./controller/userController.js";

export const userRouter = express.Router();

//@desc get all users
//@route GET api/users
//@access private
userRouter.get("/users", getUsers);

//@desc get user by id
//@route GET api/user/:id
//@access private
userRouter.get("/user/:id", getUser);

//@desc create a new user
//@route POST api/user
//@access private
userRouter.post("/user", createUser);

//@desc edit a user
//@route PUT api/user/:id
//@access private
userRouter.put("/user/:id", editUser);

//@desc delete a user
//@route DELETE api/user/:id
//@access private
userRouter.delete("/user/:id", deleteUser);

// userRouter.route("/users/:id").get(getUser).put(editUser).delete(deleteUser);
