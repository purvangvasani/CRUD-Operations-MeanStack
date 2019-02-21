var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = require('../models/Employee.js');

/* GET All Employee. */
router.get('/', function(req, res, next) {
    Employee.find(function(err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET Employee By ID. */
router.get('/:id', function(req, res, next) {
    Employee.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE Employee. */
router.post('/', function(req, res, next) {
    Employee.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* Update Employee. */
router.put('/:id', function(req, res, next) {
    Employee.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* Delete Employee. */
router.delete('/:id', function(req, res, next) {
    Employee.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;