import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import Footer from "./components/Footer"
import { useState } from "react"
import EachMovieView from "./pages/EachMovieView"
import MovieFeed from "./pages/MovieFeed"

function App() {
  
  const [ selectedMovie, setSelectedMovie ] = useState(null)
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
  };

  const handleSelectedMovie = (movie) => {
    setSelectedMovie(movie)
  }

console.log(selectedMovie)
  return (


    <>
  <Navbar signIn={handleSignIn} isSignedIn={isSignedIn}/>
    <Routes >
      <Route path='/' element={isSignedIn  ? <MovieFeed handleSelectedMovie={handleSelectedMovie}/> : <LandingPage />}/>
      <Route path='/id' element={<EachMovieView />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
