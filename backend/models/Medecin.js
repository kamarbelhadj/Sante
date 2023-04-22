import mongoose from "mongoose";
const Schema = mongoose.Schema;
import Cabinet from "./Cabinet.js";
import User from "./User.js";
const MedecinSchema= new Schema(
    {
      Status: {
        type: String,
        enum:['PENDING','APPROVED'],
        default: 'PENDING',
      },
      PhotoIdPath: {
        type: String,
        default: "",
        require:true
      },
      Specialite:{
        type: String,
        required: true
      },
      
      ActsEtSoins:{
        type: [String],
        default:[]
      },
      QualificationProfessionnels:{
        type:String,
        default:''
      },
      SpecificationSpecialite:{
        type:String
      },
      Cabinet:{
        type:Cabinet.schema,
      },
      Disponibilite: {
        Jours: [
          {
            jour: { type: String, required: true },
            heurDebut: { type: Date, default: Date.now },
            heurFin: { type: Date, default: Date.now }
          }
        ]
      },
      ListPatient:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Patient',
        Status:{
          type:String,
          default:"Pending"
        }
      }],
    },{ timestamps: true });

    const Medecin = User.discriminator('Medecin', MedecinSchema);

  export default Medecin;