"use client"
import { useState } from 'react';

const ThresholdConfig = () => {
  const [voltageThreshold, setVoltageThreshold] = useState(0);
  const [currentThreshold, setCurrentThreshold] = useState(0);
  const [frequencyThreshold, setFrequencyThreshold] = useState(0);

  const handleSave = () => {
    // Handle saving threshold configuration to your backend or state management
    console.log('Threshold Configuration Saved');
  };

  return (
    <div className="container p-4">
    <h1 className="text-2xl font-bold mb-4">Page de configuration des seuils</h1>
    <form>
      <div className="form-group">
        <label>Tension seuil :</label>
        <input
          type="number"
          value={voltageThreshold}
          
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="form-group">
        <label>Courant seuil :</label>
        <input
          type="number"
          value={currentThreshold}
          
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="form-group">
        <label>Fréquence seuil :</label>
        <input
          type="number"
          value={frequencyThreshold}
          
          className="w-full p-2 border rounded-md"
        />
      </div>
      <button
        type="button"
        onClick={handleSave}
        className="bg-blue-500 text-white p-2 px-4 rounded-md font-semibold hover:bg-blue-700"
      >
        Enregistrer
      </button>
    </form>
  </div>
  );
};

export default ThresholdConfig;
