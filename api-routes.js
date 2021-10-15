// api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!",
  });
});

// Import patient controller
var patientController = require("./patientController");
// Import employee controller
var employeeController = require("./employeeController");

// Patient routes
router
  .route("/patient")
  .get(patientController.index)
  .post(patientController.new);

router
  .route("/patient/:patient_id")
  .get(patientController.view)
  .patch(patientController.update)
  .put(patientController.update)
  .delete(patientController.delete);

// Employee routes
router
  .route("/employee")
  .get(employeeController.index)
  .post(employeeController.new);

router
  .route("/employee/:employee_id")
  .get(employeeController.view)
  .patch(employeeController.update)
  .put(employeeController.update)
  .delete(employeeController.delete);

// Export API routes
module.exports = router;
