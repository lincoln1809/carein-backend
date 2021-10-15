// employeeController.js
// Import Employee model
Employee = require("./employeeModel");
// Handle index actions
exports.index = function (req, res) {
  Employee.get(function (err, employees) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Employees retrieved successfully",
      data: employees,
    });
  });
};
// Handle create employee actions
exports.new = function (req, res) {
  var employee = new Employee();
  employee.name = req.body.name ? req.body.name : employee.name;
  employee.age = req.body.age;
  employee.gender = req.body.gender;
  employee.email = req.body.email;
  employee.phone = req.body.phone;
  employee.hiringDate = req.body.hiringDate;
  employee.job = req.body.job;
  employee.specialty = req.body.specialty;
  employee.tagID = req.body.tagID;
  // save the employee and check for errors
  employee.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New employee created!",
      data: employee,
    });
  });
};
// Handle view employee info
exports.view = function (req, res) {
  Employee.findById(req.params.employee_id, function (err, employee) {
    if (err) res.send(err);
    res.json({
      message: "employee details loading..",
      data: employee,
    });
  });
};
// Handle update employee info
exports.update = function (req, res) {
  Employee.findById(req.params.employee_id, function (err, employee) {
    if (err) res.send(err);
    employee.name = req.body.name ? req.body.name : employee.name;
    employee.age = req.body.age;
    employee.gender = req.body.gender;
    employee.email = req.body.email;
    employee.phone = req.body.phone;
    employee.hiringDate = req.body.hiringDate;
    employee.job = req.body.job;
    employee.specialty = req.body.specialty;
    employee.tagID = req.body.tagID;
    // save the employee and check for errors
    employee.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "employee Info updated",
        data: employee,
      });
    });
  });
};
// Handle delete employee
exports.delete = function (req, res) {
  Employee.remove(
    {
      _id: req.params.employee_id,
    },
    function (err, employee) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "employee deleted",
      });
    }
  );
};
