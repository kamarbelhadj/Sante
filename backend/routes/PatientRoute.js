import express from 'express';
import Register from '../controllers/Register.control.js';
import Login from '../controllers/login.control.js';
import passport from "passport"
import ConfigPassport from "../config/passport.js";
import  jwt  from 'jsonwebtoken';


const router = express.Router();

router.post('/',(req,res)=>{
    res.send('Bonjour cest patient Route')
})
/*Registartion Patient*/
router.post('/register',Register);
/*Login Patient*/
router.post('/login',Login);
//test 

router.get('/test',(req,res)=>{
    jwt.verify(req.rawHeaders[1].split("Beare ")[1],process.env.PRIVATE_KEY,function(err,decoded){
        console.log(decoded)
    })
    console.log(req.rawHeaders['Authorization'])

}
)
export default router ;

