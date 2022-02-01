const mongoose = require('mongoose');

const Lists = mongoose.model('Lists', {
    name: String,
    items: [String]
});

module.exports = Lists;