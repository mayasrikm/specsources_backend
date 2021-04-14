const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sourceSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true}

})

const sources = mongoose.model('spec_sources', sourceSchema);

module.exports = sources;