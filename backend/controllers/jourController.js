const Jour = require('../models/jourModel');

const jourController = {
    getAllJour: async (req, res) => {
        try {
            const jours = await Jour.getAll();
            res.json(jours);
        } catch (err) {
            console.error('Error Fetching jours', err);
            res.status(500).json({ error: 'Internal server Error' });
        }
    },

    getJourById: async (req, res) => {
        const { id } = req.params;
        try {
            const jour = await Jour.getById(id);
            res.json(jour);
        } catch (err) {
            console.error('Error Fetching jour by id', err);
            res.status(404).json({ error: 'Jour not found' });
        }
    },

    createJour: async (req, res) => {
        const { design_jour } = req.body;
        try {
            const newJour = await Jour.create(design_jour);
            res.status(201).json(newJour);
        } catch (err) {
            console.error('Error creating Jour', err);
            res.status(500).json({ error: 'Error creating Jour' });
        }
    },

    updateJour: async (req, res) => {
        const { id } = req.params;
        const { design_jour } = req.body;
        try {
            const updateJour = await Jour.update(id, design_jour);
            res.json(updateJour);
        } catch (err) {
            console.error('Error updating Jour', err);
            res.status(404).json({ error: 'Jour not found' });
        }
    },

    deleteJour: async (req, res) => {
        const { id } = req.params;
        try {
            const deleteJour = await Jour.delete(id);
            res.json(deleteJour);
        } catch (err) {
            console.error('Error deleting Jour', err);
            res.status(404).json({ error: 'Jour not found' });
        }
    },
};

module.exports = jourController;