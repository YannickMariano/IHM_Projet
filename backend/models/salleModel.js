// const connexion = require('../db')

// const createSalle = (designation) =>{
//     return connexion.query('INSERT INTO salle (designation) VALUES ($1) RETURNING *', [designation])
// }

// const getAllSalle = () =>{
//     return connexion.query('SELECT * FROM salle ORDER BY "idSalle"')
// }

// const getSalle = (idSalle) =>{
//     return connexion.query('SELECT * FROM salle WHERE idSalle = $1 ', [idSalle])
// }

// const updateSalle = (idSalle, designation) =>{
//     return connexion.query('UPDATE salle SET "designation"=$2 WHERE "idSalle"= $1 RETURNING *', [idSalle, designation])
// }

// const deleteSalle = (idSalle) =>{
//     return connexion.query('DELETE FROM salle WHERE "idSalle"=$1', [idSalle])
// }

// module.exports = {createSalle, getAllSalle, getSalle, updateSalle, deleteSalle}


const connexion = require('../db')

const createSalle = (designation, occupation) =>{
    return connexion.query('INSERT INTO salle (designation, occupation) VALUES ($1, $2) RETURNING *', [designation, occupation])
}

const getAllSalle = () =>{
    return connexion.query('SELECT * FROM salle')
}

const getSalle = (id_salle) =>{
    return connexion.query('SELECT * FROM salle WHERE "id_salle"= $1', [id_salle])
}

const updateSalle = (id_salle, designation, occupation) =>{
    return connexion.query('UPDATE salle SET "designation"=$2, "occupation"=$3 WHERE "id_salle"= $1 RETURNING *', [id_salle, designation, occupation])
}

const deleteSalle = (id_salle) =>{
    return connexion.query('DELETE FROM salle WHERE "id_salle"=$1', [id_salle])
}

module.exports = {createSalle, getAllSalle, getSalle, updateSalle, deleteSalle}