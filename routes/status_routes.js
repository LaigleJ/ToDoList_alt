import express from 'express';
import {getAllStatus, createStatus} from '../controllers/status_controllers.js';

const routerStatus = express.Router();

routerStatus.get('/status', getAllStatus);
routerStatus.post('/status', createStatus);

export default routerStatus;