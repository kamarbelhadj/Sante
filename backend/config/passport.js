import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import Patient from '../models/patient.js';
import dotenv from 'dotenv';
dotenv.config();

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PRIVATE_KEY;

function ConfigPassport(passport) {
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Patient.findOne({_id: jwt_payload.sub})
    .then(user => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch(err => done(err, false));
  }));
}

if (!process.env.PRIVATE_KEY) {
  console.error('PRIVATE_KEY not defined in .env file');
}

export default ConfigPassport;
