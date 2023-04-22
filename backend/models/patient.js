import mongoose from "mongoose";
const schema = mongoose.Schema;
import User from "./User.js";
const PatientSchema = new schema(
    {
          Dossiers:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'DossierMed',
          }],
          RendezVous:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'RendezVous',
          }],
          Medecins:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Medecin',
          }], 
          InvitedMedecins:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Medecin',
          }],    
},{ timestamps: true });

const Patient = User.discriminator('Patient', PatientSchema);
export default Patient;