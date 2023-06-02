const router = require('express').Router();

const {
    getAllquotes,
    createQuotes
} = require('./controller')

router.get('/',getAllquotes)
router.post('/quotes',createQuotes)


module.exports = router