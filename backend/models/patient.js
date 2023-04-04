import mongoose from "mongoose";
const schema = mongoose.Schema;
const PatientSchema = new schema(
    {
          Nom: {
            type: String,
            
            min: 2,
            max: 50,
          },
          Prenom: {
            type: String,
            
            min: 2,
            max: 50,
          },
          Email: {
            type: String,
            
            max: 50,
            unique: true,
            trim:true,
          },
          Genre: {
            type: String,
            enum: ['homme', 'femme','autre'],
           
          },
          NumTel:{
            type:Number,
            
          },
          Password: {
            type: String,
           
            min: 5,
          },
          DateNaissance:{
            type: Date,
           
          },
          Dossiers:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'DossierMed',
          }],
          RendezVous:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'RendezVous',
          }]
          
},{ timestamps: true });

const Patient=mongoose.model('Patient',PatientSchema);
export default Patient;