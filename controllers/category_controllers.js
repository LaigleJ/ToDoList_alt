import { Category } from "../models/todolistModels.js";

const getAllCategory = (req, res) => {
    Category.findAll()
      .then((category) => {
        res.json({ Category: category });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createCategory = (req, res) => {
    const category = {
      name: req.body.name,
    };
    Category.create(category)
      .then((result) => {
        res.json({ message: "Category created", resultat: result });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  export {
    getAllCategory,
    createCategory
  };