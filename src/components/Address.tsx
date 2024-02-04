import { Row, Col, Form, Card, Button } from "react-bootstrap";

const Address = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Card.Header>CURRENT ADDRESS</Card.Header>

          <Row>
            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Door Number</Form.Label>
              <Form.Control type="text" placeholder="Door Number" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Street</Form.Label>
              <Form.Control type="text" placeholder="Street" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>District</Form.Label>
              <Form.Control type="text" placeholder="District" required />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>Pin Code</Form.Label>
              <Form.Control type="number" placeholder="Pin Code" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Country" required />
            </Form.Group>
          </Row>

          <Card.Header>PERMANENT ADDRESS</Card.Header>

          <Row>
            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Door Number</Form.Label>
              <Form.Control type="text" placeholder="Door Number" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Street</Form.Label>
              <Form.Control type="text" placeholder="Street" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>District</Form.Label>
              <Form.Control type="text" placeholder="District" required />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>Pin Code</Form.Label>
              <Form.Control type="number" placeholder="Pin Code" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Country" required />
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

export default Address;
