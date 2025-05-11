import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Suppression cohérente des données d'authentification
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    // Utilisation de useEffect pour éviter les problèmes de rendu
    const timer = setTimeout(() => {
      handleLogout();
    }, 2000);

    return () => clearTimeout(timer); // Nettoyer le timer lors du démontage
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgb(246,233,215)]">
      <h2 className="text-2xl font-bold mb-4">Déconnexion en cours...</h2>
      <p>Vous allez être redirigé vers la page de connexion.</p>
    </div>
  );
};

export default Logout;