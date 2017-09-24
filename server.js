let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-Parser");
let ejs = require("ejs");
let host = "localhost";
let port = 3002;
let app = express();
let router = express.Router();
//let Database = require("./db");
//Database.connect();
require("./app/models/employee");
let employees = require("./app/controllers/employees");

mongoose.connect("mongodb://david:123@ds161493.mlab.com:61493/ccsample-db").then(() => {
  console.log("Employee DB Connected");
}, ((err) => {
  console.log(err);
}))

app.set("view engine", "ejs");

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(require("./app/routes"));

app.listen(port, () => {
    console.log("server connected at: " + host + " " + port);
  })
