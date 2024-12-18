import { Router, Request, Response } from "express";
import authRoutes from "./auth";
const rootRouter: Router = Router();

rootRouter.get("/", (req: Request, res: Response) => {
    res.send("Root Endpoint");
});
rootRouter.use('/auth', authRoutes);

export default rootRouter;
