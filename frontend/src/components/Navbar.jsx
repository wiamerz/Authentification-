import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    setIsLoggedIn(!!userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("username");
    setIsLoggedIn(false);

    window.location.reload();

    navigate("/");
  };

  return (
    <nav className="bg-[rgb(161,193,129)] p-4 shadow-lg text-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          
          <Link to="/Accueil" className=" text-2xl font-bold">
            L9fol
          </Link>
        </div>

        <div className="flex items-center space-x-6"> 
            <button
              onClick={handleLogout}
              className="hover:text-[rgb(243,180,78)] transition-colors duration-300"
            >
              Déconnexion
            </button>
          
           
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
