import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [instagramUrl, setInstagramUrl] = useState<string>();
  const [linkedInUrl, setLinkedInUrl] = useState<string>();
  const [facebookUrl, setFacebookUrl] = useState<string>();
  const [xUrl, setXUrl] = useState<string>();
  const [youtubeUrl, setYoutubeUrl] = useState<string>();
  const [githubUrl, setGithubUrl] = useState<string>();

  useEffect(() => {
    setInstagramUrl("https://www.instagram.com/anurag._tiwari._/");
    setLinkedInUrl("https://www.linkedin.com/in/anurag-tiwari-1a0a83163/");
    setFacebookUrl("https://www.facebook.com/profile.php?id=100008153766584");
    setXUrl("https://twitter.com/ANURAGT01527006");
    setYoutubeUrl("https://www.youtube.com/@anuragtiwari2511");
    setGithubUrl("https://github.com/proanurag");
  }, []);
  return (
    <div
      className="div"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        height: "auto",
        backgroundColor: "#87CEEB",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "25px",
        }}
      >
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            color="#333333"
            style={{ marginRight: "40px" }}
          />
        </a>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="2x"
            color="#333333"
            style={{ marginRight: "40px" }}
          />
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            color="#333333"
            style={{ marginRight: "40px", marginTop: "2px" }}
          />
        </a>
        <a href={xUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faXTwitter}
            size="2x"
            color="#333333"
            style={{ marginRight: "40px" }}
          />
        </a>
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faYoutube}
            size="2x"
            color="#333333"
            style={{ marginRight: "40px" }}
          />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" color="#333333" />
        </a>
      </div>

      <div
        className="copyright"
        style={{
          fontSize: "11px",
          fontWeight: "500",
          fontFamily: "Times New Romans, monospace",
          marginTop: "20px",
          color: "#000",
        }}
      >
        © Copyright 2023 - 2028
      </div>
      <div
        className="rights"
        style={{
          fontSize: "11px",
          fontWeight: "500",
          marginBottom: "20px",
          fontFamily: "Times New Romans, monospace",
          color: "#000",
        }}
      >
        All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
