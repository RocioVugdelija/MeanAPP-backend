require('dotenv').config();
const express = require('express');
const cors = require('cors');



const {dbConnection} = require('./database/config');

//Create express server

const app = express();
// Configuration CORS
app.use(cors()); 

//Database

dbConnection();

//Rutas
app.get('/', (req,res) => {
    res.json({
        ok:true,
        msg:'Hola Mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Server running in port ' + process.env.PORT);
})