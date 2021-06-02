const controllers = require('../controllers');

const router = [
  {
    method: 'GET',
    path: '/',
    handler: controllers.homePage
  }
];

module.exports = router;
