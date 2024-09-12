import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import MatiereCombo from 'components/combobox/matiereCombo';
import NiveauCombo from 'components/combobox/niveauCombo';
import ParcoursCombo from 'components/combobox/parcoursCombo';
import SalleCombo from 'components/combobox/salleCombo';
import HeureCombo from 'components/combobox/heureDebut';

// Ajoutez `props` ici ou déstructurez directement pour obtenir `onFormSubmit`
const FormulaireCalendrier = ({ selectedDate, selectedHoraire, isDefaultValueGiven, onSubmit }) => {
  const [matiere, setMatiere] = useState('');
  const [salle, setSalle] = useState('');
  const [niveau, setNiveau] = useState('');
  const [parcours, setParcours] = useState('');
  const [date, setDate] = useState(selectedDate);
  const [horaire, setHoraire] = useState(selectedHoraire);

  const resetData = () => {
    setDate('');
    setMatiere('');
    setNiveau('');
    setParcours('');
    setSalle('');
    setHoraire('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check for blank fields
    if (!matiere || !salle || !niveau || !parcours || !date || !horaire) {
      // Display error message for blank fields
      Swal.fire('Erreur!', 'Veuillez remplir tous les champs du formulaire.', 'error');
      return;
    }
  
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous êtes sur le point d'ajouter un nouvelle élément!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32c637',
      cancelButtonColor: '#ec1c24',
      confirmButtonText: 'Oui, ajoutez-la!'
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          id_matiere: matiere.id_matiere,
          id_salle: salle.id_salle,
          id_parcours: parcours.id_parcours,
          id_niveau: niveau.id_niveau,
          date: date,
          id_horaire: horaire
        };
  
        onSubmit(data);
        resetData();
  
        axios
          .post('http://localhost:5000/organiser', data)
          .then(() => {
            Swal.fire('Ajouté!', "Création d'emploi de temps réussi.", 'success');
          })
          .catch(() => {
            Swal.fire('Erreur!', 'Ce créneau est déja pris.', 'error');
          });
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Date
          </label>
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} disabled={isDefaultValueGiven} />
        </div>
        <div>
          <HeureCombo onHeureChange={(selectedHeure) => setHoraire(selectedHeure)} defaultValue={horaire} isDefaultValueGiven={isDefaultValueGiven}/>
        </div>
        <div className="mb-3">
          <MatiereCombo onMatiereChange={(selectedMatiere) => setMatiere({ id_matiere: selectedMatiere })} />
        </div>
        <div className="mb-3">
          <SalleCombo onSalleChange={(selectedSalle) => setSalle({ id_salle: selectedSalle })} />
        </div>
        <div>
          <ParcoursCombo onParcoursChange={(selectedParcours) => setParcours({ id_parcours: selectedParcours })} />
        </div>
        <div className="mb-3">
          <NiveauCombo onNiveauChange={(selectedNiveau) => setNiveau({ id_niveau: selectedNiveau })} />
        </div>
        <button className="btn btn-primary">Valider</button>
      </form>
    </div>
  );
};

export default FormulaireCalendrier;
