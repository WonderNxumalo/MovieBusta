import { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";

const MovieCard = ({ movie, onClick }) => {

    const [showMovieDetails, setShowMovieDetails] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('favouriteMovies'));
        setIsFavourite(storedFavourites?.some(favMovie => favMovie.id === movie.id));
    }, [movie]);

    const handleFavouriteClick = () => {
        setIsFavourite(!setIsFavourite);
        const storedFavourites = JSON.parse(localStorage.getItem('favouriteMovies')) || [];
        const updatedFavourites = isFavourite ? storedFavourites.filter(favMovie => favMovie.id !== movie.id) : [...storedFavourites, movie];
        localStorage.setItem('favouriteMovies', JSON.stringify(updatedFavourites));
    };

    // Show movie plot, rating, and genre onClick
    const handleShowMovieDetails = () => {
        setShowMovieDetails(!showMovieDetails);
    };

    const defaultPosterURL = "https://via.assets.so/img.jpg?w=300&h=450&tc=white&bg=lightblue&t=N/A";

    const imageURL = movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : defaultPosterURL;
    return (
            <div className=" shadow-md rounded-lg p-4" onClick={onClick}>
                <img className="rounded-md" src={imageURL} alt={movie.original_title} />
                <h2 className="text-lg font-bold mt-2">{movie.original_title}</h2>
                <p className="text-gray-500">{movie.release_date.substring(0, 4)}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1" onClick={handleShowMovieDetails}>Movie Details</button>
                <button className={`${isFavourite ? 'bg-red-500' : 'bg-green-500'} hover:${isFavourite ? 'bg-red-700' : 'bg-green-700'} text-white font-bold py-2 px-4 rounded mt-2`} onClick={handleFavouriteClick}>{isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}</button>
                {showMovieDetails && <MovieDetails movie={movie} />}
            </div>
    );
};

export default MovieCard;