var express = require('express');
var router = express.Router();
const { MovieList, addMovie } = require("../controller/movie")
/* GET home page. */
const bodyParse = require("body-parser")
const middleWare = bodyParse.json()
const { CarouselList, RankList } = require("../controller/home")
const { api, login } = require('../controller/login.js')


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('api', api)
router.post('/user/login', middleWare, login)
router.get('/getCarouselList', CarouselList);
router.get('/getRankList', RankList);
router.get('/getMovieList', MovieList)


module.exports = router;
