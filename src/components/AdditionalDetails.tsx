import { Row, Col, Form, Card, Button } from "react-bootstrap";

const AdditionalDetails = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Row>
            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Date Of Joining</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date Of Joining"
                required
              />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Designation" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" placeholder="Department" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Reporting Manager</Form.Label>
              <Form.Control
                type="text"
                placeholder="Reporting Manager"
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
                required
              />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Official Contact</Form.Label>
              <Form.Control
                type="number"
                placeholder="Official Contact"
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
  );
};

export default AdditionalDetails;
