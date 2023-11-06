import { Request, Response } from "express";
import { prisma } from "../index";

const createLampe = async (req: Request, res: Response) => {
  try {
    const {
      ID_LAMPE,
      ID_LIGNE,
      DATE,
      TIME,
      AIR_QUALITY,
      TENSION_PHASE_1,
      ETAT_LAMPE,
      NIV_LIGHT,
      COURANT_PHASE_1,
      FREQUENCE,
      HUMIDITE,
      TEMPERATURE,
    } = req.body;

    const newLampe = await prisma.lampes.create({
      data: {
        ID_LAMPE,
        ID_LIGNE,
        DATE,
        TIME,
        AIR_QUALITY,
        TENSION_PHASE_1,
        ETAT_LAMPE,
        NIV_LIGHT,
        COURANT_PHASE_1,
        FREQUENCE,
        HUMIDITE,
        TEMPERATURE,
      },
    });

    res.status(200).json(newLampe);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getAllLampes = async (req: Request, res: Response) => {
  try {
    const lampes = await prisma.lampes.findMany();
    res.status(200).json(lampes);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getLampe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const lampe = await prisma.lampes.findUnique({
      where: {
        ID_LAMPE: id,
      },
    });

    if (!lampe) {
      res.status(404).json({ error: "Lampe not found" });
    } else {
      res.status(200).json(lampe);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateLampe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      ID_LIGNE,
      DATE,
      TIME,
      AIR_QUALITY,
      TENSION_PHASE_1,
      ETAT_LAMPE,
      NIV_LIGHT,
      COURANT_PHASE_1,
      FREQUENCE,
      HUMIDITE,
      TEMPERATURE,
    } = req.body;

    const updatedLampe = await prisma.lampes.update({
      where: {
        ID_LAMPE: id,
      },
      data: {
        ID_LIGNE,
        DATE,
        TIME,
        AIR_QUALITY,
        TENSION_PHASE_1,
        ETAT_LAMPE,
        NIV_LIGHT,
        COURANT_PHASE_1,
        FREQUENCE,
        HUMIDITE,
        TEMPERATURE,
      },
    });

    if (!updatedLampe) {
      res.status(404).json({ error: "Lampe not found" });
    } else {
      res.status(200).json(updatedLampe);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteLampe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedLampe = await prisma.lampes.delete({
      where: {
        ID_LAMPE: id,
      },
    });

    if (!deletedLampe) {
      res.status(404).json({ error: "Lampe not found" });
    } else {
      res.status(200).json(deletedLampe);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteAllLampes = async (req: Request, res: Response) => {
  try {
    const deletedLampes = await prisma.lampes.deleteMany();
    res.status(200).json(deletedLampes);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createLampe,
  getAllLampes,
  getLampe,
  updateLampe,
  deleteLampe,
  deleteAllLampes,
};
