import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

export const Application = () => {
  return (
    <div className="text-start">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="success" className="mx-1">
        Create
      </Button>
      <Button variant="primary" className="mx-1">
        Update
      </Button>
      <Button variant="danger" className="mx-1">
        Delete
      </Button>
    </div>
  );
};
