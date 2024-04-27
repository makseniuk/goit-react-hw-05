import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom"; 
import MovieList from "../../components/MovieList/MovieList.jsx";
import styles from "../MoviesPage/MoviesPages.module.css";

const apiKey = "25783caccc801390f993b241877a0663";
const apiUrl = "https://api.themoviedb.org/3";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(); 

  useEffect(() => {
    const searchQuery = searchParams.get("query");

    if (searchQuery) {
      fetchMovies(searchQuery);
    }
  }, [searchParams]);

  const fetchMovies = async (searchQuery) => {
    try {
      const response = await axios.get(`${apiUrl}/search/movie`, {
        params: {
          api_key: apiKey,
          query: searchQuery,
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query }); 
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.containerSearch}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;