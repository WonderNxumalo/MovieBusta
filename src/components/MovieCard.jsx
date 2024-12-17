import { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";

const MovieCard = ({ movie, onClick }) => {

    // Prepare to showMovieDetails, and to add movies to Favourite list
    const [showMovieDetails, setShowMovieDetails] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);

    // Store Favourite movie, uses the movie.id to set as favMovied.id in preparation for the handleClick function
    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('favouriteMovies'));
        setIsFavourite(storedFavourites?.some(favMovie => favMovie.id === movie.id));
    }, [movie]);

    // Stores and update the storedFavourite as an array, checks if the movie is onl added once using the movie.id
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

    // Use a default poster when a movie is retrieved with no poster
    const defaultPosterURL = "https://via.assets.so/img.jpg?w=300&h=450&tc=white&bg=lightblue&t=N/A";

    // If there is a poster, display the retrieved poster or else the default poster.
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