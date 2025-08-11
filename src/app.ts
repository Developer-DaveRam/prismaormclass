import express from 'express'
import dotenv from 'dotenv'
import { json } from 'body-parser'
import userRouter from './router/userRouter'
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../src/swagger/swagger-output.json";  



dotenv.config()

const app = express()
const PORT   = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/check",(req,res)=>{
    return res.json("hello")
})

app.use("/user",userRouter)
app.listen(PORT,()=>{
    console.log(`Server is on the port http://localhost:${PORT}`);
    
})
