import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import MatiereCombo from 'components/combobox/matiereCombo';
import NiveauCombo from 'components/combobox/niveauCombo';
import ParcoursCombo from 'components/combobox/parcoursCombo';
import SalleCombo from 'components/combobox/salleCombo';
import HeureCombo from 'components/combobox/heureDebut';

// Ajoutez `props` ici ou déstructurez directement pour obtenir `onFormSubmit`
const CalendrierEdit = ({ item, id_edt, onSubmit }) => {
  const [matiere, setMatiere] = useState(item.designmat);
  const [salle, setSalle] = useState(item.designation);
  const [niveau, setNiveau] = useState(item.designniveau);
  const [parcours, setParcours] = useState(item.designparcours);
  const [date, setDate] = useState(item.date);
  const [horaire, setHoraire] = useState(item.heure);

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

    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Confirmez-vous la modification des informations de cette edt",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32c637',
      cancelButtonColor: '#ec1c24',
      confirmButtonText: 'Oui, ajoutez-la!'
    }).then((result) => {
    //   if (result.isConfirmed) {
    //     const data = {
    //       id_matiere: matiere.id_matiere,
    //       id_salle: salle.id_salle,
    //       id_parcours: parcours.id_parcours,
    //       id_niveau: niveau.id_niveau,
    //       date: date,
    //       id_horaire: horaire
    //     };

    //     // Utilisez onFormSubmit qui a été extrait des props
    //     onSubmit(data);
    //     resetData();

    //     axios
    //       .post('http://localhost:3000/Calendrier/createCalendrier/', data)
    //       .then(() => {
    //         Swal.fire('Ajouté!', "Création d'emploi de temps réussi.", 'success');
    //       })
    //       .catch(() => {
    //         Swal.fire('Erreur!', 'Ce créneau est déja pris.', 'error');
    //       });
    //   }

    if (result.isConfirmed) {
        // L'utilisateur a confirmé la modification
        const updatedItem = {
          id_matiere: matiere.id_matiere,
          id_salle: salle.id_salle,
          id_parcours: parcours.id_parcours,
          id_niveau: niveau.id_niveau,
          date: date,
          id_horaire: horaire,
        };

        axios
          .patch(`http://localhost:5000/organiser/${id_edt}`, updatedItem)
          .then(() => {
            
            Swal.fire('Modifié!', 'Les informations de l\'edt ont été modifiées avec succès.', 'success');
            onSubmit(updatedItem, true); // Informez le composant parent de la mise à jour
            resetData()
          })
          .catch(() => {
            
            Swal.fire('Erreur!', 'La modification a échoué. Veuillez réessayer.', 'error');
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
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)}  />
        </div>
        <div>
          <HeureCombo onHeureChange={(selectedHeure) => setHoraire(selectedHeure)} defaultValue={horaire}/>
        </div>
        {/* <div>
          <HeureFinCombo onHeureFinChange={(selectedHeureFin) => setHoraire({ id_horaire: selectedHeureFin })} />
        </div> */}
        <div className="mb-3">
          <MatiereCombo onMatiereChange={(selectedMatiere) => setMatiere({ id_matiere: selectedMatiere })} defaultValue={matiere}/>
        </div>
        <div className="mb-3">
          <SalleCombo onSalleChange={(selectedSalle) => setSalle({ id_salle: selectedSalle })} defaultValue={salle}/>
        </div>
        <div>
          <ParcoursCombo onParcoursChange={(selectedParcours) => setParcours({ id_parcours: selectedParcours })} defaultValue={parcours} />
        </div>
        <div className="mb-3">
          <NiveauCombo onNiveauChange={(selectedNiveau) => setNiveau({ id_niveau: selectedNiveau })} defaultValue={niveau} />
        </div>
        <button className="btn btn-primary">Valider</button>
      </form>
    </div>
  );
};

export default CalendrierEdit;
