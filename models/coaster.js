const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coasterSchema = new Schema({
  name: { type: String, required: true },
  park: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, default: 0 },
  numRating: { type: Number, default: 0 },
  operating: String,
  type: String,
  manufacturer: String,
  designer: String,
  model: String,
  height: { type: Number, required: true },
  length: Number,
  drop: String,
  speed: { type: Number, required: true },
  inversions: String,
  duration: { type: String, required: true },
  gforce: String,
  vertangle: String,
  scale: String,
  awards: [String],
  img1: {type: String, trim: true}, 
  img2: {type: String, trim: true},
  img3: {type: String, trim: true},
  img4: {type: String, trim: true},
  date: Date
});

const Coaster = mongoose.model("Coaster", coasterSchema);

module.exports = Coaster;