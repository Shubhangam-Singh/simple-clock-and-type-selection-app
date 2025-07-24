import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Initial time in seconds
  const [isRunning, setIsRunning] = useState(true); // Timer state

  useEffect(() => {
    if (timeLeft > 0 && isRunning) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isRunning]);

  // Function to add 1 minute
  const addMinute = () => setTimeLeft((prevTime) => prevTime + 60);

  // Function to stop the timer and reset
  const stopTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    alert("Parking session ended! Timer reset to 00:00."); // Popup confirmation
  };

  // Convert seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Booking Details</h2>
      <div style={styles.slotTag}>Slot 7</div>

      <div style={styles.timeRemaining}>
        <span style={styles.clockIcon}>🕒</span> Time Remaining
      </div>

      <div style={styles.timerContainer}>
        <div style={styles.progressBarOuter}>
          <div
            style={{
              ...styles.progressBarInner,
              width: `${(timeLeft / 60) * 100}%`, // Dynamically update width
            }}
          />
        </div>
        <div style={styles.timerText}>{formatTime(timeLeft)}</div>
      </div>

      <button onClick={addMinute} style={styles.extendButton}>
        Extend Time (+1 min)
      </button>
      <button onClick={stopTimer} style={styles.endButton}>
        End Parking
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    backgroundColor: "#1a1d2b",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "bold",
  },
  slotTag: {
    backgroundColor: "#2f3545",
    padding: "5px 10px",
    borderRadius: "15px",
    display: "inline-block",
    fontSize: "14px",
    marginTop: "5px",
  },
  timeRemaining: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    fontSize: "14px",
    color: "#aaa",
  },
  clockIcon: {
    marginRight: "5px",
  },
  timerContainer: {
    margin: "10px 0",
    textAlign: "center",
    position: "relative",
  },
  progressBarOuter: {
    width: "100%",
    height: "40px",
    backgroundColor: "#2f3545",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
  },
  progressBarInner: {
    height: "100%",
    backgroundColor: "#808080",
    transition: "width 1s linear",
  },
  timerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "22px",
    fontWeight: "bold",
    color: "white",
  },
  extendButton: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  endButton: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#d11a2a",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default CountdownTimer;
