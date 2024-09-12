// const pool = require('../db');

// class Organiser {
//     static async getAll() {
//         const { rows } = await pool.query('SELECT * FROM organiser');
//         return rows;
//     }

//     static async getById(id) {
//         const { rows } = await pool.query('SELECT * FROM organiser WHERE id_organiser = $1', [id]);
//         if (rows.length === 0) {
//             throw new Error('organiser not found');
//         }
//         return rows[0];
//     }

//     static async create(matiere_id, niveau_id, parcour_id, occupation, idSalle, jour_id, horaire_id) {
//         const { rows } = await pool.query('INSERT INTO organiser (matiere_id, niveau_id, parcour_id, occupation, "idSalle", jour_id, horaire_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [matiere_id, niveau_id, parcour_id, occupation, idSalle, jour_id, horaire_id]);
//         return rows[0];
//     }

//     static async update(matiere_id, niveau_id, parcour_id, occupation, idSalle, jour_id, horaire_id, id) {
//         const { rows } = await pool.query('UPDATE organiser SET matiere_id = $1 , niveau_id = $2, parcour_id = $3, occupation = $4, "idSalle" = $5, jour_id = $6, horaire_id = $7 WHERE id_organiser = $8 RETURNING *', [matiere_id, niveau_id, parcour_id, occupation, idSalle, jour_id, horaire_id, id]);
//         if (rows.length === 0) {
//             throw new Error('organiser not found');
//         }
//         return rows[0];
//     }

//     static async delete(id) {
//         const { rows } = await pool.query('DELETE FROM organiser WHERE id_organiser = $1 RETURNING *', [id]);
//         if (rows.length === 0) {
//             throw new Error('organiser not found');
//         }
//         return rows[0];
//     }
// }

// module.exports = Organiser;



const connexion = require('../db')

const createCalendrier = (id_matiere, id_salle, id_parcours, id_niveau, date, id_horaire) =>{
    return connexion.query('INSERT INTO edt (id_matiere, id_salle, id_parcours, id_niveau, date, id_horaire) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [id_matiere, id_salle, id_parcours, id_niveau, date, id_horaire])
}

const verifierDisponibilite =  (id_salle, date, id_horaire) =>{
    return connexion.query('SELECT * FROM edt WHERE id_salle=$1 AND date=$2 AND id_horaire=$3', [id_salle, date, id_horaire])
}

const getAllCalendrier = () => {
    return connexion.query(`
        SELECT 
            matiere.designmat, 
            niveau.designniveau, 
            salle.designation, 
            parcours.designparcours, 
            horaire.heure, 
            edt.date 
        FROM 
            edt
        INNER JOIN matiere ON matiere.id_matiere = edt.id_matiere
        INNER JOIN niveau ON niveau.id_niveau = edt.id_niveau
        INNER JOIN salle ON salle.id_salle = edt.id_salle
        INNER JOIN parcours ON parcours.id_parcours = edt.id_parcours
        INNER JOIN horaire ON horaire.id_horaire = edt.id_horaire
    `);
}

const getCalendrier = (id_calendrier) =>{
    return connexion.query('SELECT * FROM edt WHERE "id_edt"= $1', [id_calendrier])
}

const updateid_horaireCalendrier = (id_calendrier, id_matiere, id_salle, id_parcours, id_niveau, id_jour) =>{
    return connexion.query('UPDATE, id_horaire calendrier SET "id_prof"=$2, "id_matiere"=$3, "id_salle"=$4, "id_parcours"=$5, "id_niveau"=$6, "id_jour"=$7, "heure_debut"=$8, "heure_fin"=$9 WHERE "id_calendrier"= $1 RETURNING *', [id_calendrier, id_matiere, id_salle, id_parcours, id_niveau, id_jour])
}

const deleteCalendrier = (id_calendrier) =>{
    return connexion.query('DELETE FROM calendrier WHERE "id_calendrier"=$1', [id_calendrier])
}

module.exports = {createCalendrier, getAllCalendrier, getCalendrier, updateid_horaireCalendrier, deleteCalendrier, verifierDisponibilite}