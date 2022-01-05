import React from "react";
import { Row, Carousel, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/dashboard");
  };

  return (
    <div
      className="container-fluid text-center"
      style={{ backgroundColor: "#1b1b1b" }}
    >
      <h1 id="title" className="text-center py-2">
        Auth App
      </h1>
      <h4 className="text-center py-2" style={{ color: "grey" }}>
        Simple auth app using django backend
      </h4>
      <Button variant="primary" onClick={handleClick}>
        Get started here
      </Button>
      <Row xl={3} lg={2} md={2} sm={1}>
        <Carousel
          style={{ width: 800, height: 500, margin: "auto", marginTop: 50 }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://codesealer.com/wp-content/uploads/2020/10/rest-api-code-main.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.artandlogic.com/wp-content/uploads/django.jpeg"
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://lh4.googleusercontent.com/sBaxDLU9jP8BOaB8vNld8Yu_dv7V3HZGBNBHiguET93-VXWxm1tO3J6PtAWEg46cBAicYGZtZEMwRdYO3NYJUKBrEIT18-KvRUAMIHzQ_Q1sagcKZa3hyKVR4hJaf4VpTV3hoAoa"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
    </div>
  );
}

export default Home;
