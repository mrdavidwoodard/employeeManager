let mongoose = require("mongoose");

/*let nameSchema = new mongoose.Schema({
  first: String,
  last: String
});*/

let employeeSchema = new mongoose.Schema({
  employeeID: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  title: {
    type: String
  },
  startDate: {
    type: String,
    required: true,
  },
  wage: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String
  }
});

let Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
