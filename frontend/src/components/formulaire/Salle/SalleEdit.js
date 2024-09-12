import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const SalleEdit = ({ item, onSubmit }) => {
  const [designation, setDesignation] = useState(item.designation);
  const [estOccuper, setEstOccuper] = useState(item.occupation);

  const handleCheckboxChange = (e) => {
    // Mise à jour de l'état avec la nouvelle valeur de la case à cocher
    setEstOccuper(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Utilisez SweetAlert2 pour la confirmation
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Confirmez-vous la modification des informations de cette salle?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32c637',
      cancelButtonColor: '#ec1c24',
      confirmButtonText: 'Oui, modifiez-la!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // L'utilisateur a confirmé la modification
        const updatedItem = { ...item, designation, estOccuper };

        axios
          .patch(`http://localhost:5000/salle/${item.id_salle}`, updatedItem)
          .then(() => {
            Swal.fire('Modifié!', 'Les informations de la salle ont été modifiées avec succès.', 'success');
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
              Salle
            </label>
            <input type="text" className="form-control" value={designation} onChange={(e) => setDesignation(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Occupé
            </label>
            <input
              type="checkbox"
              checked={estOccuper} // L'état actuel contrôle si la case est cochée
              onChange={handleCheckboxChange} // Met à jour l'état quand l'utilisateur coche/décoche
            />
          </div>

          <button className="btn btn-primary">Mettre à jour</button>
        </form>
      </div>
    </>
  );
};

export default SalleEdit;
