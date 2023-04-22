import express from 'express';
import RegisterMed from '../controllers/medecin/RegisterMed.control.js';
import loginMed from '../controllers/medecin/loginMed.control.js';
import passport from 'passport';
import  ConfigPassport from '../config/passport.js';
import { ROLES, inRole } from '../config/Rolemiddleware.js';


const routerMed=express.Router();

routerMed.post('/',(req,res)=>{
    res.send('this is medecin route ')
})
/*Registartion Medecin*/
routerMed.post('/register',RegisterMed);
/*Login Medecin*/
routerMed.post('/login',loginMed);
/*Profile Medecin*/
ConfigPassport(passport);
routerMed.get('/profile', passport.authenticate('jwt', { session: false }),inRole(ROLES.USERMED),(req, res) => {
    res.send("Hello doctor " +req.user.Nom+" "+req.user.Prenom)
  });

export default routerMed ;