import { Row, Col, Card, Form, Button } from "react-bootstrap";

const AdditionalDocuments = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Row>
            <Form.Group as={Col} md={6} lg={6}>
              <Form.Label>Aadhar Card</Form.Label>

              <div className="d-flex flex-row">
                <Form.Control
                  type="number"
                  placeholder="Aadhar Number"
                  required
                />

                <Form.Control
                  type="file"
                  className="align-self-center"
                  required
                />
              </div>
            </Form.Group>

            <Form.Group as={Col} md={6} lg={6}>
              <Form.Label>Pan Card</Form.Label>

              <div className="d-flex flex-row">
                <Form.Control type="text" placeholder="Pan Number" required />
                <Form.Control
                  type="file"
                  className="align-self-center"
                  required
                />
              </div>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md={6} lg={6}>
              <Form.Label>Current Address</Form.Label>

              <div className="d-flex flex-row">
                <Form.Control type="text" placeholder="Current Address" />
                <Form.Control type="file" className="align-self-center" />
              </div>
            </Form.Group>

            <Form.Group as={Col} md={6} lg={6}>
              <Form.Label>Permanent Address</Form.Label>

              <div className="d-flex flex-row">
                <Form.Control type="text" placeholder="Permanent Address" />
                <Form.Control type="file" className="align-self-center" />
              </div>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md={6} lg={6}>
              <Form.Label>Uan Number</Form.Label>

              <div className="d-flex flex-row">
                <Form.Control type="number" placeholder="Uan Number" required />
                <Form.Control
                  type="file"
                  className="align-self-center"
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
                  required
                />
                <Form.Control
                  type="file"
                  className="align-self-center"
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
                  required
                />
                <Form.Control
                  type="file"
                  className="align-self-center"
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
  );
};

export default AdditionalDocuments;
