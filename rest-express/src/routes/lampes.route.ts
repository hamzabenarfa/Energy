import express from "express";
import Lampes from "../controllers/lampes.controller";

const router = express.Router();

router.post("/create", Lampes.createLampe);
router.get("/getall", Lampes.getAllLampes);
router.get("/get/:id", Lampes.getLampe);
router.put("/update/:id", Lampes.updateLampe);
router.delete("/delete/:id", Lampes.deleteLampe);
router.delete("/deleteall", Lampes.deleteAllLampes);

export default router;