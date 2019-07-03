const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

/* All dishes verb operations */
dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('We\'ll send all the dishes to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on all dishes.');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the dishes!');
    });

/* Particular dish operations */
dishRouter.route('/:dishId')
    .get((req, res, next) => {
        res.end('We\'ll send the dish ' + req.params.dishId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on a particular dish.');
    })
    .put((req, res, next) => {
        res.write('Updating the dish with ID ' + req.params.dishId + '\n');
        res.end('Will update the dish ' + req.body.name + ' with details ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting dish ' + req.body.name);
    });
    
module.exports = dishRouter;