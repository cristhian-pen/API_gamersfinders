const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./App/config/db');


const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express());


sequelize.authenticate().then(() => {
    console.log('Conection has been established successfully.');
}).catch(() => {
    console.log('Connection lost!');
});

app.listen('3000', () => {
    console.log(`Server running on port ${PORT}`);
})
