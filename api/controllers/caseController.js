const asyncHandler = require("express-async-handler");
const Case = require("../models/caseModel");

// @desc Fetch all cases
// @route GET /dcm/cases
// @access private
const fetchCases = asyncHandler(async (req, res) => {
  const cases = await Case.find({ user_id: req.user.id });
  res.status(200).json(cases);
});

// @desc Create new case
// @route POST /dcm/cases
// @access private
const createCase = asyncHandler(async (req, res) => {
  console.log(`The request body is: `, req.body);

  // destructuring the case data
  const {
    name,
    email,
    caseId,
    location,
    picturePath,
    issues,
    laws,
    lawType,
    courtType,
    petitioners,
    respondents,
    description,
  } = req.body;

  // checking the mandatory fields
  if (
    !name ||
    !email ||
    !location ||
    !issues ||
    !courtType ||
    !petitioners ||
    !description
  ) {
    res.status(400);
    throw new Error("Please fill all the mandatory fields!");
  }

  // creating the new case after checking all the conditions
  const newCase = await Case.create({
    name,
    email,
    caseId,
    location,
    picturePath,
    issues,
    laws,
    lawType,
    courtType,
    petitioners,
    respondents,
    description,
    user_id: req.user.id,
  });

  // passing new case as the JSON response
  res.status(201).json(newCase);
});

// @desc Fetch a case with ID
// @route GET /dcm/cases/:id
// @access private
const fetchCase = asyncHandler(async (req, res) => {
  // search for the case & error handling
  const theCase = await Case.findById(req.params.id);
  if (!theCase) {
    res.status(404);
    throw new Error("Case not found!");
  }

  res.status(200).json(theCase);
});

// @desc Update a case with ID
// @route PUT /dcm/cases/:id
// @access private
const updateCase = asyncHandler(async (req, res) => {
  // search for the case & error handling
  const theCase = await Case.findById(req.params.id);
  if (!theCase) {
    res.status(404);
    throw new Error("Case not found!");
  }

  // checking if user is trying to update the case info they don't have access to..  
  if (theCase.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User doesn't have the necessary permissions to perform the action!"
    );
  }

  // logic for updating
  const updatedCase = await Case.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedCase);
});

// @desc Remove a case with ID
// @route DELETE /user/cases/:id
// @access private
const removeCase = asyncHandler(async (req, res) => {
  // search for the case & error handling
  const theCase = await Case.findById(req.params.id);
  if (!theCase) {
    res.status(404);
    throw new Error("Case not found!");
  }
  
  // checking if user is trying to delete the case they don't have access to..  
  if (theCase.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User doesn't have the necessary permissions to perform the action!"
    );
  }

  // logic for removing
  await theCase.deleteOne();

  res.status(200).json(theCase);
});

module.exports = {
  fetchCases,
  createCase,
  fetchCase,
  updateCase,
  removeCase,
};
