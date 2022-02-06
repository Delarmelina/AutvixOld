const Report = require('../models/Report');
const router = require('express').Router()

router.get('/report', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the report tests'
    })
})

router.post('/report/add', (req, res) => {

    const {
        type,
        name,
        ans
    } = req.body

    const report = new Report({
        type: type,
        name: name,
        ans: ans
    })

    try {
        report.save();
        res.status(201).json({
            message: 'Answer created',
        });
    } catch (err) {
        res.status(500).json({
            msg: err
        });
    }

})

module.exports = router