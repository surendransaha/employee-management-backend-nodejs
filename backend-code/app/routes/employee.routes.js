module.exports = app => {
  const employees = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", employees.create);

  // Retrieve all Tutorials
  router.post("/login", employees.login);


  app.use("/api/employees", router);
};
