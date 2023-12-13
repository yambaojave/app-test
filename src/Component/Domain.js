import React, { useState } from 'react'
import { Table } from 'react-bootstrap';

export const Domain = ({company, setSelectedCompany}) => {
  const [selectedRow, setSelectedRow] = useState(null);


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Domain Code</th>
          <th>Domain Name</th>
        </tr>
      </thead>
      <tbody>
        {
          company.map(c => (
            <tr  key={c.domain_id} onClick={() => {
              setSelectedRow(c.domain_id);
              setSelectedCompany(c.domain_id); 
            }}
            >
              <td
                style={{
                  background: selectedRow === c.domain_id ? 'lightblue' : 'white',
                }}
              >{c.domain_code}</td>
              <td>{c.domain_name}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>

  )
}
