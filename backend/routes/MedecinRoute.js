import express from 'express';
import RegisterMed from '../controllers/RegisterMed.control.js';
import loginMed from '../controllers/loginMed.control.js';


const routerMed=express.Router();

routerMed.post('/',(req,res)=>{
    res.send('this is medecin route ')
})
/*Registartion Medecin*/
routerMed.post('/register',RegisterMed);
/*Login Patient*/
routerMed.post('/login',loginMed);

export default routerMed ;