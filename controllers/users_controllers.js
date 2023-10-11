import {Users} from '../models/todolistModels.js';

const getAllUsers = (req, res) => {
    Users.findAll()
        .then((users) => {
            res.json({Users: users})
        })
        .catch((error) => {
            console.log(error)
        })
};

const createUsers = (req, res) => {
    Users.create({nickname: req.body.nickname, email: req.body.email})
        .then((result) => {
            res.json({"message": "user created", "resultat": result})
        })
        .catch((error) => {
            console.log(error)
        })
};

export {
    getAllUsers,
    createUsers
}