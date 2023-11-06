import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import UserRouter from "./routes/user.route";
import TransfoRouter from "./routes/transfo.route";
import LampesRouter from "./routes/lampes.route";
import LigneRouter from "./routes/ligne.route";
import OuvrierRouter from "./routes/ouvrier.route";
import EnregistrementRouter from "./routes/enregistrement.route";

export const prisma = new PrismaClient();

const app = express();
const port = 4000;
import { FixTime } from "./utils/fixTime";

async function main() {
  app.use(express.json());

  app.post('/fix-time', (req, res) => {
    FixTime(); 
    res.status(200).send('FixTime function triggered.');
  });
  // Register API routes
  app.use("/api/v1/users", UserRouter);
  app.use("/api/v1/transfo", TransfoRouter);
  app.use("/api/v1/lampes", LampesRouter);
  app.use("/api/v1/ligne", LigneRouter);
  app.use("/api/v1/ouvrier", OuvrierRouter);
  app.use("/api/v1/enregistrement", EnregistrementRouter);
  

  // Catch unregistered routes
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });