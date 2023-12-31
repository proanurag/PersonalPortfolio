import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Photo from "../assets/photo.jpg";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div
        className="body"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "600px",
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
            marginTop: "30px",
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
      </div>
      <Footer />
    </div>
  );
};

export default Home;
