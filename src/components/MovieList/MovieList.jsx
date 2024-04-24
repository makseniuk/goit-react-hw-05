import { Link, useLocation } from 'react-router-dom'; 
import styles from '../MovieList/MovieList.module.css'; 

const MovieList = ({ movies }) => {
  const location = useLocation(); 

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>
            <Link
              to={`/movies/${movie.id}`} state={location} className={styles.movieTitle}>{movie.title}
            </Link>

          </h2>
        </div>
      ))}
    </div>
  );
}

export default MovieList;