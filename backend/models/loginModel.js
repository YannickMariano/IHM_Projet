// const connexion = require('../connexion')

const connexion = require("../db");

const createUser = (username, mdp) => {
    return connexion.query('INSERT INTO "user" (username, mdp) VALUES ($1, $2) RETURNING *', [username, mdp]);
  };

const getAllUser = () =>{
    return connexion.query('SELECT * FROM "user"')
}

const getUser = (username) =>{
    return connexion.query('SELECT * FROM "user" WHERE "username"= $1', [username])
}

module.exports = {createUser, getAllUser, getUser}