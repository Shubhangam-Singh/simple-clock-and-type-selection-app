import React, { useState } from "react";

const VehicleSelection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isEV, setIsEV] = useState(false);

  const vehicles = ["2-Wheeler", "3-Wheeler", "4-Wheeler", "Commercial"];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Select Your Vehicle</h2>

      <div style={styles.vehicleGrid}>
        {vehicles.map((vehicle) => (
          <button
            key={vehicle}
            style={{
              ...styles.vehicleButton,
              backgroundColor: selectedVehicle === vehicle ? "#555" : "#222",
            }}
            onClick={() => setSelectedVehicle(vehicle)}
          >
            {vehicle}
          </button>
        ))}
      </div>

      <div style={styles.evToggle}>
        <label>EV?</label>
        <input type="checkbox" checked={isEV} onChange={() => setIsEV(!isEV)} />
      </div>

      <button
        style={{
          ...styles.proceedButton,
          backgroundColor: selectedVehicle ? "green" : "gray",
          cursor: selectedVehicle ? "pointer" : "not-allowed",
        }}
        disabled={!selectedVehicle}
        onClick={() =>
          alert(`Proceeding with ${selectedVehicle} ${isEV ? "(EV)" : ""}`)
        }
      >
        Proceed to Dashboard
      </button>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#121212",
    color: "white",
  },
  heading: {
    marginBottom: "20px",
  },
  vehicleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
    marginBottom: "20px",
  },
  vehicleButton: {
    padding: "15px",
    borderRadius: "8px",
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    width: "120px",
  },
  evToggle: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  proceedButton: {
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    color: "white",
    fontSize: "16px",
  },
};

export default VehicleSelection;
