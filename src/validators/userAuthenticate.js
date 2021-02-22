// import fetchHashById from '../controllers/users';

const { generateHash } = require('../utils/hashing');
const { knex } = require('../db');
const jwt = require('jsonwebtoken');

require('dotenv').config({path: __dirname+"/../../.env"})


const authenticate = (req, res, next)=> {

  const token = req.headers.authorization;

  if (token) {
    /* if token is provided in the request header */
    console.log('user has logged in with a token');
    const decoded = jwt.verify(token, process.env.DB_SECRET);
    if (decoded) {
      res.json({ token });
    } else {
      res.json({ msg: 'invalid user' });
    }

  } else {
    if (true) {
      /* if it is a registered user, return the jwt_token, which is the signed email */
      knex('users').where({
        email: req.body.email,
        password: generateHash(req.body.password)
      }).first()
        .then(users => {
          res.json(jwt.sign(req.body.email,process.env.DB_SECRET));
        });
    } else {
      res.status(401).json(
        { msg: 'unauthorized access' }
      );
    }
  }

}

/*  function generateAccessToken(email) {
  return jwt.sign(email, 'secretkey');
}*/

module.exports = {authenticate};
