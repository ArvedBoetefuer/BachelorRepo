import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import MainSurvey from './pages/MainSurvey'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './fonts/myriad-pro-cufonfonts-webfont/MYRIADPRO-REGULAR.woff'
import StartScreen from './pages/StartScreen';
import Audio from './pages/Audio';
import AudioSurvey1 from './pages/AudioSurvey1';
import AudioSurvey2 from './pages/AudioSurvey2';
import AudioSurvey3 from './pages/AudioSurvey3';
import AudioSurvey4 from './pages/AudioSurvey4';
import AudioSurvey5 from './pages/AudioSurvey5';
import EndCard from './pages/EndCard';
import AudioTest1 from './pages/AudioTest1';
import AudioTest2 from './pages/AudioTest2';
import AudioTest3 from './pages/AudioTest3';
import AudioTest4 from './pages/AudioTest4';
import AudioTest5 from './pages/AudioTest5';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "mainSurvey",
    element: <MainSurvey/>,
  },
  {
    path: "startScreen",
    element:<StartScreen/>
  },
  {
    path: "audio",
    element: <Audio/>
  },
  {
    path: "audioTest1",
    element: <AudioTest1/>
  },
  {
    path: "audioTest2",
    element: <AudioTest2/>
  },
  {
    path: "audioTest3",
    element: <AudioTest3/>
  },
  {
    path: "audioTest4",
    element: <AudioTest4/>
  },
  {
    path: "audioTest5",
    element: <AudioTest5/>
  },
  {
    path: "audioSurvey1",
    element: <AudioSurvey1/>
  },
  {
    path: "audioSurvey2",
    element: <AudioSurvey2/>
  },
  {
    path: "audioSurvey3",
    element: <AudioSurvey3/>
  },
  {
    path: "audioSurvey4",
    element: <AudioSurvey4/>
  },
  {
    path: "audioSurvey5",
    element: <AudioSurvey5/>
  },
  {
    path: "end",
    element: <EndCard/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
