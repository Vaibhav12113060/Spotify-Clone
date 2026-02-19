import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../frontend/layouts/MainLayout";
import Display_Cont from "../frontend/src/pages/Display_Cont";

import Sign_Up from "../frontend/src/pages/Sign_Up";
import Login from "../frontend/src/pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout Wrapper */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Display_Cont />} />
        <Route path="artist/:id" element={<Display_Cont />} />
        <Route path="album/:id" element={<Display_Cont />} />
        <Route path="song/:id" element={<Display_Cont />} />
      </Route>

      {/* Auth Pages */}
      <Route path="/signup" element={<Sign_Up />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
