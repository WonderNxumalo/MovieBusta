// Site name, Movie Busta, act as a link to the "Home Page" and also clears the search bar, returns the home page with saved favourite movies, if any.

import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Head () {
    return (
        <div className="container bg-gradient-to-br from-purple-500 to-blue-500 p-2">
            <a className="text-white hover:text-slate-300 text-3xl md:text-6xl lg:text-8xl font-bold" href="">Movie Busta</a>
            <h3 className="text-white text-base md:text-2xl lg:text-3xl xl:text-4xl">Your One-Stop Movie Search App</h3>
        </div>
    )
    }
    
    export default Head;