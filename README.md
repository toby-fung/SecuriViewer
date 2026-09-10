# SecuriViewer
web/mobile app for viewing camera recordings through ONVIF/RTSP

## React Native and Expo frontend
1. cd into subfolder

   ```bash
   cd securiviewer
   ```
   
2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
   npx expo start
   ```

MediaMTX connects to NVR feed and converts RTSP to HLS/WebRTC and serve to expo app  
cuz react native can't natively play RTSP stream  
this is plug and play so should be simple

## FastAPI Python backend
handles user auth, db stuff

inspo: https://github.com/pinheiroalexandre2/camfoundry