import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import bgImage from "../assets/bg-image.jpg";

const Home: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
