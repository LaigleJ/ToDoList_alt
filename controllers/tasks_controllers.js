import {Tasks} from '../models/todolistModels.js';

const getAllTasks = (req, res) => {
    Tasks.findAll()
        .then((tasks) => {
            res.json({Tasks: tasks})
        })
        .catch((error) => {
            console.log(error)
        })
};

const createTasks = (req, res) => {
    Book.create({name: req.body.name, description: req.body.description, category: req.body.category, status: req.body.status, property: req.body.property, deadline: req.body.deadline, ids_users: req.body.ids_users})
        .then((result) => {
            res.json({"message": "Tasks created", "resultat": result})
        })
        .catch((error) => {
            console.log(error)
        })
};

const getTask = (req, res) => {
    const id_tasks = req.params.id
    Book.findAll({
        where: {
            id: id_tasks
        }
    })
        .then((tasks) => {
            if (!tasks) {
                res.statut(404).json({"message": "Task not found"})
            }
            res.json({Tasks: tasks})
        })
        .catch((error) => {
            console.log(error)
        })
};

export {
    getAllTasks,
    createTasks,
    getTask
}