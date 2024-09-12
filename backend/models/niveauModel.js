// const pool = require('../db');

// class niveau {
//     static async getAll() {
//         const { rows } = await pool.query('SELECT * FROM niveau ORDER BY id_niveau');
//         return rows;
//     }

//     static async getById(id) {
//         const { rows } = await pool.query('SELECT * FROM niveau WHERE id_niveau = $1', [id]);
//         if (rows.length === 0) {
//             throw new Error('niveau not found');
//         }
//         return rows[0];
//     }

//     static async create(design_niveau) {
//         const { rows } = await pool.query('INSERT INTO niveau (design_niveau) VALUES ($1) RETURNING *', [design_niveau]);
//         return rows[0];
//     }

//     static async update(id, design_niveau) {
//         const { rows } = await pool.query('UPDATE niveau SET design_niveau = $1 WHERE id_niveau = $2 RETURNING *', [design_niveau, id]);
//         if (rows.length === 0) {
//             throw new Error('niveau not found');
//         }
//         return rows[0];
//     }

//     static async delete(id) {
//         const { rows } = await pool.query('DELETE FROM niveau WHERE id_niveau = $1 RETURNING *', [id]);
//         if (rows.length === 0) {
//             throw new Error('niveau not found');
//         }
//         return rows[0];
//     }
// }

// module.exports = niveau;


const connexion = require('../db')

const createNiveau = (designniveau) =>{
    return connexion.query('INSERT INTO niveau (designniveau) VALUES ($1) RETURNING *', [designniveau])
}

const getAllNiveau = () =>{
    return connexion.query('SELECT * FROM niveau')
}

const getNiveau = (id_niveau) =>{
    return connexion.query('SELECT * FROM niveau WHERE "id_niveau"= $1', [id_niveau])
}

const updateNiveau = (id_niveau, designniveau) =>{
    return connexion.query('UPDATE niveau SET "designniveau"=$2 WHERE "id_niveau"= $1 RETURNING *', [id_niveau, designniveau])
}

const deleteNiveau = (id_niveau) =>{
    return connexion.query('DELETE FROM niveau WHERE "id_niveau"=$1', [id_niveau])
}

module.exports = {createNiveau, getAllNiveau, getNiveau, updateNiveau, deleteNiveau}