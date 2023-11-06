import { Request, Response } from "express";
import { prisma } from "../index";

const createLigne = async (req: Request, res: Response) => {
  try {
    const {
      ID_LIGNE  ,
      NOM_LIGNE,
      ID_POSTE,
      DATE,
      TIME,
      ETAT_TRNSFO,
      ETAT_SECTIONNEUR,
      ETAT_FUSIBLE,
      ETAT_CONTACT_AUXILIAR,
      TENSION_PHASE_1,
      TENSION_PHASE_2,
      TENSION_PHASE_3,
      COURANT_PHASE_1,
      COURANT_PHASE_2,
      COURANT_PHASE_3,
      FREQUENCE,
      HUMIDITE,
      TEMPERATURE,
    } = req.body;

    const newLigne = await prisma.ligne.create({
      data: {
        ID_LIGNE  ,
        NOM_LIGNE,
        ID_POSTE,
        DATE,
        TIME,
        ETAT_TRNSFO,
        ETAT_SECTIONNEUR,
        ETAT_FUSIBLE,
        ETAT_CONTACT_AUXILIAR,
        TENSION_PHASE_1,
        TENSION_PHASE_2,
        TENSION_PHASE_3,
        COURANT_PHASE_1,
        COURANT_PHASE_2,
        COURANT_PHASE_3,
        FREQUENCE,
        HUMIDITE,
        TEMPERATURE,
      },
    });

    res.status(200).json(newLigne);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getAllLignes = async (req: Request, res: Response) => {
  try {
    const lignes = await prisma.ligne.findMany();
    res.status(200).json(lignes);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getLigne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ligne = await prisma.ligne.findUnique({
      where: {
        ID_LIGNE: id,
      },
    });

    if (!ligne) {
      res.status(404).json({ error: "Ligne not found" });
    } else {
      res.status(200).json(ligne);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateLigne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      NOM_LIGNE,
      ID_POSTE,
      DATE,
      TIME,
      ETAT_TRNSFO,
      ETAT_SECTIONNEUR,
      ETAT_FUSIBLE,
      ETAT_CONTACT_AUXILIAR,
      TENSION_PHASE_1,
      TENSION_PHASE_2,
      TENSION_PHASE_3,
      COURANT_PHASE_1,
      COURANT_PHASE_2,
      COURANT_PHASE_3,
      FREQUENCE,
      HUMIDITE,
      TEMPERATURE,
    } = req.body;

    const updatedLigne = await prisma.ligne.update({
      where: {
        ID_LIGNE: id,
      },
      data: {
        NOM_LIGNE,
        ID_POSTE,
        DATE,
        TIME,
        ETAT_TRNSFO,
        ETAT_SECTIONNEUR,
        ETAT_FUSIBLE,
        ETAT_CONTACT_AUXILIAR,
        TENSION_PHASE_1,
        TENSION_PHASE_2,
        TENSION_PHASE_3,
        COURANT_PHASE_1,
        COURANT_PHASE_2,
        COURANT_PHASE_3,
        FREQUENCE,
        HUMIDITE,
        TEMPERATURE,
      },
    });

    if (!updatedLigne) {
      res.status(404).json({ error: "Ligne not found" });
    } else {
      res.status(200).json(updatedLigne);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteLigne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedLigne = await prisma.ligne.delete({
      where: {
        ID_LIGNE: id,
      },
    });

    if (!deletedLigne) {
      res.status(404).json({ error: "Ligne not found" });
    } else {
      res.status(200).json(deletedLigne);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteAllLignes = async (req: Request, res: Response) => {
  try {
    const deletedLignes = await prisma.ligne.deleteMany();
    res.status(200).json(deletedLignes);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createLigne,
  getAllLignes,
  getLigne,
  updateLigne,
  deleteLigne,
  deleteAllLignes,
};
