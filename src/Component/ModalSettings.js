import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export const ModalSettings = ({
  showModal,
  setShowModal,
  getEisByAppId,
  selectedEis,
  setEis,
  getHighestEisId,
  selectedCompany,
  updateSelectedEis
}) => {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    setFormData({
      name: getEisByAppId()?.eis_appName || "",
      date: getEisByAppId()?.eis_date_applied || "",
      appKey: getEisByAppId()?.eis_appKey || "",
      certNumber: getEisByAppId()?.eis_cert_number || "",
      appId: getEisByAppId()?.eis_appId || "",
      type: getEisByAppId()?.eis_app_type || "",
      keyId: getEisByAppId()?.eis_app_KeyId || "",
      ptuNumber: getEisByAppId()?.eis_cas_ptuNum || "",
      publicKey: getEisByAppId()?.eis_public_Key || "",
      privateKey: getEisByAppId()?.eis_private_Key || "",
      authentication: getEisByAppId()?.eis_authentication_url || "",
      invoicing: getEisByAppId()?.eis_invoice_url || "",
      inquiry: getEisByAppId()?.eis_invoice_inq_url || "",
      active: getEisByAppId()?.eis_is_active || "",
      defaultSetup: getEisByAppId()?.eis_default_setup || "",
      invoiceBatch: getEisByAppId()?.eis_sendinvperbatch || "",
    });
  }, [selectedEis]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const checkBoxArray = ["active", "defaultSetup"];

    if (checkBoxArray.includes(name)) {
      const currentValue = formData[name];

      return setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: !currentValue,
      }));
    }

    if (name === "date") {
        const newDate = new Date(value);
        return setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newDate,
          }));
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const dateFormat = (value) => {
    if (typeof value === "undefined" || value === "") {
      return "";
    }

    const newDate = new Date(value);
    const newFormat = newDate.toISOString().split("T")[0];

    return newFormat;
  };


  const addNewEis = () => {
    let date = new Date().toJSON();

    const payload = {
        appId: getHighestEisId(),
        eis_appId: formData.appId,
        eis_appName: formData.name,
        eis_app_type: formData.type,
        eis_cert_number: formData.certNumber,
        eis_date_applied: formData.date,
        eis_appKey: formData.appKey,
        eis_app_KeyId: formData.keyId,
        eis_public_Key: formData.publicKey,
        eis_private_Key: formData.privateKey,
        eis_authentication_url: formData.authentication,
        eis_invoice_url: formData.invoicing,
        eis_invoice_inq_url: formData.inquiry,
        eis_cas_ptuNum: formData.ptuNumber,
        eis_default_setup: formData.defaultSetup,
        eis_is_active: formData.active,
        eis_sendinvperbatch: formData.invoiceBatch,
        domain_id: selectedCompany,
        oid: date,
    };

    setEis((prevData) => [...prevData, payload]);
  };


  const updateEis = () => {
    let date = new Date().toJSON();

    const payload = {
        eis_appId: formData.appId,
        eis_appName: formData.name,
        eis_app_type: formData.type,
        eis_cert_number: formData.certNumber,
        eis_date_applied: formData.date,
        eis_appKey: formData.appKey,
        eis_app_KeyId: formData.keyId,
        eis_public_Key: formData.publicKey,
        eis_private_Key: formData.privateKey,
        eis_authentication_url: formData.authentication,
        eis_invoice_url: formData.invoicing,
        eis_invoice_inq_url: formData.inquiry,
        eis_cas_ptuNum: formData.ptuNumber,
        eis_default_setup: formData.defaultSetup,
        eis_is_active: formData.active,
        eis_sendinvperbatch: formData.invoiceBatch,
        domain_id: selectedCompany,
        oid: date,
    };

    updateSelectedEis(payload);
  }

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>EIS Application Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Row className="mb-2">
              <Col xs={4}>Application Name</Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData?.name || ""}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={4}>Date Applied</Col>
              <Col>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={dateFormat(formData?.date) || ""}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={4}>Application Key</Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  name="appKey"
                  value={formData?.appKey || ""}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={4}>EIS Cert Number</Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  name="certNumber"
                  value={formData?.certNumber || ""}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="mb-2">
              <Col xs={4}>Application ID</Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  name="appId"
                  value={formData?.appId || ""}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={4}>Application Type</Col>
              <Col>
                <Form.Select
                    aria-label="Default select example"
                    name="type"
                    value={formData?.type || ""}
                    onChange={handleChange}
                >
                    <option disabled>Open this select menu</option>
                    <option value="1">CAS</option>
                    <option value="2">NON CAS</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={4}>Application Key ID</Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  name="keyId"
                  value={formData?.keyId || ""}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={4}>PTU Number</Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  name="ptuNumber"
                  value={formData?.ptuNumber || ""}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={2}>Public Key</Col>
          <Col>
            <textarea
              className="form-control"
              name="publicKey"
              value={formData?.publicKey || ""}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={2}>Private Key</Col>
          <Col>
            <textarea
              className="form-control"
              name="privateKey"
              value={formData?.privateKey || ""}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={2}>Authentication URL</Col>
          <Col>
            <input
              type="text"
              className="form-control"
              name="authentication"
              value={formData?.authentication || ""}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={2}>Invoicing URL</Col>
          <Col>
            <input
              type="text"
              className="form-control"
              name="invoicing"
              value={formData?.invoicing || ""}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={2}>Invoice Inquiry URL</Col>
          <Col>
            <input
              type="text"
              className="form-control"
              name="inquiry"
              value={formData?.inquiry || ""}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <Row>
              <Col>
                <input
                  type="checkbox"
                  name="active"
                  checked={formData?.active || false}
                  onChange={handleChange}
                />
                <span>Active</span>
              </Col>
              <Col>
                <input
                  type="checkbox"
                  name="defaultSetup"
                  checked={formData?.defaultSetup || false}
                  onChange={handleChange}
                />
                <span>EIS Default Setup</span>
              </Col>
              <Col>
                <div className="input-group ">
                  <span>Invoice/Batch:</span>
                  <input
                    type="text"
                    name="invoiceBatch"
                    className="form-control"
                    value={formData?.invoiceBatch}
                    onChange={handleChange}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        {selectedEis !== 0 ? (
          <Button variant="primary" onClick={() => { 
                updateEis();
                handleCloseModal(); 
            }}>
            Save Changes
          </Button>
        ) : (
          <Button variant="success" onClick={() => {
                addNewEis();
                handleCloseModal();
            }}>
            Create
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
