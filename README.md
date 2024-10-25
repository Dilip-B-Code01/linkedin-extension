## LinkedIn Connection Automation - Chrome Extension

This Chrome extension, developed with React, streamlines the process of sending LinkedIn connection requests from the "My Network" section. It automatically sends requests one at a time, with the popup displaying the current count of sent requests. Users can control the process by starting or stopping the automation through the popup interface.

### Key Features

- Automates the process of sending connection requests on LinkedIn.
- Shows the total number of sent requests in the extension popup.
- Allows users to start or stop the request-sending process at any time.

### Technology Stack

- **React**: Used for creating the user interface of the extension.
- **Chrome Extensions API**: Handles background scripts, content scripts, and communication within the extension.

## Installation

### 1. Clone the Repository

```bash
git clone  https://github.com/dipakdade92/linkedin-chrome-extention.git
cd linkedin-connection-automation
npm install
npm run build
```

### Steps to Run the Extension in Chrome

Load the Extension:

- Open Chrome and go to `chrome://extensions/`.
- Enable "Developer mode" by toggling the switch in the top right corner.
- Click "Load unpacked" and select the build folder of your React app.

Test the Extension:

- Open LinkedIn and navigate to the "My Network" section.
- Click the extension icon to open the popup.
- Press the "Start Sending Requests" button to begin sending connection requests.
- Use the "Stop Sending Requests" button to stop the process whenever needed.
