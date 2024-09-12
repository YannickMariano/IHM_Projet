const pool = require('../db');

class Horaire {
    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM horaire ORDER BY id_horaire');
        return rows;
    }

    static async getById(id) {
        const { rows } = await pool.query('SELECT * FROM horaire WHERE id_horaire = $1', [id]);
        if (rows.length === 0) {
            throw new Error('Horaire not found');
        }
        return rows[0];
    }

    static async getByHeure(heure) {
        const { rows } = await connexion.query('SELECT * FROM horaire WHERE heure = $1', [heure]);
        if (rows.length === 0) {
            throw new Error('Horaire not found');
        }
        return rows[0];
    }

    static async create(heure_debut) {
        const { rows } = await pool.query('INSERT INTO horaire (heure_debut) VALUES ($1) RETURNING *', [heure_debut]);
        return rows[0];
    }

    static async update(heure_debut, id) {
        const { rows } = await pool.query('UPDATE horaire SET heure_debut = $1 WHERE id_horaire = $2 RETURNING *', [heure_debut, id]);
        if (rows.length === 0) {
            throw new Error('Horaire not found');
        }
        return rows[0];
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM horaire WHERE id_horaire = $1 RETURNING *', [id]);
        if (rows.length === 0) {
            throw new Error('Horaire not found');
        }
        return rows[0];
    }
}

module.exports = Horaire;
