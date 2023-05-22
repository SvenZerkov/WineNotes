const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validateID } = require("../middlewares/validatorID");

const wineController = require("../controllers/controller.js");

// front page
router.get("/", wineController.getFirstPage);


// get all wines
router.get("/api/wines", wineController.getAll);


// get one wine
router.get("/api/wines/(:id)", [
    check("id")
        .trim()
        .notEmpty()
        .custom(validateID)
        
], wineController.getWine);


module.exports = router;