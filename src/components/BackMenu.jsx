import "./BackMenu.css";
import { useNavigate } from "react-router-dom";

function BackMenu() {
    const navigate = useNavigate();
    const rutaHome = () => {
        navigate("/home");
    };

  return (
    <div className="back-menu">
      <button onClick={(e) => { e.preventDefault(); rutaHome(); }} type="button" className="back-button">
        Home
      </button>
    </div>
  );
}

export default BackMenu;