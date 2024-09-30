import { Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Container name="Contact" className="section contact">
      <Row>
        <Col sm={12} md={6} className="mb-3 p-4">
          <h1>Contact Us</h1>
          <Form
            action="https://formsubmit.co/ear4007@yahoo.com"
            method="POST"
            className="d-flex flex-column"
          >
            <Form.Control type="text" name="Name" placeholder="Name" required />

            <Form.Control
              type="number"
              name="Phone"
              placeholder="Phone"
              required
            />

            <Form.Control
              type="email"
              name="Email"
              placeholder="Email"
              required
            />

            <Form.Control
              type="text"
              name="Subject"
              placeholder="Subject"
              required
            />

            <Form.Control
              as="textarea"
              name="Message"
              rows={2}
              placeholder="Message..."
              required
            />

            <button className="form-control btn btn-success">Send</button>
          </Form>
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={require("../assets/contact.jpg")} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
