
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import "./styles/water.css"
import LeadFormPage from './scenes/LeadFormPage.jsx';
import LeadListPage from './scenes/LeadListPage.jsx';
import ThankYouPage from './scenes/ThankYouPage.jsx';
import BuyerPage from './scenes/BuyerPage.jsx';
import BridgeToLead from './scenes/BridgeToLead.jsx';
import LandingPage from './scenes/LandingPage';
import HomePage from './scenes/Homepage.jsx';






function App() {
  return (
    <BrowserRouter>
     
      <Routes>
    
        <Route path="/leadForm" element ={<LeadFormPage />} />
        <Route path="/leads" element={<LeadListPage type=""/>} /> 
        <Route path="/leads/remote" element={<LeadListPage type="remote" />} />
        <Route path="/leads/local" element={<LeadListPage type="local"/>} />
        <Route path='/thanks' element={<ThankYouPage />} />
        <Route path='/bridge' element={<BridgeToLead />} />
        <Route path='/buyer' element={<BuyerPage />} />
        <Route path='/login' element={<LandingPage />} />
        <Route path='/' element={<HomePage />} />
       
      </Routes>



      </BrowserRouter>
  );
}

export default App;
