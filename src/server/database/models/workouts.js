const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/workouts');

const workoutSchema = new mongoose.Schema(
  {
    bodyPart: String,
    equipment: String,
    gifUrl: String,
    id: {type: Number, unique: true},
    name: String,
    target: String,
  }
);

const Workout = new mongoose.model('Workout', workoutSchema);

module.exports = Workout;

// {
//   "bodyPart": "upper arms",
//   "equipment": "band",
//   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
//   "id": "0968",
//   "name": "band alternating biceps curl",
//   "target": "biceps",
// },