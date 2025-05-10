import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Profile from "../components/Profile";
import Logout from "../components/Logout";
import RegistreForm from "../components/Registre";
import LoginForm from "../components/Login";

const Routes = () => {
  const { token } = useAuth();

  // Définir des routes publiques (accessibles à tous)
  const routesForPublic = [
    {
      path: "/",
      element: <LoginForm />,
    }
  ];

  // Définir des routes accessibles uniquement aux utilisateurs authentifiés
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, 
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];

  // Définir des routes accessibles uniquement aux utilisateurs non authentifiés
  const routesForNotAuthenticatedOnly = [
    {
      path: "/registre",
      element: <RegistreForm />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
  ];

  // Combiner et inclure conditionnellement les routes en fonction du statut d'authentification
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Fournir la configuration du routeur à l'aide de RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;