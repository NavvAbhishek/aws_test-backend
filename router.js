import express from "express";
const router = express.Router();
import { addUser, deleteUser, getUsers, updateUser } from "./controller.js";

router.get("/users", getUsers);
router.post("/add", addUser);
router.put("/update", updateUser);
router.post("/delete", deleteUser);

export default router;
