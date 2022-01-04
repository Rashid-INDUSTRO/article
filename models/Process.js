const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const ProcessSchema = new mongoose.Schema({
  process: {
    type: String,
    required: true,
  },
  
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Process", ProcessSchema);
