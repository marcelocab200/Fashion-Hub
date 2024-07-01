import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import routes from "./routes";

dotenv.config({path: '../.env'})

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
});

export default app;