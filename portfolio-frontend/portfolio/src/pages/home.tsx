import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import bgImage from "../assets/bg-image.jpg";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "../components/carouselImage";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Header />
      </div>

      {/* Carousel Container */}
      <div style={{ flex: 1 }}>
        <Carousel>
          <Carousel.Item>
            <CarouselImage />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Background Image Container */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flex: 1,
          minHeight: "100vh",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
