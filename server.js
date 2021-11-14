const express = require("express");
const mongojs = require("mongojs");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workoutdb";
const collections = ["workout"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
});



app.listen(3000, () => {
    console.log("App running on port 3000!");
});