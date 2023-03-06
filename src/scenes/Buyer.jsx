import { Container } from "react-bootstrap";
import BuyerForm from "../components/BuyerForm.jsx";
import Greeting from "../components/Greeting.jsx";
import Header from "../components/Header.jsx";



export default function Buyer(){
    return(
        <Container>
        <Header/>
        <Greeting />
        <BuyerForm />
        
        </Container>
    )
};