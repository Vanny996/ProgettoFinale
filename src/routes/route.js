import  express from 'express';
import {UserRoutes} from './UserRoutes.js';
const router = express.Router();

export  const registerRoutes= (app)=>{

    new UserRoutes(router);
     app.use('/', router)
}