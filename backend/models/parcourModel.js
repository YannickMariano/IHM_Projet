// const pool = require('../db');

// class parcour {
//     static async getAll() {
//         const { rows } = await pool.query('SELECT * FROM parcour ORDER BY id_parcour');
//         return rows;
//     }

//     static async getById(id) {
//         const { rows } = await pool.query('SELECT * FROM parcour WHERE id_parcour = $1', [id]);
//         if (rows.length === 0) {
//             throw new Error('parcour not found');
//         }
//         return rows[0];
//     }

//     static async create(design_parcour) {
//         const { rows } = await pool.query('INSERT INTO parcour (design_parcour) VALUES ($1) RETURNING *', [design_parcour]);
//         return rows[0];
//     }

//     static async update(id, design_parcour) {
//         const { rows } = await pool.query('UPDATE parcour SET design_parcour = $2 WHERE id_parcour = $1 RETURNING *', [id, design_parcour]);
//         if (rows.length === 0) {
//             throw new Error('parcour not found');
//         }
//         return rows[0];
//     }

//     static async delete(id) {
//         const { rows } = await pool.query('DELETE FROM parcour WHERE id_parcour = $1 RETURNING *', [id]);
//         if (rows.length === 0) {
//             throw new Error('parcour not found');
//         }
//         return rows[0];
//     }
// }

// module.exports = parcour;


const connexion = require('../db')

const createParcours = (designparcours, decription) =>{
    return connexion.query('INSERT INTO parcours (designparcours, description) VALUES ($1, $2) RETURNING *', [designparcours, decription])
}

const getAllParcours = () =>{
    return connexion.query('SELECT * FROM parcours')
}

const getParcours = (id_parcours) =>{
    return connexion.query('SELECT * FROM parcours WHERE "id_parcours"= $1', [id_parcours])
}

const updateParcours = (id_parcours, designparcours, description) =>{
    return connexion.query('UPDATE parcours SET "designparcours"=$2, "description"=$3 WHERE "id_parcours"= $1 RETURNING *', [id_parcours, designparcours, description])
}

const deleteParcours = (id_parcours) =>{
    return connexion.query('DELETE FROM parcours WHERE "id_parcours"=$1', [id_parcours])
}

module.exports = {createParcours, getAllParcours, getParcours, updateParcours, deleteParcours}