// routes
let express = require("express");
let router = express.Router();
let employees = require("./controllers/employees");

module.exports = router;

router.get("/", employees.showHome);

router.get("/employees", employees.showList);
router.get("/employee/:employeeID", employees.showSingle);

router.get("/create", employees.showForm);
router.post("/create", employees.createEmployee);

router.get("/employee/:employeeID/edit", employees.showEdit);
router.post("/employee/:employeeID", employees.editEmployee);

router.get("/employee/:employeeID/delete", employees.deleteEmployee);
