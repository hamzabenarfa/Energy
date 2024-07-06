"use client"
import Consomation from '@/components/consomation';
import { Button } from '@/components/ui/button';
// pages/DeviceConfig.js

import  { useState } from 'react';

const DeviceConfig = () => {
  const [deviceName, setDeviceName] = useState('');
  const [location, setLocation] = useState('');
  const [minThreshold, setMinThreshold] = useState(0);
  const [maxThreshold, setMaxThreshold] = useState(100);

  const handleSave = () => {
    const deviceConfig = {
      deviceName,
      location,
      minThreshold,
      maxThreshold,
    };

    // You can save this configuration to the server using an API call
    // For example, using the fetch API or a library like Axios
    fetch('/api/saveDeviceConfig', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deviceConfig),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Device Configuration Saved:', data);
        // Optionally, you can update the UI to show a success message or redirect to another page
      })
      .catch((error) => {
        console.error('Error saving device configuration:', error);
        // Handle the error, e.g., show an error message to the user
      });
  };

  return (
    <div className="container mt-8 md:w-1/2">
      <h1 className="text-2xl font-bold mb-4">Page de configuration des appareils</h1>
      <form >
        <div className="form-group">
          <label className="block font-semibold">Nom de l&apos;appareil :</label>
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="form-group">
          <label className="block font-semibold">Emplacement :</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="form-group">
          <label className="block font-semibold">Seuil minimum de surveillance :</label>
          <input
            type="number"
            value={minThreshold}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="form-group">
          <label className="block font-semibold">Seuil maximum de surveillance :</label>
          <input
            type="number"
            value={maxThreshold}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <Button
          type="button"
          onClick={handleSave}
          className="mt-4 w-full self-center"

        >
          Enregistrer
        </Button>
      </form>


      {/* <Consomation/>   */}
    </div>
  );
};

export default DeviceConfig;
