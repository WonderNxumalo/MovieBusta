import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-0.5 mb-0.5 bg-blue-300 p-2">
            <input 
            type="text" 
            name="searchbar"
            placeholder="Search movies"
            value={searchTerm}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md mr-2"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
        </form>
    );
};

export default SearchBar;