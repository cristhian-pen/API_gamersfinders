const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./App/config/db');
const session = require('express-session');
//require('dotenv-safe').config(`${}`);

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const work = require('./src/routes/routes.js');
const reg = require('./src/routes/routes');
const infos = require('./src/routes/info');
const updateUser = require('./src/routes/update');
const deleteUser = require('./src/routes/delete');
const readUser = require('./src/routes/info');
const loginUser = require('./src/routes/login');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.json());
app.use(session({
    secret: 'jsakjasagjagaljdgj'
}))

//Rotas
app.get('/', work);
app.get('/info/:id', infos);
app.get('/info', readUser);
app.post('/reg', reg);
app.put('/userupd/:id', updateUser);
app.delete('/userdel/:id', deleteUser);
app.delete('/userdel/:id', deleteUser);
app.get('/login', loginUser);


sequelize.authenticate().then(() => {
    console.log('Conection has been established successfully.');
}).catch(() => {
    console.log('Connection lost!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
