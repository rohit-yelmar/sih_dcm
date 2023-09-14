const mongoose = require("mongoose");

const caseSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please enter the name!"],
    },
    email: {
      type: String,
      required: [true, "Please enter the email!"],
    },
    location: {
      type: String,
      required: [true, "Please select the location!"],
    },
    picturePath: {
      type: String,
    },
    issues: {
      type: String,
      required: [true, "Please select the issues!"],
    },
    laws: {
      type: String,
    },
    lawType: {
      type: String,
    },
    courtType: {
      type: String,
      required: [true, "Please select the court type!"],
    },
    petitioners: {
      type: String,
      required: [true, "Please enter the petitioners!"],
    },
    respondents: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please explain everything in details!"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Case", caseSchema);
