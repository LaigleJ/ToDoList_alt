import express from 'express';
import { getAllUsers, createUsers } from '../controllers/users_controllers.js';

const routerUsers = express.Router();

routerUsers.get('/users', getAllUsers);
routerUsers.post('/users', createUsers);

export default routerUsers;