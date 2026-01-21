// import React, { useState, useEffect } from 'react';
// import userService from '../../services/userService';
// import classService from '../../services/classService';
// import trainerService from '../../services/trainerService';
// import userClassService from '../../services/userClassService';
// import '../FormRegisterUsuario/FormRegisterUsuario.css';

// const FormRegisterUsuario = ({ onSuccess, onClose }) => {
//   // --- 1. ESTADOS DEL FORMULARIO ---
//   const [formData, setFormData] = useState({
//     name: '',
//     last_name: '',
//     email: '',
//     password: '',
//     role: 'cliente', // Por defecto registramos clientes
//   });

//   // Estado para guardar la Clase seleccionada (SOLO CLIENTES)
//   const [selectedClassId, setSelectedClassId] = useState(''); 
  
//   // Estado para la especialidad (SOLO ENTRENADORES)
//   const [trainerSpecialty, setTrainerSpecialty] = useState(''); 

//   // Lista de clases que cargamos del backend para el desplegable
//   const [classesList, setClassesList] = useState([]);
  
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   // --- 2. CARGAR LAS CLASES AL ABRIR EL FORMULARIO ---
//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         // Pedimos todas las clases al backend para mostrarlas en el select
//         const data = await classService.getAllClasses();
//         setClassesList(data);
//       } catch (err) {
//         console.error("Error cargando clases", err);
//       }
//     };
//     fetchClasses();
//   }, []);

//   // --- 3. MANEJAR CAMBIOS EN LOS INPUTS ---
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // --- 4. ENVIAR FORMULARIO (LA LÓGICA IMPORTANTE) ---
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       // PASO A: Crear el usuario básico (Nombre, Email, Password)
//       const userResponse = await userService.createUser(formData);
      
//       // El backend nos devuelve el usuario creado. Necesitamos su ID.
//       // Dependiendo de tu backend puede venir en userResponse.id o userResponse.data.id
//       const newUserId = userResponse.id || userResponse.data?.id; 

//       if (!newUserId) throw new Error("Usuario creado, pero no se obtuvo ID.");

//       // PASO B: SI ES CLIENTE Y SELECCIONÓ CLASE -> LO INSCRIBIMOS
//       if (formData.role === 'cliente' && selectedClassId) {
//         await userClassService.enrollUser({
//           user_id: newUserId,
//           gym_class_id: selectedClassId
//         });
//         // ¡LISTO! Al hacer esto, la base de datos ya sabe:
//         // Usuario -> Clase -> Entrenador
//       }

//       // PASO C: SI ES ENTRENADOR -> CREAMOS SU PERFIL DE ENTRENADOR
//       if (formData.role === 'trainer' || formData.role === 'admin') {
//         if (trainerSpecialty) {
//           await trainerService.createTrainer({
//             user_id: newUserId,
//             specialty: trainerSpecialty
//           });
//         }
//       }

//       setLoading(false);
//       alert("Usuario registrado correctamente");
//       if (onSuccess) onSuccess(); // Esto recarga la tabla de atrás
//       if (onClose) onClose();     // Esto cierra el modal

//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//       setError("Error al registrar: " + (err.response?.data?.detail || err.message));
//     }
//   };

//   return (
//     <form className="register-form-modal" onSubmit={handleSubmit}>
//       {error && <div className="error-alert">{error}</div>}

//       {/* --- DATOS PERSONALES --- */}
//       <div className="form-group">
//         <label>Nombre:</label>
//         <input type="text" name="name" required value={formData.name} onChange={handleChange} />
//       </div>
//       <div className="form-group">
//         <label>Apellidos:</label>
//         <input type="text" name="last_name" required value={formData.last_name} onChange={handleChange} />
//       </div>
//       <div className="form-group">
//         <label>Email (Usuario):</label>
//         <input type="email" name="email" required value={formData.email} onChange={handleChange} />
//       </div>
//       <div className="form-group">
//         <label>Contraseña:</label>
//         <input type="password" name="password" required value={formData.password} onChange={handleChange} />
//       </div>

