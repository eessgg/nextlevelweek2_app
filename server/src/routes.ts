import express from 'express'
const routes = express.Router()

import ClassesController from './controllers/classesController'
import ConnectionController from './controllers/connectionController'

const classesControllers = new ClassesController();
const connectionsControoler = new ConnectionController()



routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsControoler.index);
routes.post("/connections", connectionsControoler.create);


export default routes