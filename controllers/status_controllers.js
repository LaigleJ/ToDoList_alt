import { Status } from "../models/todolistModels.js";

const getAllStatus = (req, res) => {
    Status.findAll()
      .then((status) => {
        res.json({ Status: status });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createStatus = (req, res) => {
    const status = {
      name: req.body.name,
    };
    Status.create(status)
      .then((result) => {
        res.json({ message: "Status created", resultat: result });
      })
      .catch((error) => {
        console.log(error);
      });
  };