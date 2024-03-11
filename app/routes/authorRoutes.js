const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: req.method + ' - Request Made'
    });
});

router.post('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: req.method + ' - Request Made'
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json({
        id,
        success: true,
        message: req.method + ' - Request Made'
    });
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json({
        id,
        success: true,
        message: req.method + ' - Request Made'
    });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json({
        id,
        success: true,
        message: req.method + ' - Request Made'
    });
});

module.exports = router;