import express from "express";
import User from "../controllers/user.controller";

const router = express.Router();

router.post("/create", User.createUser);
router.get("/getall", User.getAllUsers);
router.get("/get/:id", User.getUser);
router.put("/update/:id", User.updateUser);
router.delete("/delete/:id", User.deleteUser);
router.delete("/deleteall", User.deleteAllUsers);

export default router;