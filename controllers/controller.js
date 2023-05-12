const express = require('express');
const Wine = require('../models/Wine');
const { validationResult } = require('express-validator');
const bodyParser = require('body-parser');

const getAll = async (req,res,next) => {
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

module.exports = {
    getAll
}