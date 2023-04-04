import mongoose from "mongoose";
const Schema = mongoose.Schema;
const QuestionnaireSchema=new Schema({
    Proprietaire:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Medecin'
    },
    Questions:[{
        question:{
            type:String,
            required:true
        },
        Reponse:{
            Type:String,
            required:true
        }
    }],
    RepondeurId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }]

},{ timestamps: true });
const Questionnaire =mongoose.model('Questionnaire',QuestionnaireSchema);

module.exports=Questionnaire;