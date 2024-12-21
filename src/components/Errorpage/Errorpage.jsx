import React from "react";
import "./Errorpage.css";
import { useNavigate } from "react-router-dom";
import errorImage from "../../assets/221513-P156QA-346.jpg";
const Errorpage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="error-content">
        <img src={errorImage} alt="Error 404" className="error-image" />
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <div className="actions">
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
