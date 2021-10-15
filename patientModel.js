// contactModel.js
var mongoose = require("mongoose");
// Setup schema
var patientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: String,
  cpf: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: String,
  entryTime: {
    type: Date,
    default: Date.now,
  },
  visitReason: {
    type: String,
    required: true,
  },
  physicalDisability: [{
    selection: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: null,
    },
  }],
  useMedicine: [{
    selection: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: null,
    },
    quantity: {
      type: Number,
      default: 0,
    },
  }],
  hasCompanion: [{
    selection: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: null,
    },
    cpf: {
      type: String,
      default: null,
    },
    age: {
      type: Number,
      default: 0,
    },
    tagID: {
      type: String,
      default: null,
    },
  }],
  tagID: String,
  respDoctor: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
});
// Export patient model
var patient = (module.exports = mongoose.model("patient", patientSchema));
module.exports.get = function (callback, limit) {
  patient.find(callback).limit(limit);
};
