import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThreeApp from './3D-website/3D-App';
import URIError from './NotFound';
import TwoApp from './2D-website/App';

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<ThreeApp />} />
        <Route path="/2D-website" element={<TwoApp />} />
        <Route path="/3D-website" element={<ThreeApp />} />

        <Route path="*" element={<URIError />} />
      </Routes>

    </Router>
  );
}

export default App;