
// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import HeureDebutCombo from 'components/combobox/heureDebut';
// import HeureFinCombo from 'components/combobox/horaireFinCombo';
// import MatiereCombo from 'components/combobox/matiereCombo';
// import NiveauCombo from 'components/combobox/niveauCombo';
// import ParcoursCombo from 'components/combobox/parcoursCombo';
// import SalleCombo from 'components/combobox/salleCombo';

// const FormulaireCalendrier = ({ onFormSubmit }) => {
//   const [matiere, setMatiere] = useState([]);
//   const [salle, setSalle] = useState([]);
//   const [niveau, setNiveau] = useState([]);
//   const [parcours, setParcours] = useState([]);
//   const [date, setDate] = useState('');
//   const [horaire, setHoraire] = useState([]);

//   const resetData = () => {
//     setDate('');
//     setMatiere([]);
//     setNiveau([]);
//     setParcours([]);
//     setSalle([]);
//     setHoraire([]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     Swal.fire({
//       title: 'Êtes-vous sûr?',
//       text: "Vous êtes sur le point d'ajouter un nouveau jour!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#32c637',
//       cancelButtonColor: '#ec1c24',
//       confirmButtonText: 'Oui, ajoutez-la!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const data = {
//           id_matiere: matiere.id_matiere,
//           id_salle: salle.id_salle,
//           id_parcours: parcours.id_parcours,
//           id_niveau: niveau.id_niveau,
//           date: date,
//           id_horaire: horaire.id_horaire
//         };
//         onFormSubmit(data); // Send data to parent
//         resetData();

//         axios.post('http://localhost:5000/organiser/', data)
//           .then(() => {
//             Swal.fire('Ajouté!', 'Jour ajouté avec succès.', 'success');
//           })
//           .catch(() => {
//             Swal.fire('Erreur!', 'Création de jour échoué.', 'error');
//           });
//       }
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Date</label>
//         <input type="date" className="form-control" onChange={(e) => setDate(e.target.value)} />
//       </div>
//       <div>
//         <HeureDebutCombo onHeureDebutChange={(selectedHeureDebut) => setHoraire({ id_horaire: selectedHeureDebut })} />
//         <HeureFinCombo onHeureFinChange={(selectedHeureFin) => setHoraire({ id_horaire: selectedHeureFin })} />
//         <MatiereCombo onMatiereChange={(selectedMatiere) => setMatiere({ id_matiere: selectedMatiere })} />
//         <SalleCombo onSalleChange={(selectedSalle) => setSalle({ id_salle: selectedSalle })} />
//         <ParcoursCombo onParcoursChange={(selectedParcours) => setParcours({ id_parcours: selectedParcours })} />
//         <NiveauCombo onNiveauChange={(selectedNiveau) => setNiveau({ id_niveau: selectedNiveau })} />
//       </div>
//       <button type="submit" className="btn btn-primary">Valider</button>
//     </form>
//   );
// };

// export default FormulaireCalendrier;

