import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ParcoursEdit = ({ item, onSubmit }) => {
  const [designparcours, setDesignparcours] = useState(item.designparcours);
  const [description, setDescription] = useState(item.description);

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
        const updatedItem = { ...item, designparcours, description};

        axios
          .patch(`http://localhost:5000/parcour/${item.id_parcours}`, updatedItem)
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
              Parcours
            </label>
            <input type="text" className="form-control" value={designparcours} onChange={(e) => setDesignparcours(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Description
            </label>
            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <button className="btn btn-primary">Mettre à jour</button>
        </form>
      </div>
    </>
  );
};

export default ParcoursEdit;
