"use client"
import { useState } from "react";
import dynamic from 'next/dynamic'; 
import Alert from "./alert";
import LampStatus from "./lamp-status";
import {ModeOfOperation} from "./mode-of-operation"; 

const DynamicMap = dynamic(() => import("./map"), {
  ssr: false,
});

export const Dashboard = () => {
  const [coords, setCoords] = useState({
    latitude: 36.8065,
    longitude: 10.1815,
  });

  return (
    <main>
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-1 min-h-screen w-30 ">
        <LampStatus />
        <Alert />
        <ModeOfOperation />
      </div>
      <div className="col-span-2 min-h-screen mr-2">
      <DynamicMap coords={coords} />
      </div>
    </div>
  </main>
  );
};
