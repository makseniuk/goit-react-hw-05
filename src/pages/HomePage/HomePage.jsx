import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../../api.js";
import styles from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList.jsx'; 

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.error("Not Found Page:", error));
  }, []);

  return (
    <div className={styles.boxHome}>
      <h1>Trending today</h1>
      <Link to="/movies" className={styles.link}></Link> 
      <MovieList movies={movies} /> 
    </div>
  );
};

export default HomePage;