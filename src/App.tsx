import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DocketPage from './pages/DocketPage';
import DocumentSummaryPage from './pages/DocumentSummaryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docket/:docketId" element={<DocketPage />} />
        <Route path="/docket/:docketId/:documentType" element={<DocumentSummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;