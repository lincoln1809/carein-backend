// contactModel.js
var mongoose = require("mongoose");
// Setup schema
var employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: String,
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  hiringDate: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  specialty: String,
  tagID: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
});
// Export Employee model
var Employee = (module.exports = mongoose.model("employee", employeeSchema));
module.exports.get = function (callback, limit) {
  Employee.find(callback).limit(limit);
};