//       <div className="form-group">
//         <label>Tipo de Usuario:</label>
//         <select name="role" value={formData.role} onChange={handleChange}>
//           <option value="cliente">Cliente (Alumno)</option>
//           <option value="trainer">Entrenador</option>
//           <option value="admin">Administrador</option>
//         </select>
//       </div>

//       {/* --- AQUÍ ESTÁ LA CLAVE PARA QUE SALGA EN LA LISTA --- */}
//       {/* Si es CLIENTE, le mostramos el selector de clases */}
//       {formData.role === 'cliente' && (
//         <div className="extra-fields client-fields">
//           <h4>Asignar Clase Inicial</h4>
//           <p className="hint">Selecciona la clase para verla en la lista de usuarios:</p>
          
//           <select 
//             value={selectedClassId} 
//             onChange={(e) => setSelectedClassId(e.target.value)}
//             required // Puedes ponerlo required si es obligatorio que tengan clase
//           >
//             <option value="">-- Seleccionar Clase --</option>
//             {classesList.map((cls) => (
//               <option key={cls.id} value={cls.id}>
//                 {/* Mostramos: Nombre Clase - Instructor */}
//                 {cls.name} (Entrenador: {cls.instructor_name || 'Sin asignar'})
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Si es ENTRENADOR, le pedimos la especialidad */}
//       {(formData.role === 'trainer' || formData.role === 'admin') && (
//         <div className="extra-fields trainer-fields">
//           <h4>Perfil Profesional</h4>
//           <div className="form-group">
//             <label>Especialidad:</label>
//             <input 
//               type="text" 
//               placeholder="Ej: Yoga, Crossfit..." 
//               value={trainerSpecialty}
//               onChange={(e) => setTrainerSpecialty(e.target.value)}
//             />
//           </div>
//         </div>
//       )}

//       <button type="submit" className="btn-submit" disabled={loading}>
//         {loading ? 'Guardando...' : 'Registrar Usuario'}
//       </button>
//     </form>
//   );
// };

// export default FormRegisterUsuario;

import React, { useState, useEffect } from 'react';
import userService from '../../services/userService';
import classService from '../../services/classService';
import trainerService from '../../services/trainerService';
import userClassService from '../../services/userClassService';
import './FormRegisterUsuario.css';

