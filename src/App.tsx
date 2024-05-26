import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./app/routes";
import Header from "./app/components/header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((route: any, index: any) => (
          <Route path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
