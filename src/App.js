
import Header from './components/header/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import MovieList from './components/movielist/MovieList';
import Movie from './pages/movieDetails/Movie';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="movie/:id" element={<Movie/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
