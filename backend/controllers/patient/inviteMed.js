import Patient from "../../models/patient.js";
import Medecin from "../../models/Medecin.js";


const inviteMed = async (req, res) => {
    try {
      // Get the patient and doctor IDs from the request body
      const { patientId, medecinId } = req.body;
  
      // Find the patient and doctor in the database
      const patient = await Patient.findById(patientId);
      const medecin = await Medecin.findById(medecinId);
  
      // Check if the patient and doctor exist
      if (!medecin) {
        return res.status(404).json({ message: 'Patient or doctor not found' });
      }
  
      // Add the doctor to the patient's list of invited doctors
      patient.InvitedMedecins.push(medecin._id);
      await patient.save();
  
      // Return success response
      res.status(200).json({ message: 'Invitation sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  export default inviteMed ;