
import Medecin from '../../models/Medecin.js';
import ValidateLogin from '../../validation/Login.js';
import bcrypt from 'bcrypt';
import  jwt  from 'jsonwebtoken';


const loginMed = async (req,res)=>{
    const {errors,isValid} = ValidateLogin(req.body);
     try{
        if(!isValid){
         res.status(404).json(errors);
 
        }else{
         Medecin.findOne({Email:req.body.Email}).then(user=>{
             if(!user){
                 res.status(404).json({message:'not found'})
             }
             else{
                 bcrypt.compare(req.body.Password,user.Password).then(isMatch=>{
                     if(!isMatch){
                         res.status(404).json({message:'incorrect password'});
 
                     }else{
                         var token = jwt.sign({
                             id:user._id,
                             Nom:user.Nom,
                             Email: user.Email
                         },process.env.PRIVATE_KEY,{expiresIn: '24h'});
                         res.status(200).json({
                             message:'success',
                             token:token
                         })
                     }
 
                 }
 
                 )
             }
         }
         )
        }
     }
     catch(error){
         res.status(404).json(error.message);
 
     }
    }
    
    
   
export default loginMed; 
/*else if (user.Status==="PENDING"){
                res.status(404).json({message:'still Pending'});
            }*/