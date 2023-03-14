import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../src/styles/leadList.css'


export default function Lead({ type, lead }) {
    return (
        <tr className={!type ? lead.learning_option : ''}>
          <td>{lead.first_name + " " + lead.last_name}</td>
          <td>{lead.zip}</td>
          <td>{lead.city}</td>
          <td>{lead.phone_number}</td>
          <td>{lead.email}</td>
          <td>{lead.state}</td>
          <td>{lead.learning_option}</td>
       
        </tr>
      );
}



   
