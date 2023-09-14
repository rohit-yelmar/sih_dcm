const express = require("express");
const {
  fetchCases,
  createCase,
  fetchCase,
  updateCase,
  removeCase,
} = require("../controllers/caseController");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(fetchCases).post(createCase);
router.route("/:id").get(fetchCase).put(updateCase).delete(removeCase);

module.exports = router;
