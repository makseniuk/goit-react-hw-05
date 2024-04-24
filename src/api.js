import axios from "axios";

const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTc4M2NhY2NjODAxMzkwZjk5M2IyNDE4NzdhMDY2MyIsInN1YiI6IjY2MjdhN2ZhZTI5NWI0MDE4NzljZjY4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2PzCFQc8m_aJaiNO7fOHPPsMW3LkOBf4ERHC_TeQryQ";
const apiUrl = "https://api.themoviedb.org/3";

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