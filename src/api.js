import axios from "axios";

const apiKey = "25783caccc801390f993b241877a0663";
const apiUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${apiUrl}/trending/movie/week`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export { getTrendingMovies };