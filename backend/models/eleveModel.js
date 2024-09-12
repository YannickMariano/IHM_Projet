// const connexion = require('../connexion')

const connexion = require("../db");

const createUser = (email, mdp) => {
    return connexion.query('INSERT INTO "eleve" (email, mdp) VALUES ($1, $2) RETURNING *', [email, mdp]);
  };

const getAllUser = () =>{
    return connexion.query('SELECT * FROM "eleve"')
}

const getUser = (email) =>{
    return connexion.query('SELECT * FROM "eleve" WHERE "email"= $1', [email])
}

module.exports = {createUser, getAllUser, getUser}