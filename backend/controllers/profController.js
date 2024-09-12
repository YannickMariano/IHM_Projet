const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prof = require('../models/profModel')

const createProf = async (req, res) => {
    const { nom, email, mdp, prenom } = req.body;
    const { rows } = await prof.createProf(nom, email, mdp, prenom);
    res.status(201).json(rows[0]);
  };

const getAllProf = async(req, res) =>{
    const {rows} = await prof.getAllProf()
    res.json(rows)
  }

const getProf = async(req, res) =>{
    const {rows} = await prof.getProf(req.params.id)
    if (rows.length === 0) return res.status(404).send('prof not found');
    res.json(rows[0]);
  }

const updateProf = async (req, res) => {
    const { nom, email, mdp, prenom } = req.body;
    const { rows } = await prof.updateProf(req.params.id, nom, email, mdp, prenom);
    if (rows.length === 0) return res.status(404).send('prof not found');
    res.json(rows[0]);
  };

const deleteProf = async(req, res) =>{
    const {rows} = await prof.deleteProf(req.params.id)
    res.json(rows);
}

const profsignup = async (req, res) => {
  try {
      const { nom, email, mdp, prenom } = req.body;
      // const hash = await bcrypt.hash(mdp, 10); // Hache le mdp
      const { rows } = await prof.createProf(nom, email, mdp, prenom); // Utilise le hash
      if (rows.length > 0) {
          res.status(201).json({ message: 'Utilisateur créé !' });
          console.log(rows)
      } else {
          res.status(400).json({ error: 'Erreur de création de l’utilisateur' });
      }
  } catch (error) {
      res.status(500).json({ error: 'Erreur de hachage du mot de passe ou de création de l’utilisateur', error });
  }
};

const proflogin = async (req, res) => {
  try {
      const { email, mdp } = req.body;
      console.log(email)
      const { rows } = await prof.getMail(email); // S'assurer que cette méthode est bien définie et fonctionnelle
      console.log(rows)
     
      if (rows.length === 0) {
          return res.status(401).json({ message: "E-mail ou mot de passe incorrect" });
      }
      const user = rows[0];
      // const valid = await bcrypt.compare(mdp, user.mdp);
      const valid = mdp === user.mdp;
      if (!valid) {
          return res.status(401).json({ message: "Mot de passe incorrect" });
      }
      const token = jwt.sign({ user_id: user.idProf, nom: user.nom, email: user.email }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' });
      res.status(200).json({
          user_id: user.user_id,
          token: token
      });
  }
  
   catch (error) {
      console.error(error); // Ajoute cela pour voir l'erreur dans les logs du serveur
      res.status(500).json({ error: 'Erreur lors de la vérification du mot de passe', details: error.toString() });
  }
  
};

module.exports = {createProf, getAllProf, getProf, updateProf, deleteProf, proflogin, profsignup}