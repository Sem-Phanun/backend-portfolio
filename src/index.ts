import express,{ Application } from "express";
import { PORT } from "./config/secret";
import { PrismaClient } from "@prisma/client";
import rootRouter from "./routes";
import { errorMiddleware } from "./middleware/error";

const app: Application = express();

app.use(express.json())

export const prisma = new PrismaClient({
    log: ['query']
});

app.use('/api', rootRouter)
app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
