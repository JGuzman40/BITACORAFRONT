import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../../redux/feature/loginParticipanteSlice";
import { useNavigate } from "react-router-dom"; // Para redirigir
import { useEffect } from "react"; // Importa useEffect
import "./login.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, loading } = useSelector((state) => state.auth); // Obtener el estado del slice

  // Configuración de Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email inválido").required("Requerido"),
      password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("Requerido"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  // Redirigir cuando el login sea exitoso y el usuario tenga un rol
  useEffect(() => {
    if (user?.role) {
      switch (user.role) {
        case "administrador":
          navigate("/dashboard-administrador");
          break;
        case "participante":
          navigate("/dashboard-bitacora");
          break;
        default:
          navigate("/");
          break;
      }
    }
  }, [user, navigate]); // Añadir user y navigate como dependencias

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
      </div>
      {error && <div className="error">{error}</div>}{" "}
      {/* Mostrar el error si existe */}
      <button type="submit" disabled={loading}>
        {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
      </button>
    </form>
  );
};

export default LoginForm;
