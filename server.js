const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');


dotenv.config({path: './.env'});
const server = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});

const publicDirectory = path.join(__dirname, './public');
server.use(express.static(publicDirectory));
//Parse URL-encoded
server.use(express.urlencoded({extended: false}));
// Parse JSON bodies
server.use(express.json());
server.use(cookieParser());

//server.set('view engine', 'html');

db.connect((error) => {
    if(error){
        console.log(error)
    }else{
        console.log("MYSQL Connected...")
    }

});
//Define Routes
server.use('/', require('./routes/pages'));
server.use('/action_page', require('../routes/action_page'));

server.listen(8888, () => {
    console.log("Server started on Port 8888");
});




