const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// const databaseUrl = "workoutdb";
// const collections = ["workout", "exercises"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//     console.log("Database Error:", error);
// });

const opts = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false}
mongoose.connect(process.env.MONGODB_URI || "mongoose://localhost/workoutdb", opts);

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "./public/index.html"));
// });


//add exercise
app.put('/api/workouts/:id', (req, res) => {


})

//new workout
app.post('/api/workouts', (req, res) => {


})

//get total duration of last 7 workouts
app.get('/api/workouts/range', (req, res) => {

})

// app.post("/submit", ({body}, res) => {
//     db.Book.create(body)
//     .then(({_id}) => db.Library. findOneAndUpdate({}, { $push: { books: _id } }, { new: true}))
//     .then(dbLibrary => {
//         res.json(dbLibrary);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });

// app.get("/books", (req, res) => {
//   db.Book.find({})
//     .then(dbBook => {
//       res.json(dbBook);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/library", (req, res) => {
//   db.Library.find({})
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populated", (req, res) => {
//   db.Library.find({})
//     .populate("books")
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});