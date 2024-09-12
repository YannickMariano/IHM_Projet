const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/loginModel');

exports.signup = async (req, res) => {
    try {
        const { username, mdp } = req.body;
        const hash = await bcrypt.hash(mdp, 10); // Hache le mdp
        const { rows } = await UserModel.createUser(username, hash); // Utilise le hash
        if (rows.length > 0) {
            res.status(201).json({ message: 'Utilisateur créé !' });
            console.log(rows)
        } else {
            res.status(400).json({ error: 'Erreur de création de l’utilisateur' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erreur de hachage du mot de passe ou de création de l’utilisateur', error });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, mdp } = req.body;
        const { rows } = await UserModel.getUser(username); // S'assurer que cette méthode est bien définie et fonctionnelle
        if (rows.length === 0) {
            return res.status(401).json({ message: "Pseudo ou mot de passe incorrect" });
        }
        const user = rows[0];
        const valid = await bcrypt.compare(mdp, user.mdp);
        if (!valid) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }
        const token = jwt.sign({ user_id: user.id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' });
        res.status(200).json({
            user_id: user.user_id,
            token: token
        });
    }
    //  catch (error) {
    //     res.status(500).json({ error: 'Erreur lors de la connexion', error });
    // }
     catch (error) {
        console.error(error); // Ajoute cela pour voir l'erreur dans les logs du serveur
        res.status(500).json({ error: 'Erreur lors de la vérification du mot de passe', details: error.toString() });
    }
    
};