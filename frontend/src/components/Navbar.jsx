import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user");
    
    if (token && userString) {
      setIsLoggedIn(true);
      const user = JSON.parse(userString);
      setUsername(user.username || "Utilisateur");
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  
  
    const handleLogout = () => {
      setToken(null);
    
    navigate("/login");
  };

  return (
    <nav className="bg-[rgb(161,193,129)] p-4 shadow-lg text-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link to="/profile" className="text-2xl font-bold">
            L9fol
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          {isLoggedIn && (
            <>
              <span>Bonjour, {username}</span>
              <button
                onClick={handleLogout}
                className="hover:text-[rgb(243,180,78)] transition-colors duration-300"
              >
                Déconnexion
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;