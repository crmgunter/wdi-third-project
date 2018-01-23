const express = require('express')
const User = require('../db/models/User')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find({}) 
    res.json(users)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then((user) => {
        res.json(user)
    }).catch((error) => {
        console.log(error)
    })
})

module.exports = router