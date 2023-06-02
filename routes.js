const router = require('express').Router();

const {
    getAllquotes,
    createQuotes,
    deleteQuotes,
    updateQuotes
} = require('./controller')

router.get('/',getAllquotes)
router.post('/quotes',createQuotes);
router.get('/delete/:id',deleteQuotes);
router.put('/:id',updateQuotes)


module.exports = router