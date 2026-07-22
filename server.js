
import express from 'express';
import {registerRoutes}from'./src/routes/route.js';
import {connect} from './dataBase.js';
import {initSocket} from "./src/socket/socketManager.js";
import * as http from "node:http";

const app = express();

app.use(express.json());
registerRoutes(app);

await connect()
registerRoutes(app);

const httpServer= http.createServer(app);
initSocket(httpServer);
const PORT = process.env.PORT || 8004;
httpServer.listen(PORT, () => console.log(`server avviato localhost ${PORT}`));

app.use((err, req, res, next) => {
    if (err?.error && err.error.isJoi) {
        res.status(400).json({ type: err.type, message: err.error.toString() });
    }else {
        next(err);
    }
});


export default app;