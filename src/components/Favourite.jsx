import React, { useState, useEffect } from 'react';

const Favourite = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  // Load favourite movies from local storage on component mount
  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favouriteMovies'));
    setFavouriteMovies(storedFavourites || []);
  }, []);

  // Handle adding/removing movie from favourites
  const handleFavouriteClick = (movie) => {
    const isFavourite = favouriteMovies.some(favMovie => favMovie.id === movie.id);

    const updatedFavourites = isFavourite
      ? favouriteMovies.filter(favMovie => favMovie.id !== movie.id) // Remove if already favourite
      : [...favouriteMovies, movie]; // Add to favourites

    setFavouriteMovies(updatedFavourites);
    localStorage.setItem('favouriteMovies', JSON.stringify(updatedFavourites));
  };

  return (
    <div className="container mx-auto mt-0">
      <h2 className='bg-blue-400 text-white font-bold text-lg md:text-xl lg:text-3xl mb-1'>Favourite Movies ({favouriteMovies.length})</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favouriteMovies.map((movie) => (
          <li key={movie.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center mb-2">
            <img className="rounded-md" src={movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : 'https://via.assets.so/img.jpg?w=300&h=450&tc=white&bg=lightblue&t=N/A'} alt={movie.original_title} />
            <h3 className="text-lg font-bold mt-2">{movie.original_title}</h3>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => handleFavouriteClick(movie)}>Remove from Favourites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourite;