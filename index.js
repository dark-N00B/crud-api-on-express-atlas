import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import products from './server/routes.js';

const server = express();

// middlewares
server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use("/products", products);

// mongoDB Connection
mongoose.connect(process.env.DB_CONNECTION, ()=> {
    console.log("DB Connection established")
})

server.listen(5000, ()=> {
    console.log("Server running on port 5000...")
})