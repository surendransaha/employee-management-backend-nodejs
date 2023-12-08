const db = require("../models");
const Employee = db.employee;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  if (!req.body.username) {
    res.status(400).send({ message: "User Name can not be empty!" });
    return;
  }

  if (!req.body.password) {
    res.status(400).send({ message: "Password can not be empty!" });
    return;
  }

  // Create a employee
  const employee = new Employee({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });

  // Save employee in the database
  employee
    .save(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.login = async(req, res) => {

  if (!req.body.username) {
    res.status(400).send({ message: "User Name can not be empty!" });
    return;
  }

  if (!req.body.password) {
    res.status(400).send({ message: "Password can not be empty!" });
    return;
  }

  var employeeFetchData = await Employee.findOne({username:req.body.username},{password:1});


  if (!employeeFetchData) {
    res.status(400).send({ message: "User Name Not Matched", status: "failed" });
    return;
  }


  if(employeeFetchData.password === req.body.password){

    res.send({ message: "login successfully", status: "success" });

  }else{

    res.status(400).send({ message: "Password Not Matched", status: "failed" });
  }

};
