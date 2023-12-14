import "./App.css";
import { Domain } from "./Component/Domain";
import { Details } from "./Component/Details";
import { Application } from "./Component/Application";
import {  Col, Row } from "react-bootstrap";
import { useState } from "react";
import { ModalSettings } from "./Component/ModalSettings";

function App() {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [selectedEis, setSelectedEis] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [company, setCompany] = useState([
    {
      domain_id: 1,
      domain_code: "TPC01",
      domain_name: "Joyson Safety Systems (Philippines) Corporation",
      domain_bus_tradename: "Joyson Safety Systems (Philippines) Corporation",
      domain_alt_code: "",
      domain_bus_seller_type: 1,
      domain_active: true,
      default_domain: true,
      domain_addedby: "",
      domain_modifiedby: "",
      domain_date_modified: "2022-07-15T10:29:00.433",
      oid: "2022-06-22T03:21:15.473",
    },
  ]);

  const [eis, setEis] = useState([
    {
      appId: 2,
      eis_appId: "slUb23HB",
      eis_appName: "JSPH",
      eis_app_type: 1,
      eis_cert_number: "20qJVjoC",
      eis_date_applied: "2022-06-18T00:00:00",
      eis_appKey: "WV1GO9VTUY5H",
      eis_app_KeyId: "NA4iXyK2f6",
      eis_public_Key:
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgMbSxoPRLi4P98qbfdFvwYCEf6l2QcKHhyE+m7Fh8OSqKqQFWud0+SSqydzYZzQYZIQ0hwZ/Vvd6StsEY80O7XC6ELVZ052s91PjAlh38TSzmJGy8ZZUYLsg8S2DzKaCpQ0ZmvphYf0ZB8ZoOXBTVPpg4cGBVbMZLdTtnXYxSegXhog6XBsIkAXmAWHwzJ0t6x0NbMnsfbHvFlqtUrsbwBc4BD+0rO3lJHPbDO4HEiMmrlM/bD/hL4uKzXv3jeXCkDbQdYsZZgI7tglu2Al/jB8VdMDJRJjsQf0Z5Ye3FdOsqp1v3SF3ENns8F/0A8xrrB/SuKcwO7Rvm2fjogoqqwIDAQAB",
      eis_private_Key:
        "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDsNFlMO3sKJzkBlk2iaGybypvFwkJ9eC5voW3wWoWBWqymkyPhzN7NF0MbUKShx7xZo8sxVIgVeF+guw+gCtFFIDjarQ/CdnZntool3etgE/AFyWKnpru2+vt3O+OdU+UA18wilJ+sHFESPca94LNOvTKc4gE5LlpCVT79tdo612VzJFKtfeCiW69d1aejM7L2A+y47mWojo3lYP7xXl3SJp0pXhSI0cofx4EKUMLZGbkzXMzvLs0dwxalejYUyCKynWwo02BVqR8ZWaq35sFPHQ9S7u0+CJdDKJ58jF/Bcu10+RZdWP2p7vZLa5CH7hLWn/S3o1z2gUolVwd5DRABAgMBAAECggEBAJY0xASiXqAaSTolJsF8vnRj56Ne4YGAh6cddRg/uF6GFvzm3Q6ehaDOhjI8mjT3G2O1sWVxaAifP9CqpEkWF/Zpgz4sh7UWOD3D6x4hfajfhOdpJX+PnBfEi11LjHdj/mEG2h2zfcapSzTabCQbXGtaDXGOl1CRlXxRUXltx5VaY460wlZgiZXYuPCh1ToGgY7llpGEBdm9VCTCfv+XDH9ES91WnG/k0HDUH/fIS9Go3ciAPZYwFfQWPzxjV7ldEdcRUoZRihBEiUz09ALEq0wRxFD62gff2vY2b4bbxSOqmXrTL4wM3jdynaAPcqVWB83xPoX3Gjk7WkhYZEkCdzECgYEA/mO7RySfjIyl1CkUmggDaQtuWp5MnrFmJruAqvruA9lQhEozzAshhWmDrLPrvN+tOPl7Uhj4oeFkEfnw3EZxjJnuV7PcgKr3kHt5t4cZnnyC86PneD4aL+oDDWaSSc+1lEjxM+jH/S9zk3ga45qvsOkVy7ko26InHtKw5YmOus8CgYEA7bMla68uR/T34nh6WjfHLb/7+LdHCtF/DTK64k+w33+ZweHUAVgQPRwOmtfUk2omKLKVTGh+ep892ivmyq20J9kG4pS7zcr84W9GegkEewz/4HOyTUCja/Rsd20h/PvwIOWVRfIrEcx39tJZrR5U1TzF6af6+7BCwavr9UH7/C8CgYEA5D8zn6eaiA8CExQw6etas/uPrjruYEynbQU7cy3mNQndFnVFeERcdUmw3Vopn7PJxp8CKS1CmGyUzxRFKj8CTrcmhQZaSBAeREKleSf8spjhHh3n55lBAdCjoHhxtUxqjXvM/1hTaDYVKzHOXn1COidIaRvfLwGUvDEqiykbKT0CgYEAi6187NVpPdF+pK8lPsSOH500RMf2UC4hGbFYzkoD5qHFyX+ZpByKlk5ZarYvbVywBbRDNT4mLIpMv1qS6UC/n7bRa+34mgqRJSvNX0LTRjeyWMPD389++J4N6vPPSCkHx10BpbOTiYb8a6baGXe8Y/2tUwtp2eKOp94N7vYSS/MCgYAvH1Gp3JvJgF2uQMGJ/Ym1Q8zeKO8PE+AxCahVMazL8C8ZrpNdMzKf+Qv9hn7jQUjCj+/qNIASJpFe3/oJ10sAqgfrC0PMFovQHp0rpn7PTkwdz+LOXnC2drNlxwJshFoIcMK8CW5fftvMLUSIzRh2bsCJLX7mjhsGEzJuM6zYBg==",
      eis_authentication_url: "https://eis-api.bir.gov.ph/api/authentication",
      eis_invoice_url: "https://eis-api.bir.gov.ph/api/invoices",
      eis_invoice_inq_url: "https://eis-api.bir.gov.ph/api/invoice_result/",
      eis_cas_ptuNum: "P202208KpN1F",
      eis_default_setup: false,
      eis_is_active: true,
      eis_sendinvperbatch: 100,
      domain_id: 1,
      oid: "2022-07-04T00:00:00",
    },
    {
      appId: 9,
      eis_appId: "iEEJiOPA",
      eis_appName: "JSPHTEST",
      eis_app_type: 1,
      eis_cert_number: "20rolgw3",
      eis_date_applied: "2022-06-25T00:00:00",
      eis_appKey: "2F0MEEL7XXAB",
      eis_app_KeyId: "dNQr6vuNcn",
      eis_public_Key:
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgMbSxoPRLi4P98qbfdFvwYCEf6l2QcKHhyE+m7Fh8OSqKqQFWud0+SSqydzYZzQYZIQ0hwZ/Vvd6StsEY80O7XC6ELVZ052s91PjAlh38TSzmJGy8ZZUYLsg8S2DzKaCpQ0ZmvphYf0ZB8ZoOXBTVPpg4cGBVbMZLdTtnXYxSegXhog6XBsIkAXmAWHwzJ0t6x0NbMnsfbHvFlqtUrsbwBc4BD+0rO3lJHPbDO4HEiMmrlM/bD/hL4uKzXv3jeXCkDbQdYsZZgI7tglu2Al/jB8VdMDJRJjsQf0Z5Ye3FdOsqp1v3SF3ENns8F/0A8xrrB/SuKcwO7Rvm2fjogoqqwIDAQAB",
      eis_private_Key:
        "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCePo2x0apMHY26Z0kIlvUD2FcDB+2S2LESh8ohPWOlZ9CkTLuSCxI8swtqh5YlXqikjMSeHk80xRp0Sj5AsOJQQjFrpqw+cdmdFl97MCQrTBTX/QwnrqHsUpuDlmTTsBZChvtfM6WBxX/3t0irkNmwi5dSORWGhHCrZ7flWVKZul/U32zZLNtvvk9srG/IqFa0dYOPZiE96tWTBX5MG4fhGQYbFpptbyffQdZPtGj+s9xsMTuvsIuSY8Z/aAXjmM/K8HLV0ezN49vdV4AdIoLGmAzuITsQgmFhzCKoqnDZB+qElWeN3hRDPMVoSiSkLDQHsbL+TabCODyoSPEYuWp/AgMBAAECggEADFiDA4GBEMkpeoZ+Wy4z1WX2e+UNcux2/CQd7/PzJz9vNrJJ2/4DITsyw8/qNeYpsBTPbiqdMVfDVZlJPBDQx0QyyNxLCeAmAyxwrJK376zS33r9jMcCGQbk3SJJoX5WbkBLskS8P+ChuDjTcZcudKifWKnddQ42IBlKbplGaXnSGknkd2jsgPIWaGHkvjcpnIA2SluJa7KK48l5C9CrmNG753i+xoj3uU1LXp7jGHV52vEBuZdyZ70dv1Bug1TKxGTGXVyuuM6f3wIAVllCGerRaZVwWtFWP9i+mpJXMqUPks2nG5PJd0d+8aIZ9Nrv9CHm4wRUuPaMHxayDHpKAQKBgQDsW03JQTnUmoMO5cyAecEbxURkA60BdtXx28S5tNk1cYfvddO1iVYGww7y3Cot1Unc4zRHZo6Z01N9VMZGWmEIv/Vbb2bFhi3Vm4+r86oO7J3PSzjC5ld8loDRX03LtzYeDtVVBP39RkW849AZH3QY9SZYrF0PzogWW8k3mD8dfwKBgQCrZVdr884uPkuoJSBEOAbVAwcgUYCO0Vj0BYq6Nlc64Q4sXW49ssso6Ebh2nfFIhNQX/Bai6o7FltdOPFD+puPG20b/+BCZIh6byYj9B4oFtCROwYDSscNyn5Qkd0h2nWC912+DsN/oL2kxlCCO5/h1zhwQQ5LFV7iX8jRU2YzAQKBgGLH7gSUrBS81tVdGVEAkcKHeYPLPX0FK3k/fkKW4MjDQCrGNcsDMN72msLJXR92qr4Ufv7wT9zeQ2B4E73HfBJqF6M1NeCLqZBCyZL17Tb7kSDXsUtTdXDufbwDdsITOhzp2iMESRqXSgIdvBUj3iOoIXSh5Or8SEf/6GLB0G8FAoGBAIopRgBaZyC1zMz9KHZ1Z2R8bVkq+eOmc/s5IGwc89IdqwwuQHhx0PznyIO1VQjPAByxSZHjtdStn/aUuT+gG5ePdzOz3rYGTlHLmUYwOcL9KSF5H861j6HZUltmSYhJjqKE/sb/Ja6TB2x1BF8G60nk8LTkbD4wOu1mYv4CKYcBAoGASw1ejc/r0jRadVvDa5BVZd/yIqpF3A5QwreD+qw+onyGew2oCFNq4Z0umixnyURLi5Mlmh1MfdfhCivfaXggV7uq6mQw6aDmu//1Rt7lEb1D9ARxBZDWDqOiCrVVoDy7KQQt74vtIUkt6lJF6/UPg/6YwBSdZL2DJaDmYkfH6xw=",
      eis_authentication_url: "https://eis-cert.bir.gov.ph/api/authentication",
      eis_invoice_url: "https://eis-cert.bir.gov.ph/api/invoices",
      eis_invoice_inq_url: "https://eis-cert.bir.gov.ph/api/invoice_result/",
      eis_cas_ptuNum: "0514-ELTRD-CAS-00251",
      eis_default_setup: false,
      eis_is_active: false,
      eis_sendinvperbatch: 100,
      domain_id: 1,
      oid: "2022-07-13T11:53:07.543",
    },
    {
      appId: 10,
      eis_appId: "mQRh9QIC",
      eis_appName: "JSPHTEST2",
      eis_app_type: 1,
      eis_cert_number: "20UdMjSZ",
      eis_date_applied: "2022-07-15T00:00:00",
      eis_appKey: "MJHZYL51ER0L",
      eis_app_KeyId: "N2q8iDiOeg",
      eis_public_Key:
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgMbSxoPRLi4P98qbfdFvwYCEf6l2QcKHhyE+m7Fh8OSqKqQFWud0+SSqydzYZzQYZIQ0hwZ/Vvd6StsEY80O7XC6ELVZ052s91PjAlh38TSzmJGy8ZZUYLsg8S2DzKaCpQ0ZmvphYf0ZB8ZoOXBTVPpg4cGBVbMZLdTtnXYxSegXhog6XBsIkAXmAWHwzJ0t6x0NbMnsfbHvFlqtUrsbwBc4BD+0rO3lJHPbDO4HEiMmrlM/bD/hL4uKzXv3jeXCkDbQdYsZZgI7tglu2Al/jB8VdMDJRJjsQf0Z5Ye3FdOsqp1v3SF3ENns8F/0A8xrrB/SuKcwO7Rvm2fjogoqqwIDAQAB",
      eis_private_Key:
        "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQChimm/f+SkNBTTRNPaVkB7GGAXw2Svsf+sWY6EPoW+dg1eeIa6TufZDBKMfdHpsj93Wv33ukcTU4jOCDA2fIxZOUKrGcLwzSrZUpiXvsOBr7k5nTlrcR43LRMwCZR04KdBal0Xb7oXT/G0JA1Q8UfcaVb5adnv7oBUHCTfmERsQJDpVwhYUsvEIuB2r9sL9kWhBoHBbcoYyWeZm3bOrdRxZPwfJRIbFqNDGkxjtyogKR0skc9IDxENK53TdYJvwhuWEA4FVz9RnrD2U/3bYB09ueIKCkPL8uFbNkjOpcqsMVvaueFROaMxv3bjvURYwbqiK0pgRoSXsBxAbuJ/NEXDAgMBAAECggEATOd4MJLSZtnkkC/UK72kNPYFyUpcRMiYz5RTJOIfCe1pr+/xNAEcn1f//KJprLgPPuMyxR0JeUnrdyquyUHCDzgTZSF+jOUf4RZRTuyiZrshkywmid/wYpQy7kuhQYMyHRJl/yJRlYeZqgj/zekQLP55SYP7HR6OOXyskUYMTPwt18sodkV8PgC56teCsX52kYGqecz7h6v+m3SFjN7m3AEPAsJ7sZiad0/vHBhfmpQL61ahHQM1wYlD5Z6EX4X6vDa4meU2dZDgnKBrG+cBgTD8lJd9YdefKXY6qU+B7RVGrxHFYtDos/X8dyrsOW5aJWZkgYEH08E5jjN7t//QAQKBgQDbBz4mpHInKoybspjFuFhojJbXfcwU/V+rRWULK95tAnFEKya9wBjZslKqo5htd/guUvixbWr4gEMlervw7OINPQKjyPteNKgrLC2dqXSGzb8lY0zs9Cqoz3YxJsAii/Lt2nNQifu97+lyJZsmC7mp//167miwXQIo3GfLEdAIwQKBgQC8zvzJAohE/3yah46zlDKr2WxI492o3BLGggEcl772kpiEuMXkE2hKF2POBm0ELnZ1jOiSRXgX/IGAGfPGkLTHszsxYrYRNIiWvtnn+IhcFLfNJafsjyRfZYDH1xNALbTyTDf06KrD3x9m1XDcGVnTCAylXqdm1P4vp2ZSJb+LgwKBgH5nOakXcoHD/o3EjoJdFziPGmaWxPbAGzw+ukeuM5l5tWB//sW3XSAV17t+2nMir2ocnEXZPcjYTOgOYvRx4St+sE1Rqi/996eiwVih+QvrJYswOa7uYsg1oqJPGMdXOQWn8rDiURSWpoUnytg0IBxKDkGp4WUW6C4otQXu676BAoGAYEOQctQNslAosYkH4ttecmvqX8d+DkgWcot6EZ/0xza6+IBUtRKIC66dPj/ceVNPJmPveBRfRKuDQ1L4DXdeFKt3NJjFh0Qnl+Q6qaD3tSsDA199nIjm3JSd8kXgFMq5BQiDRyURW8h49C9C2ZU7TPM/r1jxNObHqnhJHP0OCg0CgYEAu2qkLeAMiFjeHnanrKkyVXd2VHEzX673sR0YYrX04Rlcvba18IhtQLp4FwSRGN6OfUlQd8hv8Kc3rdG2uoBx9mKpKHmNp0QEvDo1kT1YhsI6xlGJa/QrwbqGULrwBzPTCL/g9/wdG8DjrIUNitN2gEsKRNjFIo4/jFM6/VCcH4I=",
      eis_authentication_url: "https://eis-cert.bir.gov.ph/api/authentication",
      eis_invoice_url: "https://eis-cert.bir.gov.ph/api/invoices",
      eis_invoice_inq_url: "https://eis-cert.bir.gov.ph/api/invoice_result/",
      eis_cas_ptuNum: "0514-ELTRD-CAS-00251",
      eis_default_setup: true,
      eis_is_active: true,
      eis_sendinvperbatch: 50,
      domain_id: 1,
      oid: "2022-08-23T07:09:46.147",
    },
  ]);

  /** 
   * * Returning of next Id number for creating of a new company
   */
  const getHighestDomainId = () => {
    if(company.length === 0){
      return 1;
    }
    
    const highestDomainIdObject = company.reduce((max, current) => {
      return current.domain_id > max.domain_id ? current : max;
    });

    return highestDomainIdObject.domain_id + 1;
  };

  /**
   * 
   * * Return object of selected Company Id
   */
  const getSelectedCompany = () => {
    return company.find((c) => c.domain_id === selectedCompany);
  }

  /**
   *  * Delete item base on selected company
   */
  const deleteCompany = () => {
    const updatedItems = company.filter(
      (c) => c.domain_id !== selectedCompany
    );
    setCompany(updatedItems);
  };

  
  /**
   * 
   * * Update details of selected Company Id 
   * * updatedValues = payload
   */
  const updateCompany = (updatedValues) => {
    setCompany(prevData => 
      prevData.map(obj =>
          obj.domain_id === selectedCompany ? { ...obj, ...updatedValues } : obj
        )
      ); 
  }

  /**
   * 
   * * EIS Functions
   */
  const getEisByDomainId = () => {
    return eis.filter(e => e.domain_id === selectedCompany);
  }

  const deleteEis = () => {
    const updatedItems = eis.filter(
      (e) => e.appId !== selectedEis
    );
    setEis(updatedItems);
  }

  const getEisByAppId = () => {
    return eis.find(e => e.appId === selectedEis);
  }

  const getHighestEisId = () => {
    if(eis.length === 0){
      return 1;
    }
    
    const highestEisIdObject = eis.reduce((max, current) => {
      return current.appId > max.appId ? current : max;
    });

    return highestEisIdObject.appId + 1;
  };

  const updateSelectedEis = (updatedValues) => {
    setEis(prevData => 
      prevData.map(obj =>
          obj.appId === selectedEis ? { ...obj, ...updatedValues } : obj
        )
      ); 
  }


  return (
    <div className="App">
      <Row>
        <Col>
          <Domain company={company} setSelectedCompany={setSelectedCompany} />
        </Col>
        <Col>
          <Details
            selectedCompany={selectedCompany} 
            setSelectedCompany={setSelectedCompany}
            setCompany={setCompany}
            getHighestDomainId={getHighestDomainId}
            deleteCompany={deleteCompany}
            getSelectedCompany={getSelectedCompany}
            updateCompany={updateCompany}
          />
          <Application 
            getEisByDomainId={getEisByDomainId}
            setSelectedEis={setSelectedEis}
            deleteEis={deleteEis}
            setShowModal={setShowModal}
          />
        </Col>
      </Row>
      <ModalSettings 
        showModal={showModal}
        setShowModal={setShowModal}
        getEisByAppId={getEisByAppId}
        selectedEis={selectedEis}
        setEis={setEis}
        getHighestEisId={getHighestEisId}
        selectedCompany={selectedCompany}
        updateSelectedEis={updateSelectedEis}
      />
    </div>
  );
}

export default App;
