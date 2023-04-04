import mongoose from "mongoose";

const CabinetSchema = new mongoose.Schema({
  Address: {
    Rue: { type: String, required: true },
    Ville: { type: String, required: true },
    Etat: { type: String, required: true },
    Pay: { type: String, required: true },
  },
  PhotoCabinet: [{
    type: String
  }],
  NumTelCabinet:{typre:Number}
},{ timestamps: true });

const Cabinet= mongoose.model('Cabinet',CabinetSchema );

module.exports = Cabinet;