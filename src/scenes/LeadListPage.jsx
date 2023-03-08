import Greeting from "../components/Greeting";
import Header from "../components/Header";
import LeadList from "../components/LeadList";
import "../styles/leadList.css"

export default function({type}){
   
    return(
        <>
        <Header />
        <Greeting />
        <LeadList type={type}/>
        </>
    )
}