var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    emp_ID: String,
    emp_Name: String,
    emp_Age: String,
    emp_Gender: String,
    emp_Position: String,
    emp_JoinDate: String,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);