const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

/* All dishes verb operations */
leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('We\'ll send all the leaders to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on all leaders.');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the leaders!');
    });
/* Particular leader operations */
leaderRouter.route('/:leaderId')
    .get((req, res, next) => {
        res.end('We\'ll send the leader ' + req.params.leaderId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on a particular leader.');
    })
    .put((req, res, next) => {
        res.write('Updating the leader with ID ' + req.params.leaderId + '\n');
        res.end('Will update the leader ' + req.body.name + ' with details ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting leader ' + req.body.name);
    });
    
module.exports = leaderRouter;