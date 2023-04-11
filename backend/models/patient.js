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
          Gender: {
            type: String,
            enum: ['Homme', 'Femme','autre'],
           
          },
          NumTel:{
            type:Number,
            
          },
          Password: {
            type: String,
           
            min: 5,
          },
          Pays:{
            type:String,
          },
          Gouvernorat:{
            type: String
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
          }],
          role: "string",
          
},{ timestamps: true });

const Patient=mongoose.model('Patient',PatientSchema);
export default Patient;