import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoadingPage  from "../pages/LoadingPage"
import MovieDetails from "../pages/MovieDetails";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
      
        < Route path="/" element={<LoadingPage/>}/>
        < Route path="/movies/:movieId" element={<MovieDetails/>}/>
      
      </Routes>
    </Router>
  )
}





