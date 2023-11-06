import { Request, Response } from "express";
import { prisma } from "../index";

const createUser = async (req: Request, res: Response) => {
  try {
    const { login, pdw, role, email, etat } = req.body;
    const newUser = await prisma.users.create({
      data: {
        login,
        pdw,
        role,
        email,
        etat,
      },
    });
    res.status(200).json(newUser);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.users.findMany();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.users.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { login, pdw, role, email, etat } = req.body;
    const updatedUser = await prisma.users.update({
      where: {
        id: Number(id),
      },
      data: {
        login,
        pdw,
        role,
        email,
        etat,
      },
    });
    if (!updatedUser) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await prisma.users.delete({
      where: {
        id: Number(id),
      },
    });
    if (!deletedUser) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(deletedUser);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteAllUsers = async (req: Request, res: Response) => {
  try {
    const deletedUsers = await prisma.users.deleteMany();
    res.status(200).json(deletedUsers);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
};
