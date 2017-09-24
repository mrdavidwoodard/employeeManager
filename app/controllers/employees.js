// controller
let mongoose = require("mongoose");
const Employee = require("../models/employee");

module.exports = {
  showHome: showHome,
  showList: showList,
  showSingle: showSingle,
  showForm: showForm,
  createEmployee: createEmployee,
  showEdit: showEdit,
  editEmployee: editEmployee,
  deleteEmployee: deleteEmployee
}

function showHome(req, res) {
  res.render("pages/home");
}

function showList(req, res) {
  Employee.find((err, employees) => {
    if(err) {
     res.status(404);
     res.send("employees not found")
    }
    res.render("pages/index", { employees: employees });
  });
}

function showSingle(req, res) {
  Employee.findOne({ employeeID : req.params.employeeID }, (err, employee) => {
    if(err) {
      res.status(404);
      res.send("employee not found");
    }
    console.log(employee);
    res.render("pages/employee", { employee : employee });
  });
}

function showForm(req, res) {
  res.render("pages/create");
}

// --> err =  firstName = req.body.firstName --> SyntaxError: Invalid shorthand property initializer
function createEmployee(req, res) {
  const newEmployee = new Employee({
    employeeID: req.body.employeeID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    title: req.body.title,
    startDate: req.body.startDate,
    wage: req.body.wage,
    birthDate: req.body.birthDate
  });

  newEmployee.save((err) => {
    if (err)
      throw err;
/*).then((newEmployee) => {res.send(newEmployee);}).catch((err) => {res.send(err);}); */
    res.redirect(`/employee/${newEmployee.employeeID}`);
  });
}

function showEdit(req, res) {
  Employee.findOne({ employeeID : req.params.employeeID }, (err, employee) => {
    res.render("pages/edit", { employee : employee });
  });
}

function editEmployee(req, res) {
  Employee.findOne({ employeeID : req.params.employeeID }, (err, employee) => {
    employee.employeeID = req.body.employeeID;
    employee.firstName = req.body.firstName;
    employee.lastName = req.body.lastName;
    employee.title = req.body.title;
    employee.startDate = req.body.startDate;
    employee.wage = req.body.wage;
    employee.birthDate = req.body.birthDate;

    employee.save((err) => {
      if (err)
        throw err;
        res.redirect(`/employee/${newEmployee.employeeID}`)
    })

    if(err) {
      res.status(404);
      res.send("employee not found");
    }
    console.log(employee);
    res.render("pages/employee", { employee : employee });
  });
}

function deleteEmployee(req, res) {
  Employee.remove({ employeeID : req.params.employeeID }, (err) => {
    res.redirect("/employees");
  });
}
