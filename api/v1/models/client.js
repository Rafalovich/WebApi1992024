const mongoose = require('mongoose');
mongoose.pluralize(null);

var clientSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    clid:Number,
    fname:String,
    lname:String
});

module.exports = mongoose.model('client',clientSchema);