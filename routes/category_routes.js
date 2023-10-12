import express from 'express';
import {getAllCategory, createCategory} from '../controllers/category_controllers.js';

const routerCategory = express.Router();

routerCategory.get('/category', getAllCategory);
routerCategory.post('/category', createCategory);

export default routerCategory;