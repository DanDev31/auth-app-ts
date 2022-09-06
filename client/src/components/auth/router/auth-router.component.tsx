import { Routes, Route, Navigate } from "react-router-dom"
import { Login } from "../views/login.component"
import { Register } from "../views/register.component"

export const AuthRouter= () => {
  return (
    <Routes>
      <Route path="login" element={ <Login /> } />
      <Route path="register" element={ <Register /> } />

      <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
