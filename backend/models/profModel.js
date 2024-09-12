const connexion = require('../db')

const createProf = (nom, email, mdp, prenom) =>{
    return connexion.query('INSERT INTO professeur (nom, email, mdp, prenom) VALUES ($1, $2, $3, $4) RETURNING *', [nom, email, mdp, prenom])
}

const getAllProf = () =>{
    return connexion.query('SELECT * FROM professeur ORDER BY "idProf"')
}

const getProf = (idProf) =>{
    return connexion.query('SELECT * FROM professeur WHERE "idProf"= $1', [idProf])
}

const updateProf = (idProf, nom, email, mdp, prenom) =>{
    return connexion.query('UPDATE professeur SET "nom"=$2, "email"=$3, "mdp"=$4, "prenom"=$5 WHERE "idProf"= $1 RETURNING *', [idProf, nom, email, mdp, prenom])
}

const deleteProf = (idProf) =>{
    return connexion.query('DELETE FROM professeur WHERE "idProf"=$1', [idProf])
}

const getMail = (email) =>{
    return connexion.query('SELECT * FROM professeur WHERE "email"= $1', [email])
}

module.exports = {createProf, getAllProf, getProf, updateProf, deleteProf, getMail}
