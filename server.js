const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./App/config/db');


const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const work = require('./src/routes/routes.js');
const reg = require('./src/routes/routes');
const infos = require('./src/routes/info');
const updateUser = require('./src/routes/update');
const deleteUser = require('./src/routes/delete');
const readUser = require('./src/routes/info');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express());

//Rotas
app.get('/', work);
app.get('/info/:id', infos);
app.get('/info', readUser);
app.post('/register', reg);
app.put('/userupd/:id', updateUser);
app.delete('/userdel/:id', deleteUser);
app.delete('/userdel/:id', deleteUser);


sequelize.authenticate().then(() => {
    console.log('Conection has been established successfully.');
}).catch(() => {
    console.log('Connection lost!');
});

app.listen('3001', () => {
    console.log(`Server running on port ${PORT}`);
})
