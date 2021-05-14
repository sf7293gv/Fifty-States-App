let express = require('express');
let States = require('../models').States

let router = express.Router();

// fetch states from server
router.get('/states', function (req, res, next) {
    States.findAll({order: ['name']}).then(states => {
        return res.json(states)
    }).catch(err => next(err))
});

router.get('/state/:name', function (req, res, name) {
    let stateName = req.params.name
    States.findOne({where: {name: stateName}}).then(state => {
        if (state) { // if state was found
            return res.json(state)
        } else { // if state was not found
            return res.status(404).send('State not found')
        }
    }).catch(err => next(err)) // unexpected errors
});

// patch route to update state - visited or not
router.patch('/states/:name', function (req, res, next) {
    let stateName = req.params.name
    let stateVisited = req.body.visited
    States.update({visited: stateVisited}, {where: {name: stateName}}).then(rowsUpdated => {
        let numOfRowsUpdated = rowsUpdated[0];
        if (numOfRowsUpdated == 1) {
            return res.send('ok'); // if state is found and updated
        }
        return res.status(404).send('State not found'); // a fixable error from user
    }).catch(err => next(err)) // unknown error with the database
});


module.exports = router