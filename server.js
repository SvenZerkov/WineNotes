const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const exhbs = require("express-handlebars");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
// const Wine = require("./models/Wine");


const app = express();
const ObjectId = mongoose.Types.ObjectId;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.engine("handlebars", exhbs.engine({
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "views/partials")
}));
app.use(express.json());
app.set("view engine", "handlebars");

const routes = require("./routes/routes");

app.use("", require("./routes/routes.js"));

const dbURI = process.env.dbURI;

const client = new MongoClient(dbURI, { useNewUrlParser: true });

const connectToDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("Database connected");
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Server up and running. Listening port ${PORT}`));
    } catch (error) {
        console.log(error); // change this later to log in file
    }
};

connectToDB();