const Lists = require('../models/Lists');
const router = require('express').Router()

router.get('/lists', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the lists tests'
    })
})

// Get all Lists
router.get('/lists/get', (req, res) => {
    Lists.find()
        .then(lists =>
            res.status(200).json({
                lists
            })
        )
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

// Register new Item on List
router.post('/lists/add/List', (req, res) => {
    const {
        name
    } = req.body

    const list = new Lists({
        name: name,
        items: []
    })

    try {
        list.save();
        res.status(201).json({
            message: 'List created',
        });
    } catch (err) {
        res.status(500).json({
            msg: err
        });
    }
})

router.post('/lists/add/Item', (req, res) => {

    const {
        name,
        items
    } = req.body

    let UpdateItems = []

    Lists.find()
        .then(lists => {
            lists.map(list => {
                if (list.name === name) {

                    list.items.map(item => {
                        UpdateItems.push(item)
                    })

                    items.map(item => {
                        if (!UpdateItems.includes(item)) {
                            UpdateItems.push(item)
                        }
                    })

                    Lists.findByIdAndUpdate(list._id, {
                        items: UpdateItems
                    }, { new: true })
                        .then(() => {
                            res.status(200).json({
                                message: 'List updated'
                            })
                        })
                        .catch(err => {
                            res.status(500).json({
                                error: err
                            })
                        })
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

router.post('/lists/getList', (req, res) => {

    const {
        name
    } = req.body

    Lists.find()
        .then(lists => {
            lists.map(list => {
                if (list.name === name) {
                    res.status(200).json({
                        list
                    })
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })

})

module.exports = router