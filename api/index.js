const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 7000;

connectDB();
app.use(express.json());
app.use("/dcm/cases", require("./routes/caseRoutes"));
app.use("/dcm/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
