import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


export default function SelectLeadButton({type}){
    const navigate = useNavigate();

    return(
       <>
            <Button 
            className="local-leads-button" 
            size="lg"
            onClick= {()=>navigate(`/leads/local`)}
            >
          Local Leads
        </Button>
        <Button 
        className="remote-leads-button" 
        size="lg"
        onClick= {()=>navigate(`/leads/remote`)}
        >
          Remote Leads
        </Button>
        <Button 
        className="all-leads-button" 
        size="lg"
        onClick={()=>navigate(`/leads/`)}
        >
          All Leads
        </Button>
        </>

    )
}