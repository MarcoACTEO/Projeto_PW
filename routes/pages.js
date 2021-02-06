const express = require('express');
const router =  express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/postCreator', (req, res) => {
    res.render('postCreator');
});

router.get('/postViewer', (req, res) => {
    res.render('postViewer');
});

module.exports = router;