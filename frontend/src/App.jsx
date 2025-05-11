import React from 'react'
import AuthProvider from "./provider/AuthProvider";
import AppRoutes from "./routes";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;