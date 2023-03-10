import Greeting from "../components/Greeting";
import Header from "../components/Header";
import LeadList from "../components/LeadList";
import SelectLeadButton from "../components/SelectLeadButton";
import "../styles/leadList.css"

export default function LeadListPage({type}){
   
    return(
        <>
        <Header />
        <Greeting />
        <SelectLeadButton />
        <LeadList type={type}/>
        </>
    )
}