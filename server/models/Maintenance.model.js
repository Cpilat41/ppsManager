const mongoose = require("mongoose");
const MaintenanceSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    prefix: {
      type: String,
      enum: ["---", "Mr.", "Mrs.", "Ms.", "Dr.", "Mx."],
    },
    serviceAddress: { type: String },
    serviceCity: { type: String },
    serviceZip: { type: String },
    serviceCounty: {
      type: String,
      enum: ["Pasco", "Pinellas", "Hillsborough", "Hernando"],
    },
    subdivision: { type: String },
    subdivisionGateCode: { type: String },
    houseGateCode: { type: String },
    accountNumber: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
    secondEmail: { type: String },
    status: { type: String, enum: ["Active", "Inactive"] },
    billingName: { type: String },
    billingAddress: { type: String },
    billingCity: { type: String },
    billingState: { type: String },
    billingZip: { type: String },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Maintenance", MaintenanceSchema);
