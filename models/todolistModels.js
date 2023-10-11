import Sequelize from "sequelize";
import database from '../util/database.js';

const Tasks = database.define('tasks', {
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
    id_Category: {
        type: Sequelize.STRING(250)
    },
    id_Status: {
        type: Sequelize.INTEGER
    },
    id_Property: {
        type: Sequelize.INTEGER
    },
    deadline: {
        type: Sequelize.STRING(25)
    },
    author: {
        type: Sequelize.STRING(25)
    },
    ids_users: {
        type: Sequelize.ARRAY(INTEGER)
    }
});

const Users = database.define('users', {
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
    },
    password: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

const Category = database.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

const Status = database.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

const Priority = database.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

export {
    Users,
    Tasks,
    Category,
    Status,
    Priority
};