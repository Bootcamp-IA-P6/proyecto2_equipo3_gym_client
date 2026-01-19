import "./Users.css";

function UsersList() {
  return (
    <div className="users-page">
      <h1>Usuarios</h1>
      <button className="btn-primary">Nuevo usuario</button>

      <div className="users-list">
        <div className="user-card">Juan Pérez</div>
        <div className="user-card">María López</div>
      </div>
    </div>
  );
}

export default UsersList;
