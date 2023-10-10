import express from 'express';
import sequelize from './util/database.js';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
res.send('Hello World')
});


sequelize
    .sync({force: false})
    .then((result) => {
        console.log('database connected');
        app.listen(port)
    })
    .catch((error) => {
        console.log(error)
    });