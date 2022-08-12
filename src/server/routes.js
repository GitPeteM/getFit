const express = require('express');
const workouts = require('./database/controllers/workouts')

const router = express.Router();

router.get('/workouts', workouts.getAll);
router.post('/workouts', workouts.add);

module.exports = router;