import { tvAndMoviesAdapter } from "../adapters/tvAndMoviesAdapter";
import { TMDB, TMDB_API } from "../config/apiConfig";

export const getPopularMovies = async () => {
  const response = await TMDB_API.get(TMDB.MOIVE.POPULAR);
  console.log(response.data);

  return tvAndMoviesAdapter(response.data.results);
};

export const getTopRatedMovies = async () => {
  const response = await TMDB_API.get(TMDB.MOIVE.TOP_RATED);
  console.log(response.data);

  return tvAndMoviesAdapter(response.data.results);
};

export const getUpcomingMovies = async () => {
  const response = await TMDB_API.get(TMDB.MOIVE.UPCOMING);
  console.log(response.data);

  return tvAndMoviesAdapter(response.data.results);
};
