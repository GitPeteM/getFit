const Workout = require('../models/workouts');

exports.getAll = function (req, res) {
  Workout.find({})
    .then((workoutData) => {
      res.send(workoutData);
    })
    .catch((error) => {
      res.status(404).send(error);
    })
}

exports.add = function (req, res) {
  console.log('req', req);
  new Workout(req.body).save()
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.status(400).send(error);
    })

}