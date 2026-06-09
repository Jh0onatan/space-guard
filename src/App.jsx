import Hero from "./sections/Hero/Hero"
import Mapa from "./sections/Map/Mapa"
import Navbar from "./components/Navbar/Navbar"
import Historico from "./sections/History/Historico"

function App() {
  return(
    <>
      <Navbar/>
      <Hero/>
      <Mapa/>
      <Historico/>
    </>
  )
}

export default App