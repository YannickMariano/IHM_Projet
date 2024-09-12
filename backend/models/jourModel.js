const pool = require('../db');

class Jour {
    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM jour ORDER BY id_jour');
        return rows;
    }

    static async getById(id) {
        const { rows } = await pool.query('SELECT * FROM jour WHERE id_jour = $1', [id]);
        if (rows.length === 0) {
            throw new Error('Jour not found');
        }
        return rows[0];
    }

    static async create(design_jour) {
        const { rows } = await pool.query('INSERT INTO jour (design_jour) VALUES ($1) RETURNING *', [design_jour]);
        return rows[0];
    }

    static async update(id, design_jour) {
        const { rows } = await pool.query('UPDATE jour SET design_jour = $1 WHERE id_jour = $2 RETURNING *', [design_jour, id]);
        if (rows.length === 0) {
            throw new Error('Jour not found');
        }
        return rows[0];
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM jour WHERE id_jour = $1 RETURNING *', [id]);
        if (rows.length === 0) {
            throw new Error('Jour not found');
        }
        return rows[0];
    }
}

module.exports = Jour;
