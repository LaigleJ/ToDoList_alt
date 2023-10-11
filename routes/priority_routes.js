import express from 'express';
import {getAllPriority, createPriority} from ('../controllers/priority_controllers.js');

const routerPriority = express.Router();

routerPriority.get('/priority', getAllPriority);
routerPriority.post('/priority', createPriority);

export default routerPriority;