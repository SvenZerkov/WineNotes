const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getAll } = require('../controllers/controller');

const noteController = require("../controllers/controller.js");

// get all
router.get("/api/wines", noteController.getAll);

module.exports = router;