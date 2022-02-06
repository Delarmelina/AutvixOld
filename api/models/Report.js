const mongoose = require('mongoose');

const Report = mongoose.model('Report', {
    type: String,
    name: String,
    ans:{}
});

module.exports = Report;