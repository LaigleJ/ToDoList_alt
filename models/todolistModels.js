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
        type: Sequelize.INTEGER
    },
    id_Status: {
        type: Sequelize.INTEGER,
    },
    id_Priority: {
        type: Sequelize.INTEGER
    },
    deadline: {
        type: Sequelize.STRING(25)
    },
    author: {
        type: Sequelize.STRING(25)
    },
    ids_Users: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
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
        type: Sequelize.STRING(15),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(100),
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

const Status = database.define('status', {
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

const Priority = database.define('priority', {
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