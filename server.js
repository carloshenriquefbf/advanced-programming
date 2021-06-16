const express = require("express");
const path = require("path");
const bodyPaser = require('body-parser');
const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://Grupo_7:grupopa123@cluster0.zx6l3.mongodb.net/cvdb?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.use(express.static(__dirname + "/public"));

app.use(express.static('scripts'));

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false}));

require('./source/controllers/authController')(app);

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));