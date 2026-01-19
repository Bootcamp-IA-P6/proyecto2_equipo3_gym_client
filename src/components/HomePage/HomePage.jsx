import imagenPortada from "../../assets/images/Portada.jpg"; // Esta es la variable
import "./HomePage.css"; 

function HomePage() {
  return (
    <div className="homepage">
      {/* Botones arriba a la izquierda */}
      <div className="top-left-buttons">
        <button className="btn">Admin</button>
        <button className="btn">Users</button>
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
