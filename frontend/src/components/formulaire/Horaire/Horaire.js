import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormulaireHoraire = () => {
    const [heure, set_Heure] = useState('');

  const resetData = () => {
    set_Heure('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demandez confirmation avant de soumettre
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous êtes sur le point d'ajouter une nouvelle horaire!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32c637',
      cancelButtonColor: '#ec1c24',
      confirmButtonText: 'Oui, ajoutez-la!'
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          heure: heure
        };
        resetData();
        axios
          .post("http://localhost:5000/horaire", data)
          .then(() => {
            Swal.fire('Ajouté!', 'Horaire ajouté avec succès.', 'success');

            // Ici, vous pouvez également gérer la réinitialisation du formulaire ou la mise à jour de l'état global de l'application si nécessaire
          })
          .catch(() => {
            Swal.fire('Erreur!', 'Création d\' horaire échoué.', 'error');
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
            <input type="time" className="form-control" onChange={(e) => set_Heure(e.target.value)} />
          </div>

          <button className="btn btn-primary">Valider</button>
        </form>
      </div>
    </>
  );
};

export default FormulaireHoraire;