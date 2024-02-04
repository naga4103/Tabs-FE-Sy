import { FormEvent, useState, useEffect } from "react";
import {
  Container,
  Tab,
  Tabs,
  Card,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { apiCall } from "../common/apiCall";
import PreviewImage from "../components/PreviewImage";

interface CompanyDetailsInterface {
  name: string;
  legalName: string;
  icon: string;
  logo: string;
  pageTitle: string;
  type: string;
  owner: string;
  email: string;
  contactNumber: number;
  address: string;
}

interface BankDetailsInterface {
  name: string;
  branch: string;
  accountNumber: string;
  accountHolderName: string;
  accountType: string;
}

interface AdditionalDocumentsInterface {
  gstNumber: string;
  gstFile: string;
  panNumber: string;
  panFile: string;
  addressProof: string;
  addressProofFile: string;
  incorporateCertificate: string;
  incorporateCertificateFile: string;
  license: string;
  licenseFile: string;
  serviceTaxNumber: string;
  serviceTaxNumberFile: string;
  vatTinNumber: string;
  vatTinNumberFile: string;
  cheque: string;
  chequeFile: string;
}

const CompanyDetails = () => {
  const [companyDetails, setCompanyDetails] = useState<CompanyDetailsInterface>(
    {
      name: "",
      legalName: "",
      icon: "",
      logo: "",
      pageTitle: "",
      type: "",
      owner: "",
      email: "",
      contactNumber: 0,
      address: "",
    }
  );

  const [bankDetails, setBankDetails] = useState<BankDetailsInterface>({
    name: "",
    branch: "",
    accountNumber: "",
    accountHolderName: "",
    accountType: "",
  });

  const [additionalDocuments, setAdditionalDocuments] =
    useState<AdditionalDocumentsInterface>({
      gstNumber: "",
      gstFile: "",
      panNumber: "",
      panFile: "",
      addressProof: "",
      addressProofFile: "",
      incorporateCertificate: "",
      incorporateCertificateFile: "",
      license: "",
      licenseFile: "",
      serviceTaxNumber: "",
      serviceTaxNumberFile: "",
      vatTinNumber: "",
      vatTinNumberFile: "",
      cheque: "",
      chequeFile: "",
    });

  const [confirmationModalShow, setConfirmationModalShow] =
    useState<boolean>(false);

  const [modalObj, setModalObj] = useState<any>({
    id: "",
    config: {},
    delete: false,
    title: "Image Preview",
    error: "Failed to open image",
  });

  useEffect(() => {
    (async () => {
      const config = {
        method: "POST",
        url: "/api/v1/company/fetchCompany",
        payload: {},
      };

      const { data: getCompanyDetails }: any = await apiCall(config);

      if (getCompanyDetails.success === 1) {
        setCompanyDetails({ ...getCompanyDetails.data[0].companyDetails });
        setBankDetails({ ...getCompanyDetails.data[0].bankDetails });
        setAdditionalDocuments({
          ...getCompanyDetails.data[0].additionalDocument,
        });
      } else {
        toast.error("Failed to fetch company details");
      }
    })();
  }, []);

  const uploadFile = async (event, docType, setState, key) => {
    const file = event.target.files[0];

    if (
      !(
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg"
      )
    ) {
      (document.getElementById(event.target.id) as HTMLInputElement).value =
        null;
      return toast.error("Upload only Image file!");
    }

    let formData = new FormData();
    formData.append("file", file);
    formData.append("docType", docType);

    const config = {
      method: "POST",
      url: "/api/v1/upload/uploadSingleFile",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "891f5e6d-b3b3-4c16-929d-b06c3895e38d"
        )}`,
        route: "/web-page-management/menu-management",
        actiontype: "create",
        "Content-type": "multipart/form-data",
      },
      payload: formData,
    };

    const { data: uploadFile }: any = await apiCall(config);
    if (uploadFile.status === true) {
      setState((previous) => ({ ...previous, [key]: docType }));
    } else {
      toast.error("Failed to upload file!");
    }
  };

  const deleteFile = async (id, docType) => {
    const config = {
      method: "POST",
      url: "/api/v1/upload/deleteSingleFile",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "891f5e6d-b3b3-4c16-929d-b06c3895e38d"
        )}`,
        route: "/web-page-management/menu-management",
        actiontype: "create",
        "Content-type": "application/json",
      },
      payload: {
        docType: docType,
      },
    };

    const { data: deleteUploadedFile }: any = await apiCall(config);
    if (deleteUploadedFile.success === 1) {
      (document.getElementById(id) as HTMLInputElement).value = null;
      toast.success("File deleted successfully!");
    } else {
      toast.error("Failed to upload file!");
    }
  };

  const previewImage = async (id: string) => {
    // setModalObj({
    //   ...modalObj,
    //   id: "",
    //   config: {
    //     method: "POST",
    //     url: "/api/v1/upload/getSingleFile",
    //     payload: { docType },
    //     headers: {
    //       "Content-Type": "application/json",
    //       route: "/web-page-management/menu-management",
    //       actionType: "create"
    //     }
    //   }
    // });

    const file = (document.getElementById(id) as HTMLInputElement).files;

    setModalObj({
      ...modalObj,
      file: file[0],
    });

    setConfirmationModalShow(true);
  };

  const onSubmitForm = (Event: FormEvent<HTMLFormElement>) => {
    Event.preventDefault();
    console.log(companyDetails, bankDetails, additionalDocuments);
  };

  return (
    <Container style={{ minHeight: "100vh" }} fluid>
      <PreviewImage
        modalShow={confirmationModalShow}
        handleClose={() => setConfirmationModalShow(false)}
        modalObj={modalObj}
        setModalObj={setModalObj}
      />
      <Tabs
        defaultActiveKey="companyDetails"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="companyDetails" title="Company Details">
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmitForm}>
                <Row className="mb-3">
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Name </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={companyDetails.name}
                      onChange={(Event) => {
                        setCompanyDetails({
                          ...companyDetails,
                          name: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Legal Name </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Legal Name"
                      value={companyDetails.legalName}
                      onChange={(Event) => {
                        setCompanyDetails({
                          ...companyDetails,
                          legalName: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={3} className="mb-3">
                    <Form.Label>Icon</Form.Label>
                    <Form.Control
                      id="company-icon"
                      type="file"
                      placeholder="Icon"
                      onChange={(event) =>
                        uploadFile(event, "icon", setCompanyDetails, "icon")
                      }
                      required
                    />
                    <Col>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="mx-1"
                        onClick={() =>
                          deleteFile("company-icon", companyDetails.icon)
                        }
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="mx-1"
                        onClick={() => previewImage("company-icon")}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Logo</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="Logo"
                      onChange={(event) =>
                        uploadFile(event, "logo", setCompanyDetails, "logo")
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Page Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Page Title"
                      value={companyDetails.pageTitle}
                      onChange={(Event) => {
                        setCompanyDetails({
                          ...companyDetails,
                          pageTitle: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      placeholder=" Select Type"
                      value={companyDetails.type}
                      onChange={(Event) => {
                        setCompanyDetails({
                          ...companyDetails,
                          type: Event.target.value,
                        });
                      }}
                      required
                    >
                      <option value="Proprietorship">Proprietorship</option>
                      <option value="Partnership Firm">Partnership Firm</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Owner</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Owner"
                      value={companyDetails.owner}
                      onChange={(Event) => {
                        setCompanyDetails({
                          ...companyDetails,
                          owner: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={companyDetails.email}
                      onChange={(Event) => {
                        setCompanyDetails({
                          ...companyDetails,
                          email: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Contact Number"
                      value={companyDetails.contactNumber}
                      onChange={(Event) => {
                        setCompanyDetails({
                          ...companyDetails,
                          contactNumber: +Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      value={companyDetails.address}
                      onChange={(Event) => {
                        setCompanyDetails({
                          ...companyDetails,
                          address: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">
                      SAVE
                    </Button>
                  </div>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="bankDetails" title="Bank Details">
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmitForm}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md={6}
                    lg={4}
                    style={{ marginBottom: "10px" }}
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={bankDetails.name}
                      onChange={(Event) => {
                        setBankDetails({
                          ...bankDetails,
                          name: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Branch</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Branch"
                      value={bankDetails.branch}
                      onChange={(Event) => {
                        setBankDetails({
                          ...bankDetails,
                          branch: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Account Number"
                      value={bankDetails.accountNumber}
                      onChange={(Event) => {
                        setBankDetails({
                          ...bankDetails,
                          accountNumber: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Account Holder Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Account Holder Name"
                      value={bankDetails.accountHolderName}
                      onChange={(Event) => {
                        setBankDetails({
                          ...bankDetails,
                          accountHolderName: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={4} className="mb-3">
                    <Form.Label>Account Type</Form.Label>
                    <Form.Select
                      placeholder=" Select Type"
                      value={bankDetails.accountType}
                      onChange={(Event) => {
                        setBankDetails({
                          ...bankDetails,
                          accountType: Event.target.value,
                        });
                      }}
                      required
                    >
                      <option value="Saving">Saving</option>
                      <option value="Current">Current</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row>
                  <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">
                      SAVE
                    </Button>
                  </div>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Tab>

        {/* <Tab eventKey="additionalDocument" title="Additional Document">
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmitForm}>
                <Row className="mb-3">
                  <Form.Group as={Row} lg="4" md="2" className="mt-3">
                    <Col>
                      <Form.Label>GST NO.</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="GST NO."
                        value={additionalDocuments.gstNumber}
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            gstNumber: Event.target.value
                          });
                        }}
                      />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>Pan No.</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Pan No."
                        value={additionalDocuments.panNumber}
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            panNumber: Event.target.value
                          });
                        }}
                      />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>Address Proof</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Address Proof"
                        value={additionalDocuments.addressProof}
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            addressProof: Event.target.value
                          });
                        }}
                      />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>Incorporate Certificate </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Incorporate Certificate"
                        value={additionalDocuments.incorporateCertificate}
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            incorporateCertificate: Event.target.value
                          });
                        }}
                      />
                    </Col>
                  </Form.Group>
                  ​
                  <Form.Group as={Row} lg="4" md="2" className="mt-3">
                    <Col>
                      <Form.Label> GST NO File</Form.Label>
                      <Form.Control required type="file" />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>Pan No. File</Form.Label>
                      <Form.Control required type="file" />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>Address Proof File </Form.Label>
                      <Form.Control required type="file" />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>Incorporate Certificate File </Form.Label>
                      <Form.Control required type="file" />
                    </Col>
                  </Form.Group>
                  ​
                  <Form.Group as={Row} lg="4" md="2" className="mt-3">
                    <Col>
                      <Form.Label>License</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="License"
                        value={additionalDocuments.license}
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            license: Event.target.value
                          });
                        }}
                      />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>service tax number</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="service tax number"
                        value={additionalDocuments.serviceTaxNumber}
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            serviceTaxNumber: Event.target.value
                          });
                        }}
                      />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>vat number</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="vat number"
                        value={additionalDocuments.vatTinNumber}
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            vatTinNumber: Event.target.value
                          });
                        }}
                      />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>Cheque</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Cheque"
                        value={additionalDocuments.cheque}
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            cheque: Event.target.value
                          });
                        }}
                      />
                    </Col>
                  </Form.Group>
                  ​
                  <Form.Group as={Row} lg="4" md="2" className="mt-3">
                    <Col>
                      <Form.Label> License File</Form.Label>
                      <Form.Control required type="file" />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>Service Tax Number File</Form.Label>
                      <Form.Control required type="file" />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>Vat Number File </Form.Label>
                      <Form.Control required type="file" />
                    </Col>
                    ​
                    <Col>
                      <Form.Label>Cheque File </Form.Label>
                      <Form.Control required type="file" />
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">
                      SAVE
                    </Button>
                  </div>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Tab> */}

        <Tab eventKey="additionalDocument" title="Additional Documents">
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmitForm}>
                <Row className="mb-3">
                  <Form.Group as={Col} md={6} lg={6} className="mb-3">
                    <Form.Label>GST Number</Form.Label>

                    <div className="d-flex flex-row ">
                      <Form.Control
                        type="text"
                        placeholder="GST Number"
                        value={additionalDocuments.gstNumber}
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            gstNumber: Event.target.value,
                          });
                        }}
                        required
                      />
                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            gstFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={6} className="mb-3 ">
                    <Form.Label>PAN Number</Form.Label>

                    <div className="d-flex flex-row">
                      <Form.Control
                        type="text"
                        placeholder="PAN Number"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            panNumber: Event.target.value,
                          });
                        }}
                        required
                      />
                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            panFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={6} className="mb-3">
                    <Form.Label>Address Proof</Form.Label>

                    <div className="d-flex flex-row">
                      <Form.Control
                        type="text"
                        placeholder="Address"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            addressProof: Event.target.value,
                          });
                        }}
                        required
                      />
                      <Form.Control
                        type="file"
                        placeholder="Address Proof"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            addressProofFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={6} className="mb-3">
                    <Form.Label>Incorporate Certificate</Form.Label>
                    <div className="d-flex flex-row">
                      <Form.Control
                        type="text"
                        placeholder="Incorporate Certificate"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            incorporateCertificate: Event.target.value,
                          });
                        }}
                        required
                      />
                      <Form.Control
                        type="file"
                        placeholder="Incorporate Certificate"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            incorporateCertificateFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={6} className="mb-3">
                    <Form.Label>License</Form.Label>

                    <div className="d-flex flex-row">
                      <Form.Control
                        type="text"
                        placeholder="License"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            license: Event.target.value,
                          });
                        }}
                        required
                      />
                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            licenseFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={6} className="mb-3">
                    <Form.Label>Service Tax Number</Form.Label>
                    <div className="d-flex flex-row">
                      <Form.Control
                        type="text"
                        placeholder="Service Tax Number"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            serviceTaxNumber: Event.target.value,
                          });
                        }}
                        required
                      />
                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            serviceTaxNumberFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={6} className="mb-3">
                    <Form.Label>VAT Tin Number</Form.Label>
                    <div className="d-flex flex-row">
                      <Form.Control
                        type="text"
                        placeholder="VAT Tin Number"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            vatTinNumber: Event.target.value,
                          });
                        }}
                        required
                      />
                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            vatTinNumberFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} md={6} lg={6} className="mb-3">
                    <Form.Label>Cheque</Form.Label>
                    <div className="d-flex flex-row">
                      <Form.Control
                        type="text"
                        placeholder="Cheque"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            cheque: Event.target.value,
                          });
                        }}
                        required
                      />

                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocuments({
                            ...additionalDocuments,
                            chequeFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>
                </Row>
                <Row>
                  <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">
                      Save
                    </Button>
                  </div>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default CompanyDetails;
