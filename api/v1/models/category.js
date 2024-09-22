const mongoose = require('mongoose');
mongoose.pluralize(null);

var categorySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    cid:Number,
    cname:String
});

module.exports = mongoose.model('category',categorySchema);