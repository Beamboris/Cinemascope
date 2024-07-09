import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import Footer from "./components/Footer"
import MainPage from "./pages/MainPage"


function App() {

  return (
    <>
  <Navbar />
    <Routes >
      <Route path='/' element={<LandingPage />}/>
      <Route path='/main' element={<MainPage />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
