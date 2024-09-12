// const Horaire = require('../models/horaireModel');

// const horaireController = {
//     getAllHoraire: async (req, res) => {
//         try {
//             const horaires = await Horaire.getAll();
//             res.json(horaires);
//         } catch (err) {
//             console.error('Error Fetching horaires', err);
//             res.status(500).json({ error: 'Internal server Error' });
//         }
//     },

//     getHoraireById: async (req, res) => {
//         const { id } = req.params;
//         try {
//             const horaire = await Horaire.getById(id);
//             res.json(horaire);
//         } catch (err) {
//             console.error('Error Fetching horaire by id', err);
//             res.status(404).json({ error: 'Horaire not found' });
//         }
//     },

//     createHoraire: async (req, res) => {
//         const { heure_debut, heure_fin } = req.body;
//         try {
//             const newHoraire = await Horaire.create(heure_debut, heure_fin);
//             res.status(201).json(newHoraire);
//         } catch (err) {
//             console.error('Error creating Horaire', err);
//             res.status(500).json({ error: 'Error creating Horaire' });
//         }
//     },

//     updateHoraire: async (req, res) => {
//         const { id } = req.params;
//         const { heure_debut, heure_fin} = req.body;
//         try {
//             const updateHoraire = await Horaire.update(heure_debut, heure_fin, id);
//             res.json(updateHoraire);
//         } catch (err) {
//             console.error('Error updating Horaire', err);
//             res.status(404).json({ error: 'Horaire not found' });
//         }
//     },

//     deleteHoraire: async (req, res) => {
//         const { id } = req.params;
//         try {
//             const deleteHoraire = await Horaire.delete(id);
//             res.json(deleteHoraire);
//         } catch (err) {
//             console.error('Error deleting Horaire', err);
//             res.status(404).json({ error: 'Horaire not found' });
//         }
//     },
// };

// module.exports = horaireController;


const Horaire = require('../models/horaireModel');

const horaireController = {
    getAllHoraire: async (req, res) => {
        try {
            const horaires = await Horaire.getAll();
            res.json(horaires);
        } catch (err) {
            console.error('Error Fetching horaires', err);
            res.status(500).json({ error: 'Internal server Error' });
        }
    },

    getHoraireById: async (req, res) => {
        const { id } = req.params;
        try {
            const horaire = await Horaire.getById(id);
            res.json(horaire);
        } catch (err) {
            console.error('Error Fetching horaire by id', err);
            res.status(404).json({ error: 'Horaire not found' });
        }
    },    
    getHoraireByHeure: async (req, res) => {
        const { heure } = req.params;
        try {
            const horaire = await Horaire.getByHeure(heure);
            res.json(horaire);
        } catch (err) {
            console.error('Error Fetching horaire by id', err);
            res.status(404).json({ error: 'Horaire not found' });
        }
    },

    createHoraire: async (req, res) => {
        const { heure_debut, heure_fin, jour_id } = req.body;
        try {
            const newHoraire = await Horaire.create(heure_debut, heure_fin, jour_id);
            res.status(201).json(newHoraire);
        } catch (err) {
            console.error('Error creating Horaire', err);
            res.status(500).json({ error: 'Error creating Horaire' });
        }
    },

    updateHoraire: async (req, res) => {
        const { id } = req.params;
        const { heure_debut, heure_fin } = req.body;
        try {
            const updateHoraire = await Horaire.update(heure_debut, heure_fin, jour_id,id);
            res.json(updateHoraire);
        } catch (err) {
            console.error('Error updating Horaire', err);
            res.status(404).json({ error: 'Horaire not found' });
        }
    },

    deleteHoraire: async (req, res) => {
        const { id } = req.params;
        try {
            const deleteHoraire = await Horaire.delete(id);
            res.json(deleteHoraire);
        } catch (err) {
            console.error('Error deleting Horaire', err);
            res.status(404).json({ error: 'Horaire not found' });
        }
    },
};

module.exports = horaireController;