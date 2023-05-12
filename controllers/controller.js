const express = require('express');
const Wine = require('../models/Wine');
const { validationResult } = require('express-validator');
const bodyParser = require('body-parser');

/* GET ALL */
const getAll = async (req, res, next) => {
    try {
        const wines = await Wine.find();
        console.log(wines);
        res.json(wines);
    } catch (error) {
        res.status(404).json({
            msg: "not found"
        })
    }
};

/* GET ONE */
const getWine = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(id);
        const wine = await Wine.findById(id);
        res.json(wine);
    } catch (error) {
        res.status(404).json({
            msg: "Not Found",
            error: error.message
        });
    }
};

module.exports = {
    getAll,
    getWine
}