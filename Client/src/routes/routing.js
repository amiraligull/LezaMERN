/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/auth/admin-login";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="admin-login" element={<AdminLogin />} />
        </Route>
        {/* auth/admin-login */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
