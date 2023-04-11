import isEmpty from "./isEmpty.js";
import validator from 'validator';


function ValidateRegister(data){
    let errors={};

    data.Nom =!isEmpty(data.Nom)?data.Nom:"";
    data.Prenom =!isEmpty(data.Prenom)?data.Prenom:"";
    data.Email =!isEmpty(data.Email)?data.Email:"";
    data.Gender =!isEmpty(data.Gender)?data.Gender:"";
    data.Password=!isEmpty(data.Password)?data.Password:"";
    data.DateNaissance=!isEmpty(data.DateNaissance)?data.DateNaissance:"";
    data.PhotoIdPath=!isEmpty(data.PhotoIdPath)?data.PhotoIdPath:"";
    data.Specialite=!isEmpty(data.Specialite)?data.Specialite:"";
    
    
    data.ConfirmPassword=!isEmpty(data.ConfirmPassword)?data.ConfirmPassword:"";
    

    if(validator.isEmpty(data.Nom)){
        errors.Nom='required nom'
    }

    if(validator.isEmpty(data.Prenom)){
       
        errors.Prenom='required Prenom'
    }
    if(!validator.isEmail(data.Email)){
        errors.Email='Required format email'
    }
    
    if(validator.isEmpty(data.Email)){
        errors.Email='required Email'
    }

    if(validator.isEmpty(data.Prenom)){
        errors.Prenom='required Prenom'
    }

    if(validator.isEmpty(data.Gender)){
        errors.Gender='required Gender'
    }

    if(validator.isEmpty(data.Password)){
        errors.Password='required Password'
    }

    if(validator.isEmpty(data.DateNaissance)){
        errors.DateNaissance='required DateNaissance'
    }
   
    if (!validator.equals(data.Password, data.ConfirmPassword)){
        errors.ConfirmPassword="password is not matched"
    }
    if(validator.isEmpty(data.ConfirmPassword)){
        errors.ConfirmPassword='required ConfirmPassword'
    }
    if(validator.isEmpty(data.PhotoIdPath)){
        errors.PhotoIdPath='required PhotoIdPath'
    }
    if(validator.isEmpty(data.Specialite)){
        errors.Specialite='required Specialite'
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
};
export default ValidateRegister;