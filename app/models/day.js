// app/models/day.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our day model
// module.exports allows us to pass this to other files when it is called
var daySchema = new mongoose.Schema({
  
    day : {type : Number, default: ''},
    month : {type : Number, default: ''},
    year : {type : Number, default: ''},
    hours : {type : Number, default: ''},
    minutes : {type : Number, default: ''},
    selected: {type: Boolean, default: true}
});


module.exports = mongoose.model('day', daySchema);