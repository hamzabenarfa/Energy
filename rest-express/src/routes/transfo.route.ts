import express from "express";
import Transfo from "../controllers/transfo.controller";

const router = express.Router();

router.post("/create", Transfo.createTransfo);
router.get("/getall", Transfo.getAllTransfos);
router.get("/get/:id", Transfo.getTransfo);
router.put("/update/:id", Transfo.updateTransfo);
router.delete("/delete/:id", Transfo.deleteTransfo);
router.delete("/deleteall", Transfo.deleteAllTransfos);

export default router;