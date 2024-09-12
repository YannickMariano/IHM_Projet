import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HeureCombo({ onHeureChange, isDefaultValueGiven, defaultValue }) {
  const [horaire, setHoraire] = useState([]);
  const [selectedheure, setSelectedheure] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (defaultValue) {
      const foundHeure = horaire.find(heure => heure.id_horaire === defaultValue);
      if (foundHeure) {
        setSelectedheure(foundHeure.heure);
      }
    }
  }, [defaultValue, horaire]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/horaire');
      setHoraire(response.data); // Assuming response.data is an array of objects
    } catch (error) {
      console.error('Error fetching heure:', error);
    }
  };

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedheure(newValue);
    // Find the selected heure object corresponding to the selected value
    const selectedHeure = horaire.find(heure => heure.heure === newValue);
    if (selectedHeure) {
      onHeureChange(selectedHeure.id_horaire); // Send the ID of the selected heure
    }
  };

  return (
    <div>
      <label htmlFor="heure">Choose an hour:</label>
      <select id="heure" value={selectedheure} onChange={handleSelectChange} disabled={isDefaultValueGiven}>
        <option value="" hidden>Choose an hour</option>
        {horaire.map((item) => (
          <option key={item.id_horaire} value={item.heure}>
            {item.heure}
          </option>
        ))}
      </select>
      {selectedheure && <p>Selected hour: {selectedheure}</p>}
    </div>
  );
}

export default HeureCombo;
