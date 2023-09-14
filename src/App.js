import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./Utils/ProtectedRoute"
import Authentication from "./Components/Authentication";
import Home from "./Pages/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Authentication />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;