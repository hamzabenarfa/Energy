import { Request, Response } from "express";
import { prisma } from "../index";
import {FixTime} from "../utils/fixTime";
const createEnregistrement = async (req: Request, res: Response) => {
  try {
    const {
      idlamp,
      ID_LIGNE,
      ID_POSTE,
      tension,
      current,
      reading_time,
      state_lamp,
      NIV_LIGHT,
      cosphi,
      power,
    } = req.body;

    const newEnregistrement = await prisma.enregistrement.create({
      data: {
        idlamp,
        ID_LIGNE,
        ID_POSTE,
        tension,
        current,
        reading_time: new Date(reading_time),
        state_lamp,
        NIV_LIGHT,
        cosphi,
        power,
      },
    });

    res.status(200).json(newEnregistrement);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getAllEnregistrements = async (req: Request, res: Response) => {
  try {
    const enregistrements = await prisma.enregistrement.findMany();
    res.status(200).json(enregistrements);
  } catch (e) {
    console.error("An error occurred:", e);
    res.status(500).json({ error: "An error occurred." });
  }
};

const getEnregistrement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const enregistrement = await prisma.enregistrement.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!enregistrement) {
      res.status(404).json({ error: "Enregistrement not found" });
    } else {
      res.status(200).json(enregistrement);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateEnregistrement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      idlamp,
      ID_LIGNE,
      ID_POSTE,
      tension,
      current,
      reading_time,
      state_lamp,
      NIV_LIGHT,
      cosphi,
      power,
    } = req.body;

    const updatedEnregistrement = await prisma.enregistrement.update({
      where: {
        id: Number(id),
      },
      data: {
        idlamp,
        ID_LIGNE,
        ID_POSTE,
        tension,
        current,
        reading_time: new Date(reading_time),
        state_lamp,
        NIV_LIGHT,
        cosphi,
        power,
      },
    });

    if (!updatedEnregistrement) {
      res.status(404).json({ error: "Enregistrement not found" });
    } else {
      res.status(200).json(updatedEnregistrement);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteEnregistrement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedEnregistrement = await prisma.enregistrement.delete({
      where: {
        id: Number(id),
      },
    });

    if (!deletedEnregistrement) {
      res.status(404).json({ error: "Enregistrement not found" });
    } else {
      res.status(200).json(deletedEnregistrement);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteAllEnregistrements = async (req: Request, res: Response) => {
  try {
    const deletedEnregistrements = await prisma.enregistrement.deleteMany();
    res.status(200).json(deletedEnregistrements);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createEnregistrement,
  getAllEnregistrements,
  getEnregistrement,
  updateEnregistrement,
  deleteEnregistrement,
  deleteAllEnregistrements,
};
