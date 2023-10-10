import express from 'express';
import sequelize from './util/database.js';
import routerUsers from './routes/users_routes.js';
import routerTasks from './routes/tasks_routes.js';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
res.send('Hello World')
});

app.use('/', routerTasks);
app.use('/', routerUsers);

sequelize
    .sync({force: false})
    .then((result) => {
        console.log('database connected');
        app.listen(port)
    })
    .catch((error) => {
        console.log(error)
    });