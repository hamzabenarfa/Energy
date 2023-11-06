import express from "express";
import Ouvrier from "../controllers/ouvrier.controller";

const router = express.Router();

router.post("/create", Ouvrier.createOuvrier);
router.get("/getall", Ouvrier.getAllOuvriers);
router.get("/get/:id", Ouvrier.getOuvrier);
router.put("/update/:id", Ouvrier.updateOuvrier);
router.delete("/delete/:id", Ouvrier.deleteOuvrier);
router.delete("/deleteall", Ouvrier.deleteAllOuvriers);

export default router;