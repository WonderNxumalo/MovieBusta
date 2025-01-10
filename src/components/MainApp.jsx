import { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import apiKey from './api';
import Head from './Header';
import Footer from './Footer';
import Favourite from './Favourite';

function MainApp() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false); // To handle search state and ensure that no error is diplayed prior search and handles errors if no movie is found

// Handles search function, fetch data from TMDB using axios. API key is imported, the API key file is not sent to GitHub. The fetch excludes adult movies
  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&include_adult=false`);
      if (response.data.results) {
        setMovies(response.data.results);
      } else {
        setMovies([]);
      }
      setSearchPerformed(true); // set to True once search is performed
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
      setSearchPerformed(true);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  // The components are ordered together with the searchBar handleSearch function. Only the MainApp is imported in the final App.
  return (
    <div className="container mx-auto px-4 py-8 bg-blue-900">
      <Head />
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {searchPerformed ? (
        movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(movie)} />
          ))
        ) : (
          <p className='text-red-500 font-bold'>No movie found, search another title</p>
        )
      ) : (
        <div></div> // displays no error unless search is made
      )}
      </div>
      <Favourite />
      <Footer />
    </div>
  );
}

export default MainApp;