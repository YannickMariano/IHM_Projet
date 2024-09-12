// const Organiser = require('../models/organiserModel');

// const organiserController = {
//     getAllOrganiser: async (req, res) => {
//         try {
//             const org = await Organiser.getAll();
//             res.json(org);
//         } catch (err) {
//             console.error('Error Fetching horaires', err);
//             res.status(500).json({ error: 'Internal server Error' });
//         }
//     },

//     getOrganiserById: async (req, res) => {
//         const { id } = req.params;
//         try {
//             const org = await Organiser.getById(id);
//             res.json(org);
//         } catch (err) {
//             console.error('Error Fetching horaire by id', err);
//             res.status(404).json({ error: 'Horaire not found' });
//         }
//     },

//     createOrganiser: async (req, res) => {
//         const { matiere_id, niveau_id, parcour_id, occupation, idSalle, jour_id, horaire_id } = req.body;
//         try {
//             const newOrg = await Organiser.create(matiere_id, niveau_id, parcour_id, occupation, idSalle, jour_id, horaire_id);
//             res.status(201).json(newOrg);
//         } catch (err) {
//             console.error('Error creating Horaire', err);
//             res.status(500).json({ error: 'Error creating Horaire' });
//         }
//     },

//     updateOrganiser: async (req, res) => {
//         const { id } = req.params;
//         const { matiere_id, niveau_id, parcour_id, occupation, idSalle, jour_id, horaire_id } = req.body;
//         try {
//             const updateOrg = await Organiser.update(matiere_id, niveau_id, parcour_id, occupation, idSalle, jour_id, horaire_id, id);
//             res.json(updateOrg);
//         } catch (err) {
//             console.error('Error updating Horaire', err);
//             res.status(404).json({ error: 'Horaire not found' });
//         }
//     },

//     deleteOrganiser: async (req, res) => {
//         const { id } = req.params;
//         try {
//             const deleteOrg = await Organiser.delete(id);
//             res.json(deleteOrg);
//         } catch (err) {
//             console.error('Error deleting Horaire', err);
//             res.status(404).json({ error: 'Horaire not found' });
//         }
//     },
// };

// module.exports = organiserController;

const createCalendrier = async (req, res) => {
    const { id_matiere, id_salle, id_parcours, id_niveau, date,id_horaire } = req.body;
  
    try {
      const dispo = await calendrierModel.verifierDisponibilite(id_salle, date,id_horaire);
      if (dispo.rowCount > 0) {
        return res.status(409).json({ message: "Ce créneau est déja pris!." });
      }
  
      const result = await calendrierModel.createCalendrier(id_matiere, id_salle, id_parcours, id_niveau, date,id_horaire);
      if (!result) {
        return res.status(400).json({ message: "Erreur lors de la création de l'emploi du temps." });
      }
  
          return res.status(201).json({ emploiDuTemps: result});
    } catch (error) {
      console.error("Erreur lors de la création de l'emploi du temps:", error);
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  };
  
  const getAllCalendrier = async (req, res) => {
    const { rows } = await calendrierModel.getAllCalendrier();
    res.json(rows);
  };
  
  const getCalendrier = async (req, res) => {
    const { rows } = await calendrierModel.getCalendrier(req.params.id);
    if (rows.length === 0) return res.status(404).send("Organiser not found");
    res.json(rows[0]);
  };
  
  const updateCalendrier = async (req, res) => {
    const {
      id_prof,
      id_matiere,
      id_salle,
      id_parcours,
      id_niveau,
      id_jour,
     id_heure_debut,
     id_heure_fin
    } = req.body;
    const { rows } = await calendrierModel.updateCalendrier(
      req.params.id,
      id_prof,
      id_matiere,
      id_salle,
      id_parcours,
      id_niveau,
      id_jour,
      heure_debut,
      heure_fin
    );
    if (rows.length === 0) return res.status(404).send("Organiser not found");
    res.json(rows[0]);
  };
  
  const deleteCalendrier = async (req, res) => {
    const { rows } = await calendrierModel.deleteCalendrier(req.params.id);
    res.status(204).send("Organiser deleted");
  };
  
  module.exports = {
    createCalendrier,
    getAllCalendrier,
    getCalendrier,
    updateCalendrier,
    deleteCalendrier,
  };