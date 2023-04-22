import mongoose from "mongoose";
const schema = mongoose.Schema;
const userSchema = new schema(
    {
      Nom: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      Prenom: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      Email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
        trim:true,
      },
      Gender: {
        type: String,
        enum: ['Homme', 'Femme','autre'],
      },
      DateNaissance:{
        type: Date,
        required: true
      },
      NumTel:{
        type:Number,
        require:true 
      },
      Password: {
        type: String,
        required: true,
        min: 5,
      },

      PhotoProfilPath: {
        type: String,
        default: "",
      },
      Pay:{
        type: String,
        enum :['USA', 'Canada', 'UK', 'Australie', 'France', 'Espagne', 'India', 'China', 'Japan','Tunisie'],
        default:'Tunisie'
      },
      Gouvernorat:{
        type: String
      },
       role: {
        type : String 
      }
    },{ timestamps: true });
    
    const User=mongoose.model('User',userSchema);
    export default User;