const FormRegisterUsuario = ({ onSuccess, onClose }) => {
  // --- ESTADOS ---
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'user', // "user" es el valor correcto para Clientes según tu backend
  });

  // Estados para selección (Cliente)
  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedTrainerId, setSelectedTrainerId] = useState(''); // <--- NUEVO: Para elegir entrenador

  // Estado para especialidad (Entrenador)
  const [trainerSpecialty, setTrainerSpecialty] = useState('');

  // Listas de datos
  const [classesList, setClassesList] = useState([]);
  const [trainersList, setTrainersList] = useState([]); // <--- NUEVO: Lista de entrenadores

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // --- CARGA DE DATOS INICIAL ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Cargar Clases
        const classesData = await classService.getAllClasses();
        setClassesList(classesData);

        // 2. Cargar Entrenadores (Necesario para poder elegirlos)
        const trainersData = await trainerService.getAllTrainers();
        setTrainersList(trainersData);
        
      } catch (err) {
        console.error("Error cargando listas:", err);
      }
    };
    fetchData();
  }, []);

  // --- MANEJADORES ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Crear Usuario
      // IMPORTANTE: Asegúrate de que createUser usa la ruta con barra '/users/' si tu backend lo requiere
      const userResponse = await userService.createUser(formData);
      const newUserId = userResponse.id || userResponse.data?.id;

      if (!newUserId) throw new Error("No se pudo obtener ID del usuario.");

      // 2. Lógica para CLIENTE (USER)
      if (formData.role === 'user') {
        // Solo inscribimos si se seleccionó Clase Y Entrenador
        if (selectedClassId && selectedTrainerId) {
            console.log("Inscribiendo usuario en clase y entrenador...");
            await userClassService.enrollUser({
              user_id: newUserId,
              class_id: parseInt(selectedClassId),     // Backend pide 'class_id'
              trainer_id: parseInt(selectedTrainerId)  // Backend pide 'trainer_id' OBLIGATORIO
            });
        }
      }

      // 3. Lógica para ENTRENADOR
      if ((formData.role === 'trainer' || formData.role === 'admin') && trainerSpecialty) {
        await trainerService.createTrainer({
          user_id: newUserId,
          specialty: trainerSpecialty
        });
      }

      setLoading(false);
      alert("Registro completado con éxito");
      if (onSuccess) onSuccess();
      if (onClose) onClose();

    } catch (err) {
      console.error(err);
      setLoading(false);
      // Extraemos el mensaje de error de forma segura
      const msg = err.response?.data?.detail 
        ? JSON.stringify(err.response.data.detail) 
        : err.message;
      setError("Error: " + msg);
    }
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <h1>Alta de Usuario</h1>
        <p>Configuración de nuevo perfil en el sistema GymPro</p>
      </header>

      {error && <div className="error-msg">{error}</div>}

      <form onSubmit={handleSubmit}>
        
        {/* SECCIÓN 1: DATOS DE ACCESO */}
        <div className="form-section">
          <h3>Datos de Acceso y Rol</h3>
          <div className="form-grid">
            <div className="input-box">
              <label>Tipo de Perfil</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="user">Cliente (Alumno)</option>
                <option value="trainer">Entrenador (Profesor)</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <div className="input-box">
              <label>Contraseña</label>
              <input type="password" name="password" placeholder="********" required value={formData.password} onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* SECCIÓN 2: INFORMACIÓN PERSONAL */}
        <div className="form-section">
          <h3>Información Personal</h3>
          <div className="form-grid">
            <div className="input-box">
              <label>Nombre</label>
              <input type="text" name="name" placeholder="Nombre" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="input-box">
              <label>Apellidos</label>
              <input type="text" name="last_name" placeholder="Apellidos" required value={formData.last_name} onChange={handleChange} />
            </div>
            <div className="input-box" style={{ gridColumn: 'span 2' }}>
              <label>Email (Usuario)</label>
              <input type="email" name="email" placeholder="email@ejemplo.com" required value={formData.email} onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* --- SECCIÓN DINÁMICA: SOLO PARA CLIENTES (USER) --- */}
        {formData.role === 'user' && (
          <div className="form-section dynamic-section">
            <h3>Inscripción Inicial (Opcional)</h3>
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

              {/* SELECTOR DE ENTRENADOR (AHORA OBLIGATORIO SI ELIGES CLASE) */}
              <div className="input-box">
                <label>Seleccionar Entrenador</label>
                <select 
                  value={selectedTrainerId} 
                  onChange={(e) => setSelectedTrainerId(e.target.value)}
                  disabled={!selectedClassId} // Se activa solo si eliges clase
                >
                  <option value="">-- Asignar Entrenador --</option>
                  {trainersList.map((tr) => (
                    // Asumimos que el objeto trainer tiene user.name, si no, ajusta esto
                    // Si tu endpoint /trainers devuelve solo ID y user_id, quizás necesites cargar usuarios.
                    // Por ahora mostramos ID o nombre si está disponible.
                    <option key={tr.id} value={tr.id}>
                       Entrenador #{tr.id} {tr.user ? `- ${tr.user.name}` : ''}
                    </option>
                  ))}
                </select>
              </div>

            </div>
          </div>
        )}

        {/* --- SECCIÓN DINÁMICA: SOLO PARA ENTRENADORES --- */}
        {(formData.role === 'trainer' || formData.role === 'admin') && (
          <div className="form-section dynamic-section">
            <h3>Perfil Profesional</h3>
            <div className="input-box">
              <label>Especialidad</label>
              <input type="text" placeholder="Ej: Yoga" value={trainerSpecialty} onChange={(e) => setTrainerSpecialty(e.target.value)} />
            </div>
          </div>
        )}

        <div className="register-actions">
          <button type="button" className="back-btn" onClick={onClose}>Cancelar</button>
          <button type="submit" className="save-user-btn" disabled={loading}>
            {loading ? 'Guardando...' : 'Confirmar Registro'}
          </button>
        </div>

      </form>
    </div>
  );
};

export default FormRegisterUsuario;