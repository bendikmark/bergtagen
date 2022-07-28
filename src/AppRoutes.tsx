import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hjem, OmOss, Vilkår } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/bergtagen" element={<Hjem />} />
      <Route path="/bergtagen/om" element={<OmOss />} />
      <Route path="/bergtagen/vilkaar" element={<Vilkår />} />
    </Routes>
  );
};

export default AppRoutes;
