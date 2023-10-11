import express from 'express';
import sequelize from './util/database.js';
import routerUsers from './routes/users_routes.js';
import routerTasks from './routes/tasks_routes.js';


async function main() {


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
res.send('Hello World 2')
});

app.use('/', routerTasks);
app.use('/', routerUsers);

try {
    await sequelize.sync({force: true})
    app.listen(port)
    console.log("🚀 ~ file: server.js:25 ~ main ~ port:", port)
} catch (error) {
    console.log("🚀 ~ file: server.js:26 ~ main ~ error:", error)
}



}
main()