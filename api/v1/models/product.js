const mongoose = require('mongoose');
mongoose.pluralize(null);

var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    pid: Number,
    pname: String,
    price:Number
});

module.exports = mongoose.model('product',productSchema);