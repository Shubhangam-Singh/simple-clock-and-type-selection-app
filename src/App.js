import React, { useState } from "react";
import VehicleSelection from "./VehicleSelection";
import Timer from "./Timer";
import "./index.css";

const App = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <VehicleSelection onSelect={setSelectedVehicle} />
      <Timer startTimer={!!selectedVehicle} />
    </div>
  );
};

export default App;
