const Report = require('../models/Report');
const router = require('express').Router()
const jwt = require('jsonwebtoken');

router.get('/report', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the report tests'
    })
})

router.post('/report/add', (req, res) => {

    const {
        type,
        name,
        token,
        ans
    } = req.body

    if (token == "null") {
        return res.status(200).json({
            token: token
        })
    } else {
        decoded = jwt.verify(token, process.env.SECRET)
    }

    const report = new Report({
        type: type,
        name: name,
        id: decoded.id,
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

router.post('/report/get', async (req, res) => {

    const {
        type,
        token,
    } = req.body

    if (token == "null") {
        return res.status(200).json({
            token: token
        })
    } else {
        decoded = jwt.verify(token, process.env.SECRET)
    }

    const id = decoded.id

    const reports = await Report.find()

    const resp = []
    reports.map(report => {
        if (report.id == id) {
            if (report.type == type) {
                resp.push(report)
            }
        }
    })

    res.status(200).json({
        resp
    })

})

router.post('/report/get/all', async (req, res) => {

    const {
        type
    } = req.body

    const reports = await Report.find()

    const resp = []
    reports.map(report => {
        if (report.type == type) {
            resp.push(report)
        }
    })

    res.status(200).json({
        resp
    })
})

module.exports = router