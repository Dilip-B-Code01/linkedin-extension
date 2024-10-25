import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Popup.css";
import SettingIcon from "./assests/settingIcon.svg";

function App() {
  const [count, setCount] = useState(0);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((request) => {
      if (request.action === "updateCount") {
        setCount(request.count);
      }
    });
  }, []);

  const handleStart = () => {
    setIsSending(true);
    chrome.runtime.sendMessage({ action: "start" });
  };

  const handleStop = () => {
    setIsSending(false);
    chrome.runtime.sendMessage({ action: "stop" });
  };

  return (
    <div className="popup-container">
      <div className="headerContainer">
        <h1 className="popup-title">LinkedIn Auto Connect</h1>
        <img src={SettingIcon} alt="Settings Icon" />
      </div>

      <div className="progress-container">
        <p className="text-sm">Invitations Sent</p>
        <CircularProgressbar
          value={count}
          text={`${count}`}
          styles={buildStyles({
            pathColor: `#40a9ff`,
            textColor: "#333",
          })}
        />
      </div>

      {!isSending ? (
        <button className="btn" onClick={handleStart} disabled={isSending}>
          {isSending ? "Sending..." : "Start Sending"}
        </button>
      ) : (
        <button className="btn" onClick={handleStop} disabled={!isSending}>
          Stop Sending
        </button>
      )}
    </div>
  );
}

export default App;
