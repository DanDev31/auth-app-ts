import { Typography } from "@mui/material"
import { AppRouter } from "./router/app-router.component"
import GlobalStyle from "./style/global.style"
import { themes } from "./style/themes.style"


function App() {

  return (
    <>
      <GlobalStyle bg={ themes.light.bg }/>
      <AppRouter />
    </>
  )
}

export default App
