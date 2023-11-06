import { Request, Response } from "express";
import { prisma } from "../index";

const createOuvrier = async (req: Request, res: Response) => {
  try {
    const {
      NOM_TECHNICIEN,
      cardID,
      postetime,
      username,
      date_timeIn,
      date_timeOut,
      UserStat,
      presencetime,
      workday,
    } = req.body;

    const newOuvrier = await prisma.ouvrier.create({
      data: {
        NOM_TECHNICIEN,
        cardID,
        postetime,
        username,
        date_timeIn,
        date_timeOut,
        UserStat,
        presencetime,
        workday,
      },
    });

    res.status(200).json(newOuvrier);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getAllOuvriers = async (req: Request, res: Response) => {
  try {
    const ouvriers = await prisma.ouvrier.findMany();
    res.status(200).json(ouvriers);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getOuvrier = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ouvrier = await prisma.ouvrier.findUnique({
      where: {
        ID_TECHNICIEN: Number(id),
      },
    });

    if (!ouvrier) {
      res.status(404).json({ error: "Ouvrier not found" });
    } else {
      res.status(200).json(ouvrier);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateOuvrier = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      NOM_TECHNICIEN,
      cardID,
      postetime,
      username,
      date_timeIn,
      date_timeOut,
      UserStat,
      presencetime,
      workday,
    } = req.body;

    const updatedOuvrier = await prisma.ouvrier.update({
      where: {
        ID_TECHNICIEN: Number(id),
      },
      data: {
        NOM_TECHNICIEN,
        cardID,
        postetime,
        username,
        date_timeIn,
        date_timeOut,
        UserStat,
        presencetime,
        workday,
      },
    });

    if (!updatedOuvrier) {
      res.status(404).json({ error: "Ouvrier not found" });
    } else {
      res.status(200).json(updatedOuvrier);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteOuvrier = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedOuvrier = await prisma.ouvrier.delete({
      where: {
        ID_TECHNICIEN: Number(id),
      },
    });

    if (!deletedOuvrier) {
      res.status(404).json({ error: "Ouvrier not found" });
    } else {
      res.status(200).json(deletedOuvrier);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteAllOuvriers = async (req: Request, res: Response) => {
  try {
    const deletedOuvriers = await prisma.ouvrier.deleteMany();
    res.status(200).json(deletedOuvriers);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createOuvrier,
  getAllOuvriers,
  getOuvrier,
  updateOuvrier,
  deleteOuvrier,
  deleteAllOuvriers,
};
