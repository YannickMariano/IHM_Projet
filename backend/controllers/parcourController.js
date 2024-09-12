
const parcoursModel = require('../models/parcourModel')

const createParcours = async (req, res) => {
    const { designparcours, description } = req.body;
    const { rows } = await parcoursModel.createParcours(designparcours, description);
    res.status(201).json(rows[0]);
  };

const getAllParcours = async(req, res) =>{
    const {rows} = await parcoursModel.getAllParcours()
    res.json(rows)
}

const getParcours = async(req, res) =>{
    const {rows} = await parcoursModel.getParcours(req.params.id)
    if (rows.length === 0) return res.status(404).send('Parcours not found');
    res.json(rows[0]);
}

const updateParcours = async (req, res) => {
    const { designparcours, description } = req.body;
    const { rows } = await parcoursModel.updateParcours(req.params.id, designparcours, description);
    if (rows.length === 0) return res.status(404).send('Parcours not found');
    res.json(rows[0]);
  };

const deleteParcours = async(req, res) =>{
    const {rows} = await parcoursModel.deleteParcours(req.params.id)
    res.status(204).send('Parcours deleted');
}

module.exports = {createParcours, getAllParcours, getParcours, updateParcours, deleteParcours}