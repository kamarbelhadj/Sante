import mongoose from "mongoose";
const Schema = mongoose.Schema;
const DossierMedSchema=new Schema(
    {
        MedecinId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Medecin'
        },
        BilanMedical:[{
            bilan:{
                data: Buffer,
                contentType: String
            },
            typeBilan:{
                type: String,
                enum:[]
            }
        }],
        ImagerieMed:[{
            data: Buffer,
            contentType: String
        }]
},{ timestamps: true });
const DossierMed=mongoose.model('DossieMed',DossierMedSchema);
export default DossierMed;
