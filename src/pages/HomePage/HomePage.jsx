import imagenPortada from "../../assets/images/Fondo.jpg"; // Esta es la variable
import "./HomePage.css"; 
import { Link } from 'react-router-dom'; // 1. Importamos Link para poder navegar

function HomePage() {
  return (
    <div className="homepage">
      {/* Botones arriba a la izquierda */}
      <div className="top-left-buttons">
        <button className="btn">Registro</button>
       <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>

{/* NUEVO: Título a la derecha */}
  <div className="title-group">
  <h1 className="main-title">Gimnasio Gym</h1>
  <p className="subtitle">Bienvenido</p>
</div>

      {/* Imagen centrada */}
      <div className="center-image">
        {/* CORRECCIÓN: Usa la variable 'imagenPortada' entre llaves */}
        <img src={imagenPortada} alt="Portada" />
      </div>
    </div>
  );
}

export default HomePage;
