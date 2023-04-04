import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MedecinSchema= new Schema(
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
      Genre: {
        type: String,
        enum: ['homme', 'femme','autre'],
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
      PhotoIdPath: {
        type: String,
        default: "",
        require:true
      },
      PhotoProfilPath: {
        type: String,
        default: "",
      },
      Specialite:{
        type: String,
        enum: ['Médecinedentaire', 'Cardiologie', 'Dermatologie','Gynécologie','Ophtalmologie','O.R.L','Orthopédie-Traumatologie','Pédiatrie','Sexologie','Gastro-entérologie','Urologie','Pneumologie','Medecine-interne','Rhumatologie'],
        required: true

      },
      DateNaissance:{
        type: Date,
        required: true
      },
      Pay:{
        type: String,
        enum :['USA', 'Canada', 'UK', 'Australie', 'France', 'Espagne', 'India', 'China', 'Japan','Tunisie'],
        default:'Tunisie'
      },
      Gouvernorat:{
        type: String
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
        type:CabinetSchema
      },
      Disponibilite:{
        Jours:[{jour:{type:string,required:true},heurDebut:{type:Date,default:Date.now},heurFin:{type:Date,default:Date.now}}]
      },
      ListPatient:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Patient'
      }]
    },{ timestamps: true });

  const Medecin=mongoose.model('medecin',MedecinSchema);

  module.exports=Medecin;