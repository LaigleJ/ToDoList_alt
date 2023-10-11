import Sequelize from "sequelize";

const sequelize = new Sequelize('postgres://testuser:testuser@127.0.0.1:5434/todolist');

export default sequelize;