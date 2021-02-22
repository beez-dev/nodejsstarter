import validateHash from '../utils/hashing';
import fetchHashById from '../controllers/users';

const jwt = require('jsonwebtoken');

require('dotenv').config({path: __dirname+"/../../.env"})


const authenticate = (req, res, next)=>{

  const token = req.headers.authorization;

  if(token){
    const decoded = jwt.verify( token, process.env.DB_SECRET );
    /*if token available*/

    if (decoded) {
      res.json({ token });
    }else{
      res.json({ msg: 'password mismatch' });
    }

  } else {
    res.status(401).json(
      {msg: "unauthorized access"}
    );
  }
}

/*  function generateAccessToken(email) {
  return jwt.sign(email, 'secretkey');
}*/

module.exports = {authenticate};
