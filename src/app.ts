import express, { Application, Request, Response } from 'express';
import cors from "cors";
import { productRouter } from './Product/product.router';
const app: Application = express()
const port = 3000

//parsers
app.use(express.json());
app.use(cors());

app.use("/api/products",productRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!!')
})

export default app;