import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Button } from "react-bootstrap";
import Photo from "../assets/photo.jpg";
import { ProgressBar } from "react-bootstrap";

const AboutUs: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#333",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Header />
      <div className="body" style={{ display: "flex", flexDirection: "row" }}>
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
            color: "#cccccc",
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
            }}
          >
            EXPERIENCE
          </div>
          <div
            style={{
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
              transition: "background-color 0.3s",
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
        <div
          className="name"
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "5%",
            width: "30%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                color: "#ccc",
                fontSize: "40px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "bold",
              }}
            >
              SKILLS
            </p>

            <p
              style={{
                color: "#ccc",
                fontSize: "20px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "bold",
              }}
            >
              REACTJS :
            </p>
            <p
              style={{
                color: "#ccc",
                fontSize: "20px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "bold",
              }}
            >
              DJANGO :
            </p>
            <p
              style={{
                color: "#ccc",
                fontSize: "20px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "bold",
              }}
            >
              CHARTJS :
            </p>
            <p
              style={{
                color: "#ccc",
                fontSize: "20px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "bold",
              }}
            >
              TYPESCRIPT :
            </p>
            <p
              style={{
                color: "#ccc",
                fontSize: "20px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "bold",
              }}
            >
              REDUX :
            </p>
            <p
              style={{
                color: "#ccc",
                fontSize: "20px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "bold",
              }}
            >
              REACT QUERY :
            </p>
            <p
              style={{
                color: "#ccc",
                fontSize: "20px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "bold",
              }}
            >
              STYLED COMPONENTS :
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              marginTop: "82px",
              marginLeft: "30px",
            }}
          >
            <ProgressBar
              now={70}
              variant="success"
              style={{ marginBottom: "30px" }}
            />
            <ProgressBar
              now={60}
              variant="success"
              style={{ marginBottom: "30px" }}
            />
            <ProgressBar
              now={50}
              variant="success"
              style={{ marginBottom: "30px" }}
            />

            <ProgressBar
              now={60}
              variant="success"
              style={{ marginBottom: "30px" }}
            />

            <ProgressBar
              now={50}
              variant="success"
              style={{ marginBottom: "30px" }}
            />

            <ProgressBar
              now={65}
              variant="success"
              style={{ marginBottom: "30px" }}
            />

            <ProgressBar
              now={60}
              variant="success"
              style={{ marginBottom: "30px" }}
            />
          </div>
          <div
            style={{
              color: "#fff",
              marginLeft: "20px",
              display: "flex",
              flexDirection: "column",
              marginTop: "78px",
            }}
          >
            <p style={{ marginBottom: "22px" }}> 70%</p>
            <p style={{ marginBottom: "22px" }}>60%</p>
            <p style={{ marginBottom: "22px" }}>50%</p>
            <p style={{ marginBottom: "22px" }}>60%</p>
            <p style={{ marginBottom: "22px" }}>50%</p>
            <p style={{ marginBottom: "22px" }}>65%</p>
            <p style={{ marginBottom: "22px" }}>60%</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
