const express = require('express');
const app = express();
const cors = require('cors');


const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express());


app.listen('PORT', () => {
    console.log(`Server running on port ${PORT}`);
})
