import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CriminalRecord from './pages/CriminalRecord';
import EducationRecord from './pages/EducationRecord';
import HealthRecord from './pages/HealthRecord';
import Organizations from './pages/Organizations';
import DocumentServices from './pages/DocumentServices';
import Universities from "./pages/Universities";
import MainPage from "./pages/MainPage";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criminal_record" element={<CriminalRecord />} />
        <Route path="/education_record" element={<EducationRecord />} />
        <Route path="/health_record" element={<HealthRecord />} />
        <Route path="/document_services" element={<DocumentServices />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/MainPage" element={<MainPage />} />

      </Routes>
    </div>
  );
}

export default App;