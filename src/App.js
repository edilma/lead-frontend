
import './App.css';
import LeadForm from './components/LeadForm.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import LeadList from './components/LeadList.jsx';
import Header from './components/Header';

function App() {
  return (
    <>
   <Header/>
    <LeadForm />
    <LeadList />
    
    </>
  );
}

export default App;
