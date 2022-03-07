const express = require('express');

const router = express.Router();

router.get( '/cart', (req, res) => {
    res.json({data: 'funciona'});
})




module.exports = router;