import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const apiKey = "e6a549f1ef2b4d5e610b11e0d550dd0d"; 
const apiUrl = "https://api.themoviedb.org/3";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(`${apiUrl}/movie/${movieId}/reviews`, {
          params: {
            api_key: apiKey,
          },
        });
        setReviews(response.data.results);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Movie Reviews</h2>
      {reviews.length === 0 ? (
        <p>We dont have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;