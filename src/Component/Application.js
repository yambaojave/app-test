import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

export const Application = ({
  getEisByDomainId,
  setSelectedEis,
  deleteEis,
  setShowModal,
  selectedCompany
}) => {
  const [selectedRow, setSelectedRow] = useState(0);

  const getType = (type) => {
    const idNumber = parseInt(type)
    const listType = [
      {
        id: 1,
        name: "CAS",
      },
      {
        id: 2,
        name: "NON CAS",
      },
    ];

    const item = listType.find((list) => list.id === idNumber);
    return item.name;
  };

  return (
    <div className="text-start">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Application Name</th>
            <th>Application Type</th>
          </tr>
        </thead>
        <tbody>
          {getEisByDomainId().map((item) => (
            <tr
              key={item.appId}
              onClick={() => {
                setSelectedRow(item.appId);
                setSelectedEis(item.appId);
              }}
            >
              <td
                style={{
                  background:
                    selectedRow === item.appId ? "lightblue" : "white",
                }}
              >
                {item.eis_appId}
              </td>
              <td>{item.eis_appName}</td>
              <td>{getType(item.eis_app_type)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        variant="success"
        className="mx-1"
        onClick={() => {
          setSelectedEis(0);
          setSelectedRow(0);
          setShowModal(true);
        }}
        disabled={selectedCompany === 0}
      >
        Create
      </Button>
      <Button
        variant="primary"
        className="mx-1"
        onClick={() => setShowModal(true)}
        disabled={selectedRow === 0}
      >
        Update
      </Button>
      <Button
        variant="danger"
        className="mx-1"
        onClick={() => {
          setSelectedRow(0);
          deleteEis();
        }}
        disabled={selectedRow === 0}
      >
        Delete
      </Button>
    </div>
  );
};
