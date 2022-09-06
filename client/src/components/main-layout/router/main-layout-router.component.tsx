import { Routes, Route } from "react-router-dom"
import { MainLayout } from "../layout/main-layout.component"

export const MainLayoutRouter = () => {
  return (
    <Routes>
        <Route path="/home/*" element={ <MainLayout />}/>
    </Routes>
  )
}
