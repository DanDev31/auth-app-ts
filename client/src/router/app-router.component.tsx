import { Routes, Route } from "react-router-dom"
import { AuthRouter } from "../components/auth/router/auth-router.component"


export const AppRouter = () => {
  return (
    <Routes>
        {/* Register and Login */}
        <Route path="/auth/*" element={ <AuthRouter /> }/>
    </Routes>
  )
}
