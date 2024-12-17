const MovieDetails = ({ movie }) => {
    {/* const imageURL = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`*/}
    const genreID = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western" };
    const genres = movie.genre_ids.map(id => genreID[id]);
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-1">
            {/*<img className="w-full rounded-lg" src={imageURL} alt={movie.original_title} /> */}
            {/* <h2 className="text-lg font-bold mt-2">{movie.original_title}</h2>*/}
            {/* <p className="text-gray-500">{movie.release_date.substring(0, 4)}</p>*/}
            <p className="text-gray-700">Rating: <span className="font-bold">{movie.vote_average.toFixed(2)}</span></p>
            <p>Genre: {genres.length > 0 ? genres.join(', ') : 'No genres available'}</p>
            <p className="text-gray-700 text-base md:text-lg mt-4 text-justify">{movie.overview}</p>
        </div>
    );
};

export default MovieDetails;

// Showing the movie poster, title, and year is unnecessary here. Only shows the rating, genre(s), and movie plot. Visible onClick "Movie Info" button, invisible when clicked again