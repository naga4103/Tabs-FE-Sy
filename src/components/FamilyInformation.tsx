import { Row, Col, Card, Form, Button } from "react-bootstrap";

const FamilyInformation = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Row>
            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Spouse Name</Form.Label>
              <Form.Control type="text" placeholder="Spouse Name" />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Spouse Date Of Birth</Form.Label>
              <Form.Control type="date" placeholder="Spouse Date Of Birth" />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Child One Name</Form.Label>
              <Form.Control type="text" placeholder="Child One Name" />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Child One Date Of Birth</Form.Label>
              <Form.Control type="date" placeholder="Child One Date Of Birth" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Child Two Name</Form.Label>
              <Form.Control type="text" placeholder="Child Two Name" />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>ChildTwoDateOfBirth</Form.Label>
              <Form.Control type="date" placeholder="Child Two Date Of Birth" />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Mother Name</Form.Label>
              <Form.Control type="text" placeholder="Mother Name" />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Mother Date Of Birth</Form.Label>
              <Form.Control type="date" placeholder="Mother Date Of Birth" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>Father Name</Form.Label>
              <Form.Control type="text" placeholder="Father Name" />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>Father Date Of Birth</Form.Label>
              <Form.Control type="date" placeholder="Father Date Of Birth" />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>Marital Status</Form.Label>
              <Form.Control type="text" placeholder="Marital Status" required />
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

export default FamilyInformation;
