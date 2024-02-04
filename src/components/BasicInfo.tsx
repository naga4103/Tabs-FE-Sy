import { Row, Col, Form, Card, Button } from "react-bootstrap";

const BasicInfo = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Row>
            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control type="text" placeholder="Middle Name" />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={3}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" required />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Contact Number"
                required
              />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>Emergency Contact</Form.Label>
              <Form.Control
                type="number"
                placeholder="Emergency Contact"
                required
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>Self Blood Group</Form.Label>
              <Form.Control type="text" placeholder="Blood Group" required />
            </Form.Group>

            <Form.Group as={Col} md={6} lg={4}>
              <Form.Label>User Role</Form.Label>

              <div className="d-flex flex-row ">
                <Form.Select placeholder=" Select Role" required>
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
              <Form.Control type="password" placeholder="Password" required />
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

export default BasicInfo;
