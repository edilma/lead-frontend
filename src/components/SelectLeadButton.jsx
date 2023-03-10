import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "../styles/buyer.css"


export default function SelectLeadButton({type}){
    const navigate = useNavigate();

    return(
       <div className='button-buyer-page'>
            <Button 
            className="leads-button local" 
            size="lg"
            onClick= {()=>navigate(`/leads/local`)}
            >
          Local Leads
        </Button>
        <Button 
        className="leads-button remote" 
        size="lg"
        onClick= {()=>navigate(`/leads/remote`)}
        >
          Remote Leads
        </Button>
        <Button 
        className="leads-button all" 
        size="lg"
        onClick={()=>navigate(`/leads/`)}
        >
          All Leads
        </Button>
        </div>

    )
}