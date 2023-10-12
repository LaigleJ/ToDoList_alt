import { Tasks } from "../models/todolistModels.js";

const getAllTasks = (req, res) => {
  Tasks.findAll()
    .then((tasks) => {
      res.json({ Tasks: tasks });
    })
    .catch((error) => {
      console.log(error);
    });
};

const createTasks = (req, res) => {
  const tasks = {
    name: req.body.name,
    description: req.body.description,
    id_Category: req.body.category,
    id_Status: req.body.status,
    id_Property: req.body.property,
    deadline: req.body.deadline,
    author: req.body.author,
    ids_users: req.body.ids_users,
  };
  Tasks.create(tasks)
    .then((result) => {
      res.json({ message: "Tasks created", resultat: result });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getTask = (req, res) => {
  const id_tasks = req.params.id;
  Tasks.findAll({
    where: {
      id: id_tasks,
    },
  })
    .then((tasks) => {
      if (!tasks) {
        res.statut(404).json({ message: "Task not found" });
      }
      res.json({ Tasks: tasks });
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateTasks = async (req, res) => {
    const name = req.body.name;
    const isName = await Tasks.findAll({
        where: {
            name: name
        }
    });
    if (isName) {
        const tasks = {
            name: req.body.name,
            description: req.body.description,
            id_Category: req.body.category,
            id_Status: req.body.status,
            id_Property: req.body.property,
            deadline: req.body.deadline,
            author: req.body.author,
            ids_users: req.body.ids_users,
          };
          Tasks.update(tasks, {
            where: {
              name: name
            }
          })
            .then((result) => {
              res.json({ message: "Tasks updated", resultat: result });
            })
            .catch((error) => {
              console.log(error);
            });
    } else {
        res.json({ message: "Please verify your information!" });
      }
};

export { getAllTasks, createTasks, getTask, updateTasks };
