const db = require('./db')
const express = require('express');
const bodyParser = require('body-parser')

const matiereRoute = require('./routes/matiereRoute');
const niveauRoute = require('./routes/niveauRoute');
const parcourRoute = require('./routes/parcourRoute');
const jourRoute = require('./routes/jourRoute');
const horaireRoute = require('./routes/horaireRoute');
const profRoute = require('./routes/profRoute');
const salleRoute = require('./routes/salleRoute');
const organiserRoute = require('./routes/organiserRoute');
const loginRoute = require('./routes/loginRoute');
const eleveRoute = require('./routes/eleveRoute');

const cors = require('cors')

const app = express();
const port = 5000;

db.connect()
.then(() => console.log('Connexion à Postgres Reussi'))
.catch((err) => console.log('Connexion à Postgres Echouée !', err))

// MiddleWare
app.use(bodyParser.json());
app.use(cors())

// Routes
app.use('/login/', loginRoute);
app.use('/eleve/', eleveRoute);
app.use('/matiere/', matiereRoute);
app.use('/niveau/', niveauRoute);
app.use('/jour/', jourRoute);
app.use('/horaire/', horaireRoute);
app.use('/parcour/', parcourRoute);
app.use('/prof', profRoute);
app.use('/salle', salleRoute);
app.use('/organiser', organiserRoute);

// Start Server
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})

