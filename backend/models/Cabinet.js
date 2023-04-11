import mongoose from "mongoose";

const CabinetSchema = new mongoose.Schema({
  Address: {
    Rue: { type: String },
    Ville: { type: String  },
    Etat: { type: String, required: true },
    Pay: { type: String, required: true },
  },
  PhotoCabinet: [{
    type: String
  }],
  NumTelCabinet:{typre:Number}
},{ timestamps: true });

const Cabinet= mongoose.model('Cabinet',CabinetSchema );

export default Cabinet;