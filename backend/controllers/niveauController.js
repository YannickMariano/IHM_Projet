// const Niveau = require('../models/niveauModel');

// const niveauController = {
//     getAllNiveaux: async (req, res) => {
//         try {
//             const niveaux = await Niveau.getAll();
//             res.json(niveaux);
//         } catch (err) {
//             console.error('Error Fetching Niveaux', err);
//             res.status(500).json({ error: 'Internal server Error' });
//         }
//     },

//     getNiveauById: async (req, res) => {
//         const { id } = req.params;
//         try {
//             const niveau = await Niveau.getById(id);
//             res.json(niveau);
//         } catch (err) {
//             console.error('Error Fetching niveau by id', err);
//             res.status(404).json({ error: 'Niveau not found' });
//         }
//     },

//     createNiveau: async (req, res) => {
//         const { design_niveau } = req.body;
//         try {
//             const newNiveau = await Niveau.create(design_niveau);
//             res.status(201).json(newNiveau);
//         } catch (err) {
//             console.error('Error creating niveau', err);
//             res.status(500).json({ error: 'Internal server Error' });
//         }
//     },

//     updateNiveau: async (req, res) => {
//         const { id } = req.params;
//         const { design_niveau } = req.body;
//         try {
//             const updateNiveau = await Niveau.update(id, design_niveau);
//             res.json(updateNiveau);
//         } catch (err) {
//             console.error('Error updating niveau', err);
//             res.status(404).json({ error: 'Niveau not found' });
//         }
//     },

//     deleteNiveau: async (req, res) => {
//         const { id } = req.params;
//         try {
//             const deleteNiveau = await Niveau.delete(id);
//             res.json(deleteNiveau);
//         } catch (err) {
//             console.error('Error deleting niveau', err);
//             res.status(404).json({ error: 'Niveau not found' });
//         }
//     },
// };

// module.exports = niveauController;


const niveauModel = require('../models/niveauModel')

const createNiveau = async (req, res) => {
    const { designniveau } = req.body;
    const { rows } = await niveauModel.createNiveau(designniveau);
    res.status(201).json(rows[0]);
  };

const getAllNiveau = async(req, res) =>{
    const {rows} = await niveauModel.getAllNiveau()
    res.json(rows)
}

const getNiveau = async(req, res) =>{
    const {rows} = await niveauModel.getNiveau(req.params.id)
    if (rows.length === 0) return res.status(404).send('Niveau not found');
    res.json(rows[0]);
}

const updateNiveau = async (req, res) => {
    const { designniveau } = req.body;
    const { rows } = await niveauModel.updateNiveau(req.params.id, designniveau);
    if (rows.length === 0) return res.status(404).send('Niveau not found');
    res.json(rows[0]);
  };

const deleteNiveau = async(req, res) =>{
    const {rows} = await niveauModel.deleteNiveau(req.params.id)
    res.status(204).send('Niveau deleted');
}

module.exports = {createNiveau, getAllNiveau, getNiveau, updateNiveau, deleteNiveau}