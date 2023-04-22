import Medecin from "../../models/Medecin.js";

const rechercheMed = async (req, res) => {
    const { Nom, Prenom } = req.body;
    try {
      const users = await Medecin.find({ Nom: Nom, Prenom: Prenom });
      if (users.length === 0) {
        res.status(404).json({ message: "not found" });
      } else {
        res.send(users)
        res.status(200).json({ message: "success" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  export default rechercheMed ;