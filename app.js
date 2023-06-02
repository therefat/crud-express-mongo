require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const mongoose = require("mongoose");
const {MongoClient} = require("mongodb");
const CrudMongo = require('./CrudMongo');
const router = require('./routes')
const app = express();


app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


const PORT = process.env.port || 8080;

app.use('/',router)




const MONGODB_URI = `mongodb+srv://${config.get('db-username')}:${config.get('db-password')}@cluster0.ahw56ah.mongodb.net/?retryWrites=true&w=majority`;


mongoose
    .connect(MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is Running on Port ${PORT}`)
        })
    })
    .catch(e => {
        console.log(e)
    })



