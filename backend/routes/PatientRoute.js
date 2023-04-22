import express from 'express';
import Register from '../controllers/patient/Register.control.js';
import Login from '../controllers/patient/login.control.js';
import passport from "passport"
import ConfigPassport from "../config/passport.js";
import { ROLES, inRole } from '../config/Rolemiddleware.js';
import rechercheMed from '../controllers/patient/recherche.js';
import inviteMed from '../controllers/patient/inviteMed.js';





const router = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/',(req,res)=>{
    res.send('Bonjour cest patient Route')
})
/*Registartion Patient*/
router.post('/register',Register);
/*Login Patient*/
router.post('/login',Login);
/*Patient Profile*/
ConfigPassport (passport);
router.get('/profile',requireAuth,inRole(ROLES.USERPATIENT),(req, res) => {
   res.send("Hello patient  " +req.user.Nom+" "+req.user.Prenom)          
   });

/*Recherche d'un médecin*/
router.get('/profile/search-med',requireAuth,inRole(ROLES.USERPATIENT),rechercheMed);

/*Recherche d'un médecin*/
router.post('/profile/invite-med',requireAuth,inRole(ROLES.USERPATIENT),inviteMed )


export default router ;

