import styled from "styled-components"
import Home from "./assets/pages/home"


export const AppContainer = styled.div`
    max-width:100%;
    margin: 0;
    padding: 0;
  `

function App() {
  return (
    <AppContainer>
      <Home/>
    </AppContainer>
  )
}

export default App
