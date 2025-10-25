import express from "express";
import cors from "cors";

import { dbConnection } from './database/config';
import { routeProduct } from "./apis/product/routes/routesProduct";
import { routeUser } from "./apis/user/routes/routesUser";
import { routeCategory } from "./apis/category/routes/routeCategory";

export class Server {
    private app = express()
    private paths = {
        user : "/api/user",
        product : "/api/product",
        category : "/api/category",
    }

    constructor(){
        this.middlewares();
        this.routes();
        this.connectDB();
    }

    private routes() {
        this.app.use( this.paths.user, routeUser )
        this.app.use( this.paths.product, routeProduct )
        this.app.use( this.paths.category, routeCategory )
    }

    private connectDB() {dbConnection()}

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    public listen() { this.app.listen( process.env.PORT ) }
}