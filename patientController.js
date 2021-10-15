// patientController.js
// Import patient model
Patient = require("./patientModel");
// Handle index actions
exports.index = function (req, res) {
  Patient.get(function (err, patients) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "patients retrieved successfully",
      data: patients,
    });
  });
};
// Handle create patient actions
exports.new = function (req, res) {
  var patient = new Patient();
  patient.name = req.body.name ? req.body.name : patient.name;
  patient.age = req.body.age;
  patient.gender = req.body.gender;
  patient.cpf = req.body.gender;
  patient.email = req.body.email;
  patient.phone = req.body.phone;
  patient.entryTime = req.body.entryTime;
  patient.visitReason = req.body.visitReason;
  patient.physicalDisability = req.body.physicalDisability;
  patient.useMedicine = req.body.hasCompanion;
  patient.hasCompanion = req.body.hasCompanion;
  patient.respDoctor = req.body.respDoctor;
  patient.tagID = req.body.tagID;
  // save the patient and check for errors
  patient.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New patient created!",
      data: patient,
    });
  });
};
// Handle view patient info
exports.view = function (req, res) {
  Patient.findById(req.params.patient_id, function (err, patient) {
    if (err) res.send(err);
    res.json({
      message: "patient details loading..",
      data: patient,
    });
  });
};
// Handle update patient info
exports.update = function (req, res) {
  Patient.findById(req.params.patient_id, function (err, patient) {
    if (err) res.send(err);
    patient.name = req.body.name ? req.body.name : patient.name;
    patient.age = req.body.age;
    patient.gender = req.body.gender;
    patient.cpf = req.body.gender;
    patient.email = req.body.email;
    patient.phone = req.body.phone;
    patient.entryTime = req.body.entryTime;
    patient.visitReason = req.body.visitReason;
    patient.physicalDisability = req.body.physicalDisability;
    patient.useMedicine = req.body.hasCompanion;
    patient.hasCompanion = req.body.hasCompanion;
    patient.respDoctor = req.body.respDoctor;
    patient.tagID = req.body.tagID;
    // save the patient and check for errors
    patient.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "patient Info updated",
        data: patient,
      });
    });
  });
};
// Handle delete patient
exports.delete = function (req, res) {
  Patient.remove(
    {
      _id: req.params.patient_id,
    },
    function (err, patient) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "patient deleted",
      });
    }
  );
};
