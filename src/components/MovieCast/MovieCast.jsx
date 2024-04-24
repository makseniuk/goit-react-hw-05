import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const apiKey = "e6a549f1ef2b4d5e610b11e0d550dd0d"; 
const apiUrl = "https://api.themoviedb.org/3";
const baseImageUrl = "https://image.tmdb.org/t/p/w200"; 

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams(); 

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(`${apiUrl}/movie/${movieId}/credits`, {
          params: {
            api_key: apiKey,
          },
        });
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };

    fetchMovieCast();

  }, [movieId]);

  return (
    <div>
      <h2>Cast:</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img src={`${baseImageUrl}${actor.profile_path}`} alt={actor.name} />
            <div>
              <p>Name: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;