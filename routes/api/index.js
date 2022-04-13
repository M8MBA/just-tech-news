const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

router.post('/post');

module.exports = router;