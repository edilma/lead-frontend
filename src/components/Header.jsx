import { Row } from "react-bootstrap"
import LDS_Header from "../images/LDS_Header.png"


export default function Header(){
    return(<Row className="bg-header">
        <img className="logoImage"  src={LDS_Header} alt="LDS Logo"/>
        </Row>
    )
}