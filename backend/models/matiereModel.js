// const pool = require('../db');

// class Matiere {
//     static async getAll() {
//         const { rows } = await pool.query('SELECT * FROM matiere ORDER BY id_matiere');
//         return rows;
//     }

//     static async getById(id) {
//         const { rows } = await pool.query('SELECT * FROM matiere WHERE id_matiere = $1', [id]);
//         if (rows.length === 0) {
//             throw new Error('Matiere not found');
//         }
//         return rows[0];
//     }

//     static async create(designmat, prof_id) {
//         const { rows } = await pool.query('INSERT INTO matiere (designmat, prof_id) VALUES ($1, $2) RETURNING *', [designmat, prof_id]);
//         return rows[0];
//     }

//     static async update(id, designmat, prof_id) {
//         const { rows } = await pool.query('UPDATE matiere SET designmat = $1, prof_id = $2 WHERE id_matiere = $3 RETURNING *', [designmat, prof_id, id]);
//         if (rows.length === 0) {
//             throw new Error('Matiere not found');
//         }
//         return rows[0];
//     }

//     static async delete(id) {
//         const { rows } = await pool.query('DELETE FROM matiere WHERE id_matiere = $1 RETURNING *', [id]);
//         if (rows.length === 0) {
//             throw new Error('Matiere not found');
//         }
//         return rows[0];
//     }
// }

// module.exports = Matiere;



const connexion = require('../db')

const createMatiere = (designmat, id_prof) =>{
    return connexion.query('INSERT INTO matiere (designmat, id_prof) VALUES ($1, $2) RETURNING *', [designmat, id_prof])
}

const getAllMatiere = () =>{
    return connexion.query('SELECT * FROM matiere')
}


const getMatiere = (id_matiere) =>{
    return connexion.query('SELECT * FROM matiere WHERE "id_matiere"= $1', [id_matiere])
}

const updateMatiere = (id_matiere, designmat, id_prof) =>{
    return connexion.query('UPDATE matiere SET "designmat"=$2, "id_prof"=$3 WHERE "id_matiere"= $1 RETURNING *', [id_matiere, designmat, id_prof])
}

const deleteMatiere = (id_matiere) =>{
    return connexion.query('DELETE FROM matiere WHERE "id_matiere"=$1', [id_matiere])
}

module.exports = {createMatiere, getAllMatiere, getMatiere, updateMatiere, deleteMatiere}