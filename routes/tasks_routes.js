import express from 'express';
import { getAllTasks, createTasks, getTask } from '../controllers/tasks_controllers.js';

const routerTasks = express.Router();

routerTasks.get('/tasks', getAllTasks);
routerTasks.post('/tasks', createTasks);
routerTasks.get('/tasks', getTask)

export default routerTasks;