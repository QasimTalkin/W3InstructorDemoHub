const express = require('express');
const router = express.Router();
const { getQasim, setQasim, updateQasim, deleteQasim } = require('./functions.js')

console.log({ getQasim, setQasim, updateQasim, deleteQasim } );
router.get('/', getQasim)

router.post('/', setQasim)

router.delete('/', deleteQasim)

router.put('/', updateQasim)


module.exports = router;
