import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container name="Home" className="section">
      <div className="home">
        <div
          className="home-background-image-container"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img src={require("../assets/background.jpg")} alt="" />
        </div>
        <div
          className="text"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <h1>Welcome to TeamZara Limited</h1>
          <h3>
            Providing compassionate suppot services with a personal touch.
          </h3>
        </div>
      </div>
    </Container>
  );
};

export default Home;
