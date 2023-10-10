import Sequelize from "sequelize";

const sequelize = new Sequelize(
    'todolist_alt',
    'jeremy',
    'j14031989L',
    {
        host: 'localhost',
        dialect: 'postgres',
        port: '5432'
    }
);

export default sequelize;