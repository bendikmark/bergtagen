import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hjem, OmOss, Vilkår } from "./pages";
import Galleri from "./pages/Galleri";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/bergtagen" element={<Hjem />} />
      <Route path="/bergtagen/om" element={<OmOss />} />
      <Route path="/bergtagen/vilkaar" element={<Vilkår />} />
      <Route path="/bergtagen/galleri" element={<Galleri />} />
    </Routes>
  );
};

export default AppRoutes;
