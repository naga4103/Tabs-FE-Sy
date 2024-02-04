import { Row, Col, Card, Form, Button } from "react-bootstrap";

const BankDetails = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Row>
            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Bank Name</Form.Label>
              <Form.Control type="text" placeholder="Bank Name" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Branch Name</Form.Label>
              <Form.Control type="text" placeholder="Branch Name" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Account Number"
                required
              />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Account Holder Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Account Holder Name"
                required
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Ifsc Code</Form.Label>
              <Form.Control type="text" placeholder="Ifsc Code" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Account Type</Form.Label>
              <Form.Control type="text" placeholder="Account Type" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Cheque</Form.Label>
              <Form.Control type="number" placeholder="Cheque" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Cheque File</Form.Label>
              <Form.Control type="file" required />
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
  );
};

export default BankDetails;
