const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const promoRouter = express.Router();

const Promotions = require('../models/promotions');

promoRouter.use(bodyParser.json());

/* All Promotions verb operations */
promoRouter.route('/')
    .get((req, res, next) => {
        Promotions.find({})
        .then((promotions) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promotions);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Promotions.create(req.body)
        .then((promotion) => {
            console.log('Promotion created', promotion);
            res.statusCode  = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promotion);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on all promotions.');
    })
    .delete((req, res, next) => {
        Promotions.remove({})
        .then((resp) => {
            console.log('All promotions have been deleted.');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });
/* Particular promotion operations */
promoRouter.route('/:promotionId')
    .get((req, res, next) => {
        Promotions.findById(req.params.promotionId)
        .then((promotion) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promotion);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on a particular promotion.');
    })
    .put((req, res, next) => {
        Promotions.findByIdAndUpdate(req.params.promotionId)
        .then((promotion) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promotion);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Promotions.findByIdAndRemove(req.params.promotionId)
        .then((promotion) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promotion);
        }, (err) => next(err))
        .catch((err) => next(err));
    });
    
module.exports = promoRouter;