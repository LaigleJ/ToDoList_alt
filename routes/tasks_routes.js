import express from 'express';
import { getAllTasks, createTasks, getTask, updateTasks } from '../controllers/tasks_controllers.js';

const routerTasks = express.Router();

routerTasks.get('/tasks', getAllTasks);
routerTasks.post('/tasks', createTasks);
routerTasks.get('/tasks/:id', getTask);
routerTasks.put('/tasks/:id', updateTasks);

export default routerTasks;