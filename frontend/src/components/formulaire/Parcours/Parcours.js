import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormulaireParcours = () => {
  const [designparcours, setDesignparcours] = useState('');
  const [description, setDescription] = useState('');


  const resetData = () => {
    setDesignparcours('');
    setDescription('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demandez confirmation avant de soumettre
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous êtes sur le point d'ajouter une nouvelle salle!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32c637',
      cancelButtonColor: '#ec1c24',
      confirmButtonText: 'Oui, ajoutez-la!'
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          designparcours: designparcours,
          description: description
        };
        resetData();
        axios
          .post('http://localhost:5000/parcour', data)
          .then(() => {
            Swal.fire('Ajouté!', 'La salle a été ajoutée avec succès.', 'success');

            // Ici, vous pouvez également gérer la réinitialisation du formulaire ou la mise à jour de l'état global de l'application si nécessaire
          })
          .catch(() => {
            Swal.fire('Erreur!', 'La création de salle a échoué.', 'error');
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
            <input type="text" className="form-control" onChange={(e) => setDesignparcours(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Description
            </label>
            <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} />
          </div>

          <button className="btn btn-primary">Valider</button>
        </form>
      </div>
    </>
  );
};

export default FormulaireParcours;
