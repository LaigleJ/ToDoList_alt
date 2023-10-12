import { Priority } from "../models/todolistModels.js";

const getAllPriority = (req, res) => {
    Priority.findAll()
      .then((priority) => {
        res.json({ Priority: priority });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createPriority = (req, res) => {
    const priority = {
      name: req.body.name,
    };
    Priority.create(priority)
      .then((result) => {
        res.json({ message: "Priority created", resultat: result });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  export {
    getAllPriority,
    createPriority
  }