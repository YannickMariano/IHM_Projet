// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function HeureFinCombo({ onHeureFinChange }) {
//   const [horaire, setHoraire] = useState([]);
//   const [selectedhoraire, setselectedhoraire] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/Horaire/listHoraire');
//       setHoraire(response.data); // Supposons que response.data est un tableau d'objets
//     } catch (error) {
//       console.error('Error fetching heure:', error);
//     }
//   };

//   const handleSelectChange = (event) => {
//     const newValue = event.target.value;
//     setselectedhoraire(newValue);
//     // Trouvez l'objet jour correspondant à l'ID sélectionné
//     const selectedHeureFin = horaire.find(heure => heure.horaire === newValue);
//     if (selectedHeureFin) {
//       onHeureFinChange(selectedHeureFin.id_horaire); // Envoyez l'ID du jour sélectionné
//     }
//   };

//   return (
//     <div>
//       <label htmlFor="horaire">Select une heure fin:</label>
//       <select id="horaire" value={selectedHeureFin} onChange={handleSelectChange}>
//         <option value="">Select jour</option>
//         {horaire.map((item) => (
//           <option key={item.id} value={item.heure_fin}>
//             {item.heure_fin}
//           </option>
//         ))}
//       </select>
//       {selectedHeureFin && <p>Selected matiere: {selectedhoraire}</p>}
//     </div>
//   );
// }

// export default HeureFinCombo;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HeureFinCombo({ onHeureFinChange }) {
  const [horaire, setHoraire] = useState([]);
  const [selectedHoraire, setSelectedHoraire] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/horaire');
        setHoraire(response.data); // Supposons que response.data est un tableau d'objets
      } catch (error) {
        console.error('Error fetching heure:', error);
      }
    };
    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedHoraire(newValue);
    const selectedHeureFin = horaire.find(heure => heure.heure_fin === newValue);
    if (selectedHeureFin) {
      onHeureFinChange(selectedHeureFin.id_horaire); // Envoyez l'ID de l'heure de fin sélectionnée
    }
  };

  return (
    <div>
      <label htmlFor="horaire">Select une heure fin:</label>
      <select id="horaire" value={selectedHoraire} onChange={handleSelectChange}>
        <option value="">Select jour</option>
        {horaire.map((item) => (
          <option key={item.id} value={item.heure_fin}>
            {item.heure_fin}
          </option>
        ))}
      </select>
      {selectedHoraire && <p>Selected heure fin: {selectedHoraire}</p>}
    </div>
  );
}

export default HeureFinCombo;
