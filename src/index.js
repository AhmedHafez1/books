import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BookContext from './context/book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookContext.Provider value={55}>
    <App />
  </BookContext.Provider>
);
