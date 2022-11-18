const MaintenanceController = require("../controllers/Maintenance.controller");
const MaintCustomer = require("../models/Maintenance.model");

module.exports = (app) => {
 app.post("/api/ppsManager", MaintenanceController.createCustomer);
};
