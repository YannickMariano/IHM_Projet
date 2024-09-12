// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const MatiereEdit = ({ item, onSubmit }) => {
//   const [designmat, setDesignmat] = useState(item.designmat);
//   const [prof, setProf] = useState(item.id_prof);
//   const [nomProf, setNomProf] = useState([]);
//   const [selectedIdProf, setSelectedIdProf] = useState(item.id_prof);


//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/Professeur/listProf');
//       setNomProf(response.data); // Supposons que response.data est un tableau d'objets
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleSelectChange = (event) => {
//     const newValue = event.target.value;
//     setSelectedIdProf(newValue);
//     setProf(newValue); // Stocker l'ID du professeur, qui doit être un entier
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Utilisez SweetAlert2 pour la confirmation
//     Swal.fire({
//       title: 'Êtes-vous sûr?',
//       text: 'Confirmez-vous la modification des informations de cette salle?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#32c637',
//       cancelButtonColor: '#ec1c24',
//       confirmButtonText: 'Oui, modifiez-la!',
//       cancelButtonText: 'Annuler'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // L'utilisateur a confirmé la modification
//         const updatedItem = { ...item, designmat, prof};

//         axios
//           .patch(`http://127.0.0.1:3000/Matiere/updateMatiere/${item.id_matiere}`, updatedItem)
//           .then(() => {
//             Swal.fire('Modifié!', 'Les informations de la salle ont été modifiées avec succès.', 'success');
//             onSubmit(updatedItem, true); // Informez le composant parent de la mise à jour
//           })
//           .catch(() => {
//             Swal.fire('Erreur!', 'La modification a échoué. Veuillez réessayer.', 'error');
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
//             <input type="text" className="form-control" value={designmat} onChange={(e) => setDesignmat(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="profSelect">Sélectionnez un professeur:</label>
//             <select
//               id="profSelect"
//               className="form-control"
//               value={selectedIdProf}
//               onChange={handleSelectChange}
//             >
//               <option value="">Sélectionnez un professeur</option>
//               {nomProf.map((item) => (
//                 <option key={item.id_prof} value={item.id_prof}>
//                   {item.nom}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button className="btn btn-primary">Mettre à jour</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default MatiereEdit;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const MatiereEdit = ({ item, onSubmit }) => {
  const [designmat, setDesignmat] = useState(item.designmat);
  const [selectedIdProf, setSelectedIdProf] = useState(item.id_prof);
  const [nomProf, setNomProf] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/prof');
      setNomProf(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedIdProf(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Confirmez-vous la modification des informations de cette matière?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32c637',
      cancelButtonColor: '#ec1c24',
      confirmButtonText: 'Oui, modifiez-la!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedItem = { ...item, designmat, id_prof: selectedIdProf };

        axios.put(`http://localhost:5000/matiere/${item.id_matiere}`, updatedItem)
          .then(() => {
            Swal.fire('Modifié!', 'Les informations de la matière ont été modifiées avec succès.', 'success');
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
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Matière
            </label>
            <input type="text" className="form-control" value={designmat} onChange={(e) => setDesignmat(e.target.value)} />
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
              {nomProf.map((prof) => (
                <option key={prof.id_prof} value={prof.id_prof}>
                  {prof.nom}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-primary">Mettre à jour</button>
        </form>
      </div>
    </>
  );
};

export default MatiereEdit;
