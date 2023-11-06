import { Request, Response } from "express";
import { prisma } from "../index";

const createTransfo = async (req: Request, res: Response) => {
  try {
    const {
      ID_TRANSORMATEUR,
      SECTEUR,
      REGION,
      GOVERNORAT,
      ETAT_BECHOLTZ2,
      ETAT_SECTIONNEUR,
      ETAT_FUSIBLE,
      ETAT_DISJONCTEUR,
      ETAT_RELAIS,
      ETAT_KM1,
      ETAT_KM2,
      ETAT_BECHOLTZ1,
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

    const newTransfo = await prisma.transfo.create({
      data: {
        ID_TRANSORMATEUR,
        SECTEUR,
        REGION,
        GOVERNORAT,
        ETAT_BECHOLTZ2,
        ETAT_SECTIONNEUR,
        ETAT_FUSIBLE,
        ETAT_DISJONCTEUR,
        ETAT_RELAIS,
        ETAT_KM1,
        ETAT_KM2,
        ETAT_BECHOLTZ1,
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

    res.status(200).json(newTransfo);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getAllTransfos = async (req: Request, res: Response) => {
  try {
    const transfos = await prisma.transfo.findMany();
    res.status(200).json(transfos);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
const getTransfo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const transfo = await prisma.transfo.findUnique({
        where: {
          ID_TRANSORMATEUR: id,
        },
      });
      if (!transfo) {
        res.status(404).json({ error: "Transfo not found" });
      } else {
        res.status(200).json(transfo);
      }
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };
  
  // Function to update a specific Transfo by ID
  const updateTransfo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const {
        SECTEUR,
        REGION,
        GOVERNORAT,
        ETAT_BECHOLTZ2,
        ETAT_SECTIONNEUR,
        ETAT_FUSIBLE,
        ETAT_DISJONCTEUR,
        ETAT_RELAIS,
        ETAT_KM1,
        ETAT_KM2,
        ETAT_BECHOLTZ1,
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
  
      const updatedTransfo = await prisma.transfo.update({
        where: {
          ID_TRANSORMATEUR: id,
        },
        data: {
          SECTEUR,
          REGION,
          GOVERNORAT,
          ETAT_BECHOLTZ2,
          ETAT_SECTIONNEUR,
          ETAT_FUSIBLE,
          ETAT_DISJONCTEUR,
          ETAT_RELAIS,
          ETAT_KM1,
          ETAT_KM2,
          ETAT_BECHOLTZ1,
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
  
      if (!updatedTransfo) {
        res.status(404).json({ error: "Transfo not found" });
      } else {
        res.status(200).json(updatedTransfo);
      }
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };
  
  // Function to delete a specific Transfo by ID
  const deleteTransfo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedTransfo = await prisma.transfo.delete({
        where: {
          ID_TRANSORMATEUR: id,
        },
      });
  
      if (!deletedTransfo) {
        res.status(404).json({ error: "Transfo not found" });
      } else {
        res.status(200).json(deletedTransfo);
      }
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };
  
  // Function to delete all Transfos
  const deleteAllTransfos = async (req: Request, res: Response) => {
    try {
      const deletedTransfos = await prisma.transfo.deleteMany();
      res.status(200).json(deletedTransfos);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };
  
  export default {
    createTransfo,
    getAllTransfos,
    getTransfo,
    updateTransfo,
    deleteTransfo,
    deleteAllTransfos,
  };