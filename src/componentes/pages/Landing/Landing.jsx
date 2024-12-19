import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <div className="divLanding">
        <h1>Bitácora</h1>
        <Link to="/login">
          <button>Acceder</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
