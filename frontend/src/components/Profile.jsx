import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../index.css";
import { useAuth } from '../provider/AuthProvider';

function Profile() {
  const { setToken } = useAuth();

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex flex-col justify-center items-center  text-[rgb(246,233,215)] px-4 py-10">
        <div className="bg-[rgb(108,88,76)] text-[rgb(215,195,183)] p-10 rounded-lg shadow-2xl text-center max-w-xl w-full">
          <h2 className="text-4xl font-bold mb-4">Bienvenue 👋</h2>
          <p className="text-lg mb-6">Ceci est votre espace personnel. Le contenu arrive bientôt.</p>
          
          <div className="bg-[rgb(246,233,215)] text-black p-4 rounded mb-6">
            <h3 className="text-xl font-semibold">Page admin</h3>
            <p className="text-sm">Accès réservé aux utilisateurs authentifiés</p>
          </div>

          <button
            onClick={handleLogout}
            className="mt-4 bg-[rgb(161,193,129)] hover:bg-[rgb(118,189,47)] text-white font-semibold py-2 px-6 rounded transition duration-200"
          >
            Se déconnecter
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
