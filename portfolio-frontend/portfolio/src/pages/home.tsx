import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Photo from "../assets/photo.jpg";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Header />
      <div
        className="body"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "550px",
          width: "400px",
          backgroundColor: "#87CEEB",
          marginLeft: "50px",
          alignItems: "center",
        }}
      >
        <div
          className="photo"
          style={{
            width: "150px",
            height: "150px",
            overflow: "hidden",
            borderRadius: "50%",
            border: "2px solid #87CEEB",
            marginTop: "50px",
          }}
        >
          <div
            className="passport-photo-overlay"
            style={{
              position: "absolute",
              width: "150px",
              height: "150px",
              backgroundColor:
                "#87CEEB" /* Set the background color to match your website theme */,
              opacity: "0.2" /* Adjust the opacity as needed */,
              borderRadius: "50%",
            }}
          ></div>
          <img
            src={Photo}
            alt="Anurag Tiwari"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          className="name"
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Lato, sans-serif",
            fontWeight: "bold",
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          ANURAG TIWARI
        </div>
        <div
          className="line"
          style={{
            width: "60px",
            height: "5px",
            backgroundColor: "#3498db",
            margin: "20px auto 20px auto",
            borderRadius: "10%",
          }}
        ></div>
        <div
          className="name"
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Lato, sans-serif",
            fontWeight: "600",
            marginTop: "10px",
            fontSize: "15px",
          }}
        >
          ADVISORY ANALYST
        </div>
        <div
          className="name"
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Lato, sans-serif",
            fontWeight: "normal",
            marginTop: "10px",
            fontSize: "15px",
            width: "70%",
            textAlignLast: "center",
          }}
        >
          <p>
            Anurag is Advisory Analyst at Deloitte who works as a frontend
            engineer. He is a BCA graduate from University of Lucknow.{" "}
          </p>
        </div>
        <Button
          style={{
            backgroundColor: isHovered ? "#4682B4" : "#2E5A8B",
            color: "#FFFFFF",
            padding: "5px 15px",
            textDecoration: "none",
            display: "inline-block",
            transition: "background-color 0.3s", // Optional: Add a transition for a smooth hover effect
            marginTop: "20px",
            marginBottom: "5px",
            borderColor: "#4682B4",
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          Contact
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
