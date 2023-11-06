import express from "express";
import Enregistrement from "../controllers/enregistrement.controller";

const router = express.Router();

router.post("/create", Enregistrement.createEnregistrement);
router.get("/getall", Enregistrement.getAllEnregistrements);
router.get("/get/:id", Enregistrement.getEnregistrement);
router.put("/update/:id", Enregistrement.updateEnregistrement);
router.delete("/delete/:id", Enregistrement.deleteEnregistrement);
router.delete("/deleteall", Enregistrement.deleteAllEnregistrements);

export default router;