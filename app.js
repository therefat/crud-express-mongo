require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const mongoose = require("mongoose");
const {MongoClient} = require("mongodb");
const CrudMongo = require('./CrudMongo')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


const PORT = process.env.port || 8080;


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/quotes", (req, res) => {
  console.log(req.body);
  let {name,quote} = req.body;
  let crudmongo = new CrudMongo({
    name,
    quote
  })
  crudmongo.save()
  .then(
    () => console.log("One entry added"), 
    (err) => console.log(err)
);
res.sendFile(__dirname + "/index.html");

});






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



