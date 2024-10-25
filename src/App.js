import React, { useState, useEffect } from "react";
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
        <h1 className="popup-title">
          LinkedIn Auto Connect
        </h1>
        <img src={SettingIcon}></img>
      </div>

      <p className="count-text">
        <p className="text-sm">
          Invitations Sent
        </p>
        <div className="count-container">
          <h3 className="count">{count}</h3>
        </div>
      </p>

      {!isSending ? (
        <button
          className="btn"
          onClick={handleStart}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Start Sending"}
        </button>
      ) : (
        <button
          className="btn"
          onClick={handleStop}
          disabled={!isSending}
        >
          Stop Sending
        </button>
      )}
    </div>
  );
}

export default App;
