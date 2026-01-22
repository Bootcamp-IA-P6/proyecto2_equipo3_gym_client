import React, { useState, useEffect } from 'react';
import userService from '../../services/userService';
import classService from '../../services/classService';
import trainerService from '../../services/trainerService';
import userClassService from '../../services/userClassService';
import './FormRegisterUsuario.css';


const FormRegisterUsuario = ({ onSuccess, onClose, userToEdit }) => {
  // --- ESTADOS ---
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'user', 
  });

  // Estados para selección (SOLO PARA ALTA DE CLIENTE)
  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedTrainerId, setSelectedTrainerId] = useState(''); 

  // Estado para especialidad (ENTRENADORES)
  const [trainerSpecialty, setTrainerSpecialty] = useState('');

  // Listas de datos
  const [classesList, setClassesList] = useState([]);
  const [trainersList, setTrainersList] = useState([]); 

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // --- 1. CARGA DE LISTAS (Siempre necesaria) ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cData = await classService.getAllClasses();
        setClassesList(cData);
        const tData = await trainerService.getAllTrainers();
        setTrainersList(tData);
      } catch (err) {
        console.error("Error cargando listas:", err);
      }
    };
    fetchData();
  }, []);

  // --- 2. DETECTAR SI ESTAMOS EDITANDO ---
  useEffect(() => {
    if (userToEdit) {
      
      setFormData({
        name: userToEdit.name || '',
        last_name: userToEdit.last_name || '', 
        email: userToEdit.email || '',
        password: '', // La contraseña se deja vacía por seguridad
        role: userToEdit.role || 'user',
      });
      
    }
  }, [userToEdit]);

  // --- MANEJADORES ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (userToEdit) {
      
        const dataToUpdate = { ...formData };
        
        // IMPORTANTE: Si la contraseña está vacía, la quitamos para no sobrescribirla con ""
        if (!dataToUpdate.password) delete dataToUpdate.password;

        // Llamamos al servicio de ACTUALIZAR
        await userService.updateUser(userToEdit.id, dataToUpdate);
        
        // (Aquí podrías añadir lógica extra si quisieras actualizar también el entrenador, etc.)
        alert("Usuario actualizado correctamente");

      } else {
        
        // 1. Crear el usuario
        const userResponse = await userService.createUser(formData);
        const newUserId = userResponse.id || userResponse.data?.id;

        if (!newUserId) throw new Error("No se pudo obtener ID del usuario.");

        // 2. Si es Cliente (user) -> Inscribir en Clase y Entrenador
        if (formData.role === 'user') {
          if (selectedClassId && selectedTrainerId) {
              await userClassService.enrollUser({
                user_id: newUserId,
                class_id: parseInt(selectedClassId),
                trainer_id: parseInt(selectedTrainerId)
              });
          }
        }

        // 3. Si es Entrenador -> Crear perfil
        if ((formData.role === 'trainer' || formData.role === 'admin') && trainerSpecialty) {
          await trainerService.createTrainer({
            user_id: newUserId,
            specialty: trainerSpecialty
          });
        }
        alert("Usuario registrado correctamente");
      }

      setLoading(false);
      if (onSuccess) onSuccess();
      if (onClose) onClose();

    } catch (err) {
      console.error(err);
      setLoading(false);
      const msg = err.response?.data?.detail 
        ? JSON.stringify(err.response.data.detail) 
        : err.message;
      setError("Error: " + msg);
    }
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <h1>{userToEdit ? 'Editar Usuario' : 'Alta de Usuario'}</h1>
        <p>{userToEdit ? 'Modifica los datos existentes' : 'Configuración de nuevo perfil'}</p>
      </header>

      {error && <div className="error-msg">{error}</div>}

      <form onSubmit={handleSubmit}>
        
        {/* SECCIÓN 1: DATOS DE ACCESO */}
        <div className="form-section">
          <h3>Datos de Acceso y Rol</h3>
          <div className="form-grid">
            <div className="input-box">
              <label>Tipo de Perfil</label>
              {/* Deshabilitamos cambiar rol al editar para evitar errores de integridad */}
              <select 
                name="role" 
                value={formData.role} 
                onChange={handleChange}
                disabled={!!userToEdit} 
              >
                <option value="user">Cliente (Alumno)</option>
                <option value="trainer">Entrenador (Profesor)</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <div className="input-box">
              <label>Contraseña {userToEdit && "(Opcional)"}</label>
              <input 
                type="password" 
                name="password" 
                placeholder={userToEdit ? "Dejar vacía para no cambiar" : "********"} 
                required={!userToEdit} // Solo obligatoria al crear
                value={formData.password} 
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        {/* SECCIÓN 2: INFORMACIÓN PERSONAL */}
        <div className="form-section">
          <h3>Información Personal</h3>
          <div className="form-grid">
            <div className="input-box">
              <label>Nombre</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="input-box">
              <label>Apellidos</label>
              <input type="text" name="last_name" required value={formData.last_name} onChange={handleChange} />
            </div>
            <div className="input-box" style={{ gridColumn: 'span 2' }}>
              <label>Email (Usuario)</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* --- SECCIONES DINÁMICAS (SOLO VISIBLES AL CREAR) --- */}
        {!userToEdit && formData.role === 'user' && (
          <div className="form-section dynamic-section">
            <h3>Inscripción Inicial</h3>
            <div className="form-grid">
              
              {/* SELECTOR DE CLASE */}
              <div className="input-box">
                <label>Seleccionar Clase</label>
                <select 
                  value={selectedClassId} 
                  onChange={(e) => setSelectedClassId(e.target.value)}
                >
                  <option value="">-- Sin clase --</option>
                  {classesList.map((cls) => (
                    <option key={cls.id} value={cls.id}>{cls.name}</option>
                  ))}
                </select>
              </div>

              {/* SELECTOR DE ENTRENADOR */}
              <div className="input-box">
                <label>Seleccionar Entrenador</label>
                <select 
                  value={selectedTrainerId} 
                  onChange={(e) => setSelectedTrainerId(e.target.value)}
                  disabled={!selectedClassId} 
                >
                  <option value="">-- Asignar Entrenador --</option>
                  {trainersList.map((tr) => (
                    <option key={tr.id} value={tr.id}>
                       {tr.user 
                         ? `${tr.user.name} ${tr.user.last_name} - ${tr.specialty}` 
                         : `Entrenador #${tr.id} (${tr.specialty})`
                       }
                    </option>
                  ))}
                </select>
              </div>

            </div>
          </div>
        )}

        {/* --- SECCIÓN ENTRENADOR (SOLO AL CREAR O EDITAR ROL TRAINER) --- */}
        {!userToEdit && (formData.role === 'trainer' || formData.role === 'admin') && (
          <div className="form-section dynamic-section">
            <h3>Perfil Profesional</h3>
            <div className="input-box">
              <label>Especialidad</label>
              <select 
                value={trainerSpecialty} 
                onChange={(e) => setTrainerSpecialty(e.target.value)}
              >
                <option value="">-- Seleccionar de Clases --</option>
                {classesList.map((cls) => (
                   <option key={cls.id} value={cls.name}>{cls.name}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className="register-actions">
          <button type="button" className="back-btn" onClick={onClose}>Cancelar</button>
          <button type="submit" className="save-user-btn" disabled={loading}>
            {loading ? 'Guardando...' : (userToEdit ? 'Actualizar Datos' : 'Registrar Usuario')}
          </button>
        </div>

      </form>
    </div>
  );
};

export default FormRegisterUsuario;