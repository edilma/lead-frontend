import Greeting from "../components/Greeting";
import Header from "../components/Header";
import LeadList from "../components/LeadList";

export default function({type}){
    //set up the context to pass the lead buyer
    return(
        <>
        <Header />
        
        <LeadList type={type}/>
        </>
    )
}