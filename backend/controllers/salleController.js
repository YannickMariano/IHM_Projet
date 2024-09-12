// const Salle = require('../models/salleModel')

// const createSalle = async (req, res) => {
//     const { designation } = req.body;
//     const { rows } = await Salle.createSalle(designation);
//     res.status(201).json(rows[0]);
//   };


// // const getAllSalle = async (req, res) => {
// //       try {
// //           const matieres = await Salle.getAllSalle();
// //           res.json(matieres);
// //       } catch (err) {
// //           console.error('Error Fetching matiere', err);
// //           res.status(500).json({ error: 'Internal server Error' });
// //       }
// //   }

// const getAllSalle = async(req, res) =>{
//     const {rows} = await Salle.getAllSalle()
//     res.json(rows)
// }

// const getSalle = async(req, res) =>{
//     const {designation} = req.body
//     const {rows} = await Salle.getSalle(req.params.id, designation)
//     if (rows.length === 0) return res.status(404).send('Room not found');
//     res.json(rows);
// }

// const updateSalle = async (req, res) => {
//     const { designation } = req.body;
//     const { rows } = await Salle.updateSalle(req.params.id, designation);
//     if (rows.length === 0) return res.status(404).send('Room not found');
//     res.json(rows[0]);
//   };

// const deleteSalle = async(req, res) =>{
//     const {rows} = await Salle.deleteSalle(req.params.id)
//     res.status(204).send('Room deleted');
// }

// module.exports = {createSalle, getAllSalle, getSalle, updateSalle, deleteSalle}



const salleModel = require('../models/salleModel')

const createSalle = async (req, res) => {
    const { designation, occupation } = req.body;
    const { rows } = await salleModel.createSalle(designation, occupation);
    res.status(201).json(rows[0]);
  };

const getAllSalle = async(req, res) =>{
    const {rows} = await salleModel.getAllSalle()
    res.json(rows)
}

const getSalle = async(req, res) =>{
    const {rows} = await salleModel.getSalle(req.params.id)
    if (rows.length === 0) return res.status(404).send('Room not found');
    res.json(rows[0]);
}

const updateSalle = async (req, res) => {
    const { designation, occupation } = req.body;
    const { rows } = await salleModel.updateSalle(req.params.id, designation, occupation);
    if (rows.length === 0) return res.status(404).send('Room not found');
    res.json(rows[0]);
  };

const deleteSalle = async(req, res) =>{
    const {rows} = await salleModel.deleteSalle(req.params.id)
    res.status(204).send('Room deleted');
}

module.exports = {createSalle, getAllSalle, getSalle, updateSalle, deleteSalle}