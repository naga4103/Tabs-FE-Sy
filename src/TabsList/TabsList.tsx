import { FormEvent, useState } from "react";

import {
  Container,
  Row,
  Col,
  Tab,
  Tabs,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import "./TabsList.css";

interface basicInformation {
  employeeCode: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  contactNumber: number;
  emergencyContactNumber: number;
  bloodGroup: string;
  userRole: string;
  password: string;
}

interface addressInformation {
  doorNo: string;
  street: string;
  city: string;
  district: string;
  pincode: number;
  state: string;
  country: string;
}

interface bankDetails {
  bankName: string;
  branchName: string;
  bankAccountNumber: number;
  bankAccountHolderName: string;
  ifscCode: string;
  accountType: string;
  cheque: number;
  chequeFile: string;
}

interface additionalDocuments {
  aadharNumber: number;
  aadharFile: string;
  panNumber: number;
  panFile: string;
  currentAddressAd: string;
  currentAddressAdFile: string;
  permanentAddressAd: string;
  permanentAddressAdFile: string;
  uanNumber: number;
  uanFile: string;
  passportNumber: string;
  passportFile: string;
  dob: number;
  dobFile: string;
}

interface familyInformation {
  spouseName: string;
  spouseDob: number;
  childOneName: string;
  childOneDob: number;
  childTwoName: string;
  childTwoDob: number;
  motherName: string;
  motherDob: number;
  fatherName: string;
  fatherDob: number;
  maritalStatus: string;
}

interface additionalDetails {
  dateOfJoining: number;
  designation: string;
  department: string;
  reportingManager: string;
  officialEmail: string;
  officialContact: number;
}

const TabsList = () => {
  const [basicInfoDetails, setBasicInfoDetails] = useState<basicInformation>({
    employeeCode: 0,
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contactNumber: 0,
    emergencyContactNumber: 0,
    bloodGroup: "",
    userRole: "",
    password: "",
  });

  const [currentAddressDetails, setCurrentAddressDetails] =
    useState<addressInformation>({
      doorNo: "",
      street: "",
      city: "",
      district: "",
      pincode: 0,
      state: "",
      country: "",
    });

  const [permAddressDetails, setPermAddressDetails] =
    useState<addressInformation>({
      doorNo: "",
      street: "",
      city: "",
      district: "",
      pincode: 0,
      state: "",
      country: "",
    });

  const [bankInfoDetails, setBankInfoDetails] = useState<bankDetails>({
    bankName: "",
    branchName: "",
    bankAccountNumber: 0,
    bankAccountHolderName: "",
    ifscCode: "",
    accountType: "",
    cheque: 0,
    chequeFile: "",
  });

  const [additionalDocumentsDetails, setAdditionalDocumentsDetails] =
    useState<additionalDocuments>({
      aadharNumber: 0,
      aadharFile: "",
      panNumber: 0,
      panFile: "",
      currentAddressAd: "",
      currentAddressAdFile: "",
      permanentAddressAd: "",
      permanentAddressAdFile: "",
      uanNumber: 0,
      uanFile: "",
      passportNumber: "",
      passportFile: "",
      dob: 0,
      dobFile: "",
    });

  const [familyInfoDetails, setFamilyInfoDetails] = useState<familyInformation>(
    {
      spouseName: "",
      spouseDob: 0,
      childOneName: "",
      childOneDob: 0,
      childTwoName: "",
      childTwoDob: 0,
      motherName: "",
      motherDob: 0,
      fatherName: "",
      fatherDob: 0,
      maritalStatus: "",
    }
  );

  const [additionalInfoDetails, setAdditionalInfoDetails] =
    useState<additionalDetails>({
      dateOfJoining: 0,
      designation: "",
      department: "",
      reportingManager: "",
      officialEmail: "",
      officialContact: 0,
    });

  const onSubmitForm = (Event: FormEvent<HTMLFormElement>) => {
    Event.preventDefault();
    console.log("hello");
  };

  return (
    <Container style={{ height: "100vh" }} fluid>
      <Tabs
        defaultActiveKey="basicInformation"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="basicInformation" title="Basic Information">
          {/* BASIC INFO */}
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmitForm}>
                <Row>
                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      onChange={(Event) => {
                        setBasicInfoDetails({
                          ...basicInfoDetails,
                          firstName: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Middle Name"
                      onChange={(Event) => {
                        setBasicInfoDetails({
                          ...basicInfoDetails,
                          middleName: Event.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      onChange={(Event) => {
                        setBasicInfoDetails({
                          ...basicInfoDetails,
                          lastName: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  {/* </Row> */}

                  {/* <Row> */}
                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      onChange={(Event) => {
                        setBasicInfoDetails({
                          ...basicInfoDetails,
                          email: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Contact Number"
                      onChange={(Event) => {
                        setBasicInfoDetails({
                          ...basicInfoDetails,
                          contactNumber: +Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Emergency Contact</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Emergency Contact"
                      onChange={(Event) => {
                        setBasicInfoDetails({
                          ...basicInfoDetails,
                          emergencyContactNumber: +Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  {/* </Row> */}

                  {/* <Row> */}
                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Self Blood Group</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Blood Group"
                      onChange={(Event) => {
                        setBasicInfoDetails({
                          ...basicInfoDetails,
                          bloodGroup: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>User Role</Form.Label>

                    <div className="d-flex flex-row ">
                      <Form.Select
                        placeholder=" Select Role"
                        onChange={(Event) => {
                          console.log(Event.target.value);
                          setBasicInfoDetails({
                            ...basicInfoDetails,
                            userRole: Event.target.value,
                          });
                        }}
                        required
                      >
                        <option value="Guest">Guest</option>
                        <option value="Admin">Admin</option>
                        <option value="User"> User</option>
                      </Form.Select>

                      <Form.Text className="align-self-center">
                        View Permissions
                      </Form.Text>
                    </div>
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(Event) => {
                        setBasicInfoDetails({
                          ...basicInfoDetails,
                          password: Event.target.value,
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
        <Tab eventKey="address" title="Address">
          {/* ADDRESS */}
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmitForm}>
                <Card.Header>CURRENT ADDRESS</Card.Header>

                <Row>
                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Door Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Door Number"
                      onChange={(Event) => {
                        setCurrentAddressDetails({
                          ...currentAddressDetails,
                          doorNo: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Street"
                      onChange={(Event) => {
                        setCurrentAddressDetails({
                          ...currentAddressDetails,
                          street: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      onChange={(Event) => {
                        setCurrentAddressDetails({
                          ...currentAddressDetails,
                          city: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="District"
                      onChange={(Event) => {
                        setCurrentAddressDetails({
                          ...currentAddressDetails,
                          district: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  {/*</Row> */}

                  {/*  <Row> */}
                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Pin Code"
                      onChange={(Event) => {
                        setCurrentAddressDetails({
                          ...currentAddressDetails,
                          pincode: +Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      onChange={(Event) => {
                        setCurrentAddressDetails({
                          ...currentAddressDetails,
                          state: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Country"
                      onChange={(Event) => {
                        setCurrentAddressDetails({
                          ...currentAddressDetails,
                          country: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                </Row>

                <Card.Header>PERMANENT ADDRESS</Card.Header>

                <Row>
                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Door Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Door Number"
                      onChange={(Event) => {
                        setPermAddressDetails({
                          ...permAddressDetails,
                          doorNo: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Street"
                      onChange={(Event) => {
                        setPermAddressDetails({
                          ...permAddressDetails,
                          street: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      onChange={(Event) => {
                        setPermAddressDetails({
                          ...permAddressDetails,
                          city: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="District"
                      onChange={(Event) => {
                        setPermAddressDetails({
                          ...permAddressDetails,
                          district: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  {/* </Row> */}

                  {/*    <Row>*/}
                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Pin Code"
                      onChange={(Event) => {
                        setPermAddressDetails({
                          ...permAddressDetails,
                          pincode: +Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      onChange={(Event) => {
                        setPermAddressDetails({
                          ...permAddressDetails,
                          state: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Country"
                      onChange={(Event) => {
                        setPermAddressDetails({
                          ...permAddressDetails,
                          country: Event.target.value,
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
                <Row>
                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Bank Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Bank Name"
                      onChange={(Event) => {
                        setBankInfoDetails({
                          ...bankInfoDetails,
                          bankName: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Branch Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Branch Name"
                      onChange={(Event) => {
                        setBankInfoDetails({
                          ...bankInfoDetails,
                          branchName: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Account Number"
                      onChange={(Event) => {
                        setBankInfoDetails({
                          ...bankInfoDetails,
                          bankAccountNumber: +Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Account Holder Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Account Holder Name"
                      onChange={(Event) => {
                        setBankInfoDetails({
                          ...bankInfoDetails,
                          bankAccountHolderName: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  {/* </Row> */}

                  {/* <Row> */}
                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Ifsc Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ifsc Code"
                      onChange={(Event) => {
                        setBankInfoDetails({
                          ...bankInfoDetails,
                          ifscCode: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Account Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Account Type"
                      onChange={(Event) => {
                        setBankInfoDetails({
                          ...bankInfoDetails,
                          accountType: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Cheque</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Cheque"
                      onChange={(Event) => {
                        setBankInfoDetails({
                          ...bankInfoDetails,
                          cheque: +Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Cheque File</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(Event) => {
                        console.log(Event.target.value);
                        setBankInfoDetails({
                          ...bankInfoDetails,
                          chequeFile: Event.target.value,
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
        <Tab eventKey="additionalDocuments" title="Additional Documents">
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmitForm}>
                <Row>
                  <Form.Group as={Col} md={6} lg={6}>
                    <Form.Label>Aadhar Card</Form.Label>

                    <div className="d-flex flex-row">
                      <Form.Control
                        type="number"
                        placeholder="Aadhar Number"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            aadharNumber: +Event.target.value,
                          });
                        }}
                        required
                      />

                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            aadharFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={6}>
                    <Form.Label>Pan Card</Form.Label>

                    <div className="d-flex flex-row">
                      <Form.Control
                        type="text"
                        placeholder="Pan Number"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            panNumber: +Event.target.value,
                          });
                        }}
                        required
                      />
                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            panFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} md={6} lg={6}>
                    <Form.Label>Current Address</Form.Label>

                    <div className="d-flex flex-row">
                      <Form.Control
                        type="text"
                        placeholder="Current Address"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            currentAddressAd: Event.target.value,
                          });
                        }}
                      />
                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            currentAddressAdFile: Event.target.value,
                          });
                        }}
                      />
                    </div>
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={6}>
                    <Form.Label>Permanent Address</Form.Label>

                    <div className="d-flex flex-row">
                      <Form.Control
                        type="text"
                        placeholder="Permanent Address"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            permanentAddressAd: Event.target.value,
                          });
                        }}
                      />
                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            permanentAddressAdFile: Event.target.value,
                          });
                        }}
                      />
                    </div>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} md={6} lg={6}>
                    <Form.Label>Uan Number</Form.Label>

                    <div className="d-flex flex-row">
                      <Form.Control
                        type="number"
                        placeholder="Uan Number"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            uanNumber: +Event.target.value,
                          });
                        }}
                        required
                      />
                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            uanFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={6}>
                    <Form.Label>Passport Number</Form.Label>

                    <div className="d-flex flex-row">
                      <Form.Control
                        type="text"
                        placeholder="Passport Number"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            passportNumber: Event.target.value,
                          });
                        }}
                        required
                      />
                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            passportFile: Event.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} md={6} lg={6}>
                    <Form.Label>Date Of Birth</Form.Label>

                    <div className="d-flex flex-row">
                      <Form.Control
                        type="date"
                        placeholder="Date Of Birth"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            dob: new Date(Event.target.value).getTime(),
                          });
                        }}
                        required
                      />
                      <Form.Control
                        type="file"
                        className="align-self-center"
                        onChange={(Event) => {
                          setAdditionalDocumentsDetails({
                            ...additionalDocumentsDetails,
                            dobFile: Event.target.value,
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
                      SAVE
                    </Button>
                  </div>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="familyInformation" title="Family Information">
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmitForm}>
                <Row>
                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Spouse Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Spouse Name"
                      onChange={(Event) => {
                        setFamilyInfoDetails({
                          ...familyInfoDetails,
                          spouseName: Event.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Spouse Date Of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Spouse Date Of Birth"
                      onChange={(Event) => {
                        setFamilyInfoDetails({
                          ...familyInfoDetails,
                          spouseDob: new Date(Event.target.value).getTime(),
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Child One Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Child One Name"
                      onChange={(Event) => {
                        setFamilyInfoDetails({
                          ...familyInfoDetails,
                          childOneName: Event.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Child One Date Of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Child One Date Of Birth"
                      onChange={(Event) => {
                        setFamilyInfoDetails({
                          ...familyInfoDetails,
                          childOneDob: new Date(Event.target.value).getTime(),
                        });
                      }}
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Child Two Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Child Two Name"
                      onChange={(Event) => {
                        setFamilyInfoDetails({
                          ...familyInfoDetails,
                          childTwoName: Event.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Child Two Date Of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Child Two Date Of Birth"
                      onChange={(Event) => {
                        setFamilyInfoDetails({
                          ...familyInfoDetails,
                          childTwoDob: new Date(Event.target.value).getTime(),
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Mother Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Mother Name"
                      onChange={(Event) => {
                        setFamilyInfoDetails({
                          ...familyInfoDetails,
                          motherName: Event.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Mother Date Of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Mother Date Of Birth"
                      onChange={(Event) => {
                        setFamilyInfoDetails({
                          ...familyInfoDetails,
                          motherDob: new Date(Event.target.value).getTime(),
                        });
                      }}
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Father Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Father Name"
                      onChange={(Event) => {
                        setFamilyInfoDetails({
                          ...familyInfoDetails,
                          fatherName: Event.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Father Date Of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Father Date Of Birth"
                      onChange={(Event) => {
                        setFamilyInfoDetails({
                          ...familyInfoDetails,
                          fatherDob: new Date(Event.target.value).getTime(),
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={4}>
                    <Form.Label>Marital Status</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Marital Status"
                      onChange={(Event) => {
                        setFamilyInfoDetails({
                          ...familyInfoDetails,
                          maritalStatus: Event.target.value,
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
        <Tab eventKey="additionalDetails" title="Additional Details">
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmitForm}>
                <Row>
                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Date Of Joining</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Date Of Joining"
                      onChange={(Event) => {
                        setAdditionalInfoDetails({
                          ...additionalInfoDetails,
                          dateOfJoining: new Date(Event.target.value).getTime(),
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Designation"
                      onChange={(Event) => {
                        setAdditionalInfoDetails({
                          ...additionalInfoDetails,
                          designation: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Department"
                      onChange={(Event) => {
                        setAdditionalInfoDetails({
                          ...additionalInfoDetails,
                          department: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Reporting Manager</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Reporting Manager"
                      onChange={(Event) => {
                        setAdditionalInfoDetails({
                          ...additionalInfoDetails,
                          reportingManager: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Official Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Official Email"
                      onChange={(Event) => {
                        setAdditionalInfoDetails({
                          ...additionalInfoDetails,
                          officialEmail: Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} lg={3}>
                    <Form.Label>Official Contact</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Official Contact"
                      onChange={(Event) => {
                        setAdditionalInfoDetails({
                          ...additionalInfoDetails,
                          officialContact: +Event.target.value,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <Row>
                    <div className="d-flex justify-content-center">
                      <Button variant="primary" type="submit">
                        SAVE
                      </Button>
                    </div>
                  </Row>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TabsList;
