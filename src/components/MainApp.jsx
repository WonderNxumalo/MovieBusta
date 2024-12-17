import { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
{/* import MovieDetails from './MovieDetails'; */}
import apiKey from './api';
import Head from './Header';
import Footer from './Footer';
import Favourite from './Favourite';

function MainApp() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

// Handles search function, fetch data from TMDB using axios. API key is imported, the API key file is not sent to GitHub. The fetch excludes adult movies
  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&include_adult=false`);
      if (response.data.results) {
        setMovies(response.data.results);
      } else {
        console.error('No movies found');
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  // The components are ordered together with the searchBar handleSearch function. Only the MainApp is imported in the final App.
  return (
    <div className="container mx-auto px-4 py-8">
      <Head />
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(movie)} /> //Movie card visible is the fetch function returns movies
          ))
        ) : (
          <p></p>
        )}
      </div>
      {/* {selectedMovie && <MovieDetails movie={selectedMovie} />} */}
      <Favourite />
      <Footer />
    </div>
  );
}

export default MainApp;