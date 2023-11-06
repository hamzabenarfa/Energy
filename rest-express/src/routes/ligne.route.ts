import express from "express";
import Ligne from "../controllers/ligne.controller";

const router = express.Router();

router.post("/create", Ligne.createLigne);
router.get("/getall", Ligne.getAllLignes);
router.get("/get/:id", Ligne.getLigne);
router.put("/update/:id", Ligne.updateLigne);
router.delete("/delete/:id", Ligne.deleteLigne);
router.delete("/deleteall", Ligne.deleteAllLignes);

export default router;