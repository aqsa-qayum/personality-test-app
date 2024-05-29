import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./app/routes";
import Header from "./app/components/header";
import { UserProvider } from "./app/context/UserContext";
import ProtectedRoute from "./app/components/ProtectedRoute";
import NotFound from "./app/components/NotFound";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Header />
      <Routes>
        {routes.map((route: any, index: any) => (
          route.protected ? (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute>
                  <route.component />
                </ProtectedRoute>
              }
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          )
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
