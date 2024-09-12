// import { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import ProfCombo from 'components/combobox/profCombo';

// const FormulaireMatiere = () => {
//   const [designmat, setDesignmat] = useState('');
//   const [prof, setProf] = useState('');

//   const resetData = () => {
//     setDesignmat('');
//     setProf('')
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Demandez confirmation avant de soumettre
//     Swal.fire({
//       title: 'Êtes-vous sûr?',
//       text: "Vous êtes sur le point d'ajouter une nouvelle salle!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#32c637',
//       cancelButtonColor: '#ec1c24',
//       confirmButtonText: 'Oui, ajoutez-la!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const data = {
//           designmat: designmat, 
//           id_prof: prof
//         };
//         resetData();
//         axios
//           .post('http://localhost:3000/Matiere/createMatiere', data)
//           .then(() => {
//             Swal.fire('Ajouté!', 'La salle a été ajoutée avec succès.', 'success');

//             // Ici, vous pouvez également gérer la réinitialisation du formulaire ou la mise à jour de l'état global de l'application si nécessaire
//           })
//           .catch(() => {
//             Swal.fire('Erreur!', 'La création de salle a échoué.', 'error');
//           });
//       }
//     });
//   };

//   return (
//     <>
//       <div>
//         {/* <h3>Ajouter un nouveau client</h3> */}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Matière
//             </label>
//             <input type="text" className="form-control" onChange={(e) => setDesignmat(e.target.value)} />
//           </div>

//           <div className="mb-3">
//           <ProfCombo onProfChange={(selectedProf) => setProf({ id_prof: selectedProf })} />
//           </div>

//           <button className="btn btn-primary">Valider</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default FormulaireMatiere;

import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormulaireMatiere = () => {
  const [designmat, setDesignmat] = useState('');
  const [prof, setProf] = useState('');
  const [nomProf, setNomProf] = useState([]);
  const [selectedIdProf, setSelectedIdProf] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/prof');
      setNomProf(response.data); // Supposons que response.data est un tableau d'objets
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedIdProf(newValue);
    setProf(newValue); // Stocker l'ID du professeur, qui doit être un entier
  };

  const resetData = () => {
    setDesignmat('');
    setProf('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      designmat: designmat,
      id_prof:parseInt(prof, 10) // Convertir en entier pour éviter les erreurs de type
    };

    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous êtes sur le point d'ajouter une nouvelle matière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32c637',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, ajoutez-la!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('http://calhost:lo5000/matiere', data)
          .then(() => {
            Swal.fire('Ajouté!', 'La matière a été ajoutée avec succès.', 'success');
            resetData();
          })
          .catch((error) => {
            console.error('Failed to create matiere:', error);
            Swal.fire('Erreur!', 'La création de la matière a échoué.', 'error');
          });
      }
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="designmat" className="form-label">Matière</label>
            <input
              type="text"
              className="form-control"
              id="designmat"
              value={designmat}
              onChange={(e) => setDesignmat(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="profSelect">Sélectionnez un professeur:</label>
            <select
              id="profSelect"
              className="form-control"
              value={selectedIdProf}
              onChange={handleSelectChange}
            >
              <option value="">Sélectionnez un professeur</option>
              {nomProf.map((item) => (
                <option key={item.id_prof} value={item.id_prof}>
                  {item.nom}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Valider</button>
        </form>
      </div>
    </>
  );
};

export default FormulaireMatiere;

