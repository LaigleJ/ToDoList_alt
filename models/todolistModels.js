import Sequelize, { INTEGER, STRING } from "sequelize";
import database from '../util/database.js';

const Tasks = database.define('task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(450)
    },
    category: {
        type: Sequelize.STRING(250)
    },
    status: {
        type: Sequelize.INTEGER
    },
    property: {
        type: Sequelize.INTEGER
    },
    deadline: {
        type: STRING(25)
    },
    id_users: {
        type: Sequelize.ARRAY(INTEGER)
    }
});

const Users = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nickname: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

export {
    Users,
    Tasks
};