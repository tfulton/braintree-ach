var express = require('express');
var router = express.Router();

/* Redirect to home page. */
router.get('/', function(req, res, next) {
  res.redirect(302, '/index.html');
// res.render('index', { title: 'Express' });
});

module.exports = router;
