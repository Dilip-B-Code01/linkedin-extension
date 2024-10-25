

# LinkedIn Auto Connector - Chrome Extension

This Chrome extension, built with React, simplifies the process of sending LinkedIn connection requests from the "My Network" page. It automatically sends requests individually, showing the total number sent in real-time within the extension popup. Users can control the automation directly from the popup, choosing to start or stop at any point.

## Features

- Automates LinkedIn connection requests.
- Displays the cumulative count of sent requests in the popup.
- Provides on-demand start and stop options for user control.

## Technology Stack

- **React**: Builds the extension's user interface.
- **Chrome Extensions API**: Manages background scripts, content scripts, and messaging within the extension.

## Installation

### 1. Clone the Project

```bash
git clone https://github.com/Dilip-B-Code01/linkedin-extension.git
cd linkedin-extension
npm install
npm run build
```

### 2. Install the Extension in Chrome

- Open `chrome://extensions/` in Chrome.
- Enable "Developer mode" using the toggle switch in the upper right corner.
- Click "Load unpacked" and select the extension's `build` folder.

### 3. Test the Extension

- Open LinkedIn and navigate to the "My Network" page.
- Click on the extension icon to bring up the popup.
- Press "Start Sending Requests" to initiate the automation.
- Click "Stop Sending Requests" at any time to pause the process.

--- 

