var express = require('express');
var router = express.Router();
var multer = require('multer');
const { rawListeners } = require('./users');
var userModel = require('./users');

var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "public/images/upload");
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
});

var upload = multer({storage: storage});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

router.post('/submit', upload.single("avatar"), function(req, res, next) {
  userModel.create({
    name: req.body.name,
    avatar: req.file.filename
  })
  .then(function(data){
    res.render('gallery', {data});
  });
});

module.exports = router;