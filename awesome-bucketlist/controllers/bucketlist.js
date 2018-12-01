const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("GET");
});
router.post('/', (req, res, next) => {
    res.send("POST");
});
router.delete('/:id', (req, res, next) => {
    res.send("DELETE");
});

module.exports = router;