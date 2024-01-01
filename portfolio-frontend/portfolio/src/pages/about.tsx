import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Button } from "react-bootstrap";
import Photo from "../assets/photo.jpg";

const AboutUs: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Header />
      <div
        className="body"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "650px",
          width: "400px",
          backgroundColor: "#1a1a1a",
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
            border: "2px solid #1a1a1a",
            marginTop: "50px",
          }}
        >
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
            color: "#cccccc",
          }}
        >
          ANURAG TIWARI
        </div>
        <div
          className="line"
          style={{
            width: "60px",
            height: "5px",
            backgroundColor: "#fff",
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
            color: "#cccccc",
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
            color: "#cccccc",
          }}
        >
          <p style={{ textAlign: "center" }}>
            Anurag is Advisory Analyst at Deloitte who works as a frontend
            engineer. He is a BCA graduate from University of Lucknow.{" "}
          </p>
        </div>
        <div
          className="name"
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Lato, sans-serif",
            fontWeight: "600",

            marginBottom: "10px",
            fontSize: "15px",
            color: "#cccccc",
          }}
        >
          EXPERIENCE
        </div>
        <div
          style={{
            color: "#cccccc",
            fontWeight: "bold",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              (1) Advisory Analyst (JUL' 2022 - Present) <br />
              Deloitte USI
            </li>
            <br />
            <li>
              (2) Advisory Associate Analyst (Jul' 2021- Jun' 2022)
              <br />
              Deloitte USI
            </li>
          </ul>
        </div>
        <Button
          style={{
            backgroundColor: isHovered ? "#ffa500" : "#ff5722",
            color: "#cccccc",
            padding: "5px 15px",
            textDecoration: "none",
            display: "inline-block",
            transition: "background-color 0.3s", // Optional: Add a transition for a smooth hover effect
            marginTop: "10px",
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

export default AboutUs;
