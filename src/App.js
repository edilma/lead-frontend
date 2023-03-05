
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LeadFormPage from './scenes/LeadFormPage.jsx';
import LeadListPage from './scenes/LeadListPage.jsx';
import ThankYouPage from './scenes/ThankYouPage.jsx';
import Buyer from './scenes/Buyer.jsx';

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
    
        <Route path="/leadForm" element ={<LeadFormPage />} />
        <Route path="/leads" element={<LeadListPage type=""/>} />
        <Route path="/leads/remote" element={<LeadListPage type="remote" />} />
        <Route path="/leads/local" element={<LeadListPage type="local"/>} />
        <Route path='/thanks' element={<ThankYouPage />} />
        <Route path='/buyer' element={<Buyer />} />
        
      </Routes>



      </BrowserRouter>
  );
}

export default App;
