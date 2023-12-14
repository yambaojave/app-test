import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const Details = ({
  selectedCompany,
  setSelectedCompany,
  setCompany,
  getHighestDomainId,
  deleteCompany,
  getSelectedCompany,
  updateCompany
}) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const checkBoxArray = ["active", "default_domain"];

    if (checkBoxArray.includes(name)) {
      const currentValue = formData[name];

      return setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: !currentValue,
      }));
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData({
      code: getSelectedCompany()?.domain_code || "",
      name: getSelectedCompany()?.domain_name || "",
      tradename: getSelectedCompany()?.domain_bus_tradename || "",
      seller_type: getSelectedCompany()?.domain_bus_seller_type || 0,
      active: getSelectedCompany()?.domain_active || false,
      default_domain: getSelectedCompany()?.default_domain || false,
    });
  }, [selectedCompany]);

  const addNewCompany = () => {
    let date = new Date().toJSON();

    const payload = {
      domain_id: getHighestDomainId(),
      domain_code: formData.code,
      domain_name: formData.name,
      domain_bus_tradename: formData.tradename,
      domain_alt_code: "",
      domain_bus_seller_type: formData.seller_type,
      domain_active: formData.active,
      default_domain: formData.default_domain,
      domain_addedby: "",
      domain_modifiedby: "",
      domain_date_modified: date,
      oid: date,
    };

    setCompany((prevData) => [...prevData, payload]);
    setSelectedCompany();
    
  };

  const updateDetails = () => {
    let date = new Date().toJSON();

    const payload = {
      domain_code: formData.code,
      domain_name: formData.name,
      domain_bus_tradename: formData.tradename,
      domain_bus_seller_type: formData.seller_type,
      domain_active: formData.active,
      default_domain: formData.default_domain,
      oid: date,
    };
    
    updateCompany(payload);
  };

  const resetForm = () => {
    setFormData({
      code: "",
      name: "",
      tradename: "",
      seller_type: 0,
      active: false,
      default_domain: false,
    });
  };

  return (
    <Card className="text-start">
      <Card.Header as="h5">Company Details</Card.Header>
      <Card.Body>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Domain Code
          </span>
          <input
            type="text"
            className="form-control"
            name="code"
            value={formData?.code || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Domain Name
          </span>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData?.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Trade Name
          </span>
          <input
            type="text"
            className="form-control"
            name="tradename"
            value={formData?.tradename || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Seller Type
          </span>
          <Form.Select
            aria-label="Default select example"
            name="seller_type"
            value={formData?.seller_type || ""}
            onChange={handleChange}
          >
            <option disabled>Open this select menu</option>
            <option value="1">VAT Registered</option>
            <option value="2">Non-Vat Registered</option>
          </Form.Select>
          <input
            type="checkbox"
            name="active"
            checked={formData?.active || false}
            onChange={handleChange}
          />
          <span>Active</span>

          <input
            type="checkbox"
            name="default_domain"
            checked={formData?.default_domain || false}
            onChange={handleChange}
          />
          <span>Default Domain</span>
        </div>

        <Button variant="success" className="mx-1" onClick={addNewCompany}>
          Create
        </Button>
        <Button variant="primary" className="mx-1" onClick={updateDetails}>
          Update
        </Button>
        <Button
          variant="danger"
          className="mx-1"
          onClick={() => {
            deleteCompany();
            resetForm();
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
