
import dotenv from "dotenv"
dotenv.config();
import express from 'express'
import bootstrap from './src/index.router.js';
const app=express();
const port=5000;
import cors from 'cors'

app.use(cors())

bootstrap(app,express);

app.listen(port,()=>{
    console.log(`Example app listing on port ${port}`);
})