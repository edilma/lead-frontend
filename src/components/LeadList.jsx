import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Lead from './Lead.jsx';
import { useEffect, useState } from 'react';
import { uri } from '../config.js';
import '../../src/styles/leadList.css'

export default function LeadList({type}) {
    //const [bgType, setbgType] = useState("all")
    const [leads, setLeads] = useState([])
    console.log(type)
    useEffect(() => {
        fetch(`${uri}/leads/${type}`)
            .then(res => res.json())
            .then((leads) => {
                console.log(leads)
                setLeads(leads)
            })
            .catch(error => console.error)

    }, [type])

return (
  <Container>
    <h1>Leads Type: {type || 'All Leads'}</h1>
    <Table className='table'   >
      <thead className='thead-light'>
        <tr>
          <th>Full Name</th>
          <th>Zip Code</th>
          <th>City</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>State</th>
          <th>Learning Type</th>
         
        </tr>
      </thead>
      <tbody className='table-body'>
        {!leads || leads.length==0 ? (
          <tr>
            <td colSpan="8">There are no leads</td>
          </tr>
        ) : (
          leads.map((lead) => <Lead type={type} key={lead._id} lead={lead} />)
        )}
      </tbody>
    </Table>
  </Container>
);

}