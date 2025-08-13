import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AddNote from './AddNote.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AddNote />
  </React.StrictMode>
);