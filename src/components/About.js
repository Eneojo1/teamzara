import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container name="About" className="section about">
      <img src={require("../assets/team.jpg")} alt="" />
      <h1>About Us</h1>
      <p>
        At TeamZara Limited, we are dedicated to providing exceptional,
        compassionate and personalized support for individuals with learning
        disabilities. Our mission is to empower every person we serve by
        fostering independence, enhancing life skills, and promoting a sense of
        belonging in the community. We believe that everyone deserves the
        opportunity to thrive, regardless of their challenges.
      </p>

      <p>
        With a team of highly trained and caring professionals, we offer a range
        of services tailored to meet the unique needs of each individual. Our
        approach is person-centered, focusing on the strengths, preferences, and
        goals of those we support. We work closely with families, caregivers,
        and other professionals to create a supportive environment that
        encourages personal growth and development.
      </p>

      <h2>Our Values</h2>
      <Row className="values">
        <Col sm={12} md={6} lg={4} className="value">
          <div className="marker">1</div>
          <p>
            <strong>Empowerment:</strong> We believe in the potential of every
            individual and strive to empower them to achieve their fullest
            potential.
          </p>
        </Col>
        <Col sm={12} md={6} lg={4} className="value">
          <div className="marker">2</div>
          <p>
            <strong>Compassion:</strong> We provide our services with kindness,
            respect, and understanding, ensuring that each person feels valued
            and supported.
          </p>
        </Col>
        <Col sm={12} md={6} lg={4} className="value">
          <div className="marker">3</div>
          <p>
            <strong>Collaboration:</strong> We work hand-in-hand with families,
            communities, and other stakeholders to deliver holistic and
            integrated support services.
          </p>
        </Col>
        <Col sm={12} md={6} lg={4} className="value">
          <div className="marker">4</div>
          <p>
            <strong>Inclusivity:</strong> We promote inclusivity and work
            towards creating a world where individuals with learning
            disabilities are recognized for their unique abilities and
            contributions.
          </p>
        </Col>

        <Col sm={12} md={6} lg={4} className="value">
          <div className="marker">5</div>
          <p>
            <strong>Quality:</strong> Our commitment to excellence ensures that
            our services are of the highest standard, continually evolving to
            meet the changing needs of those we serve.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
