import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import Patient from '../models/patient.js';
import dotenv from 'dotenv';
dotenv.config();

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PRIVATE_KEY;

export default function ConfigPassport(passport) {
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Patient.findOne({_id: jwt_payload.id}) 
      .then(user => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
    }))

}
