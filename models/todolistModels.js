import Sequelize from "sequelize";
import database from "../util/database.js";

const Users = database.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nickname: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
});

const Category = database.define("category", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

const Status = database.define("status", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

const Priority = database.define("priority", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

const Tasks = database.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(80),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(450),
  },
  id_Category: {
    type: Sequelize.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
  },
  id_Status: {
    type: Sequelize.INTEGER,
    references: {
      model: Status,
      key: "id",
    },
  },
  id_Priority: {
    type: Sequelize.INTEGER,
    references: {
      model: Priority,
      key: "id",
    },
  },
  deadline: {
    type: Sequelize.STRING(25),
  },
  author: {
    type: Sequelize.STRING(20),
  },
  ids_Users: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    references: {
      model: Users,
      key: "id",
    },
  },
});

const UsersTasks = database.define('UsersTasks', {
    UsersId: {
        type: Sequelize.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    },
    TasksId: {
        type: Sequelize.INTEGER,
        references: {
            model: Tasks,
            key: 'id'
        }
    }
})

Category.hasMany(Tasks);
Tasks.belongsTo(Category);
Status.hasMany(Tasks);
Tasks.belongsTo(Status);
Priority.hasMany(Tasks);
Tasks.belongsToMany(Priority);
Users.belongsToMany(Tasks, { through: UsersTasks });
Category.belongsToMany(Users, { through: UsersTasks });

export { Users, Tasks, Category, Status, Priority };
