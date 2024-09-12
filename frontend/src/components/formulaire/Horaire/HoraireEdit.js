import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const HoraireEdit = ({ item, onSubmit }) => {
  const [heure, setHeure] = useState(item.heure);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Utilisez SweetAlert2 pour la confirmation
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Confirmez-vous la modification des informations de cette horaire?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32c637',
      cancelButtonColor: '#ec1c24',
      confirmButtonText: 'Oui, modifiez-la!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // L'utilisateur a confirmé la modification
        const updatedItem = { ...item, heure};

        axios
          .put(`http://localhost:5000/horaire/${item.id_horaire}`, updatedItem)
          .then(() => {
            
            Swal.fire('Modifié!', 'Les informations de l\'horaire ont été modifiées avec succès.', 'success');
            onSubmit(updatedItem, true); // Informez le composant parent de la mise à jour
          })
          .catch(() => {
            
            Swal.fire('Erreur!', 'La modification a échoué. Veuillez réessayer.', 'error');
          });
      }
    });
  };

  return (
    <>
      <div>
        {/* <h3>Ajouter un nouveau client</h3> */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Heure Debut
            </label>
            <input type="time" className="form-control" value={heure} onChange={(e) => setHeure(e.target.value)} />
          </div>

          <button className="btn btn-primary">Mettre à jour</button>
        </form>
      </div>
    </>
  );
};

export default HoraireEdit;