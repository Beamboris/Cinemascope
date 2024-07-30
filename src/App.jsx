import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import Footer from "./components/Footer"
import { useState } from "react"
import EachMovieView from "./pages/EachMovieView"
import MoviesFeed from "./pages/MoviesFeed"
import Favorites from "./pages/Favorites"


function App() {
  
  const navigate = useNavigate()
  const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('isSignedIn') === 'true');

  const handleSignIn = () => {
    if (isSignedIn === false) {
    localStorage.setItem('isSignedIn', 'true');
    setIsSignedIn(true); 
  }
  else {
    localStorage.setItem('isSignedIn', 'false');
    setIsSignedIn(false)
  }
  navigate("/")
  };

  return (
    <>
  <Navbar signIn={handleSignIn} isSignedIn={isSignedIn}/>
    <Routes >
      <Route path='/' element={isSignedIn  ? <MoviesFeed /> : <LandingPage />}/>
      <Route path='/:id' element={<EachMovieView />} />
      <Route path='/favorites' element={<Favorites />} />

    </Routes>
    <Footer />
    </>
  )
}
export default App;
