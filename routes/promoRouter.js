const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

/* All Promotions verb operations */
promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('We\'ll send all the promotions to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on all promotions.');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the promotions!');
    });
/* Particular promotion operations */
promoRouter.route('/:promotionId')
    .get((req, res, next) => {
        res.end('We\'ll send the promotion ' + req.params.promotionId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on a particular promotion.');
    })
    .put((req, res, next) => {
        res.write('Updating the promotion with ID ' + req.params.promotionId + '\n');
        res.end('Will update the promotion ' + req.body.name + ' with details ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting promotion ' + req.body.name);
    });
    
module.exports = promoRouter;