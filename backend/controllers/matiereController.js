// const Matiere = require('../models/matiereModel');

// const matiereController = {
//     getAllMatieres: async (req, res) => {
//         try {
//             const matieres = await Matiere.getAll();
//             res.json(matieres);
//         } catch (err) {
//             console.error('Error Fetching matiere', err);
//             res.status(500).json({ error: 'Internal server Error' });
//         }
//     },

//     getMatiereById: async (req, res) => {
//         const { id } = req.params;
//         try {
//             const matiere = await Matiere.getById(id);
//             res.json(matiere);
//         } catch (err) {
//             console.error('Error Fetching matiere by id', err);
//             res.status(404).json({ error: 'Matiere not found' });
//         }
//     },

//     createMatiere: async (req, res) => {
//         const { designmat, prof_id } = req.body;
//         try {
//             const newMatiere = await Matiere.create(designmat, prof_id);
//             res.status(201).json(newMatiere);
//         } catch (err) {
//             console.error('Error creating matiere', err);
//             res.status(500).json({ error: 'Error creating Mat' });
//         }
//     },

//     updateMatiere: async (req, res) => {
//         const { id } = req.params;
//         const { designmat, prof_id } = req.body;
//         try {
//             const updateMatiere = await Matiere.update(id, designmat, prof_id);
//             res.json(updateMatiere);
//         } catch (err) {
//             console.error('Error updating matiere', err);
//             res.status(404).json({ error: 'Matiere not found' });
//         }
//     },

//     deleteMatiere: async (req, res) => {
//         const { id } = req.params;
//         try {
//             const deleteMatiere = await Matiere.delete(id);
//             res.json(deleteMatiere);
//         } catch (err) {
//             console.error('Error deleting matiere', err);
//             res.status(404).json({ error: 'Matiere not found' });
//         }
//     },
// };

// module.exports = matiereController;

const matModel = require('../models/matiereModel')

const createMatiere = async (req, res) => {
    const { designmat, id_prof } = req.body;
    const { rows } = await matModel.createMatiere(designmat, id_prof);
    res.status(201).json(rows[0]);
  };

const getAllMatiere = async(req, res) =>{
    const {rows} = await matModel.getAllMatiere()
    res.json(rows)
}

const getMatiere = async(req, res) =>{
    const {rows} = await matModel.getMatiere(req.params.id)
    if (rows.length === 0) return res.status(404).send('Matiere not found');
    res.json(rows[0]);
}

const updateMatiere = async (req, res) => {
    const { designmat, id_prof } = req.body;
    const { rows } = await matModel.updateMatiere(req.params.id, designmat, id_prof);
    if (rows.length === 0) return res.status(404).send('Matiere not found');
    res.json(rows[0]);
  };

const deleteMatiere = async(req, res) =>{
    const {rows} = await matModel.deleteMatiere(req.params.id)
    res.status(204).send('Matiere deleted');
}

module.exports = {createMatiere, getAllMatiere, getMatiere, updateMatiere, deleteMatiere}