const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    text: {type: String, required: true, max: 100},
    status: {type: Boolean, required: false},
});
      

// Export the model
module.exports = mongoose.model('Product', ProductSchema);