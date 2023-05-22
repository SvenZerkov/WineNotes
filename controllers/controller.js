const express = require('express');
const Wine = require('../models/Wine');
const { validationResult } = require('express-validator');
const bodyParser = require('body-parser');

const getFirstPage = async (req, res, next) => {
    try {
        const wines = await getAll(req, res, next);
        res.render("index", {
            pagetitle: "Wine notes",
            desc: "Here are some notes from extraordinary wines.",
            wines: wines.map(wine => wine.toJSON())
        });
    } catch (error) {
        res.status(500).json({
            msg: "ISE",
            error: error.message
        });
    }
};


/* GET ALL */
const getAll = async () => {
    try {
        const wines = await Wine.find();
        return wines;
    } catch (error) {
        throw error;
    }
};

/* GET ONE */
const getWine = async (req, res, next) => {
    try {
        const id = req.params.id;
        // console.log(id);
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
    getWine,
    getFirstPage
}