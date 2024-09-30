import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <Container name="Services" className="section services">
      <img src={require("../assets/services.jpg")} alt="" />
      <h1>
        <span>Our </span>Services
      </h1>
      <ul>
        <li>
          <p>
            <strong>Personalized Support Plans:</strong> Tailored support
            programs designed around the individual's needs and goals.
          </p>
        </li>
        <li>
          <p>
            <strong>Skill Development:</strong> Focused on enhancing daily
            living skills, communication, social interaction, and independence.
          </p>
        </li>
        <li>
          <p>
            <strong>Community Integration:</strong> Assisting individuals in
            becoming active members of their communities through social
            activities, volunteering, and supported employment.
          </p>
        </li>
        <li>
          <p>
            <strong>Family Support:</strong> Providing guidance, resources, and
            respite care to families and caregivers.
          </p>
        </li>
      </ul>
      <p className="last">
        At TeamZara, we are more than just a support provider—we are a dedicated
        partner on each individual's journey toward a more fulfilling life.
        Together, we can make a difference, one person at a time.
      </p>
    </Container>
  );
};

export default Services;
