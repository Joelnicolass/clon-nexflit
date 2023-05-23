import { tvAndMoviesAdapter } from "../adapters/tvAndMoviesAdapter";
import { TMDB, TMDB_API } from "../config/apiConfig";

export const getPopularTvShows = async () => {
  const response = await TMDB_API.get(TMDB.TV.POPULAR);
  return tvAndMoviesAdapter(response.data.results);
};

export const getTopRatedTvShows = async () => {
  const response = await TMDB_API.get(TMDB.TV.TOP_RATED);
  return tvAndMoviesAdapter(response.data.results);
};

export const getOnTheAirTvShows = async () => {
  const response = await TMDB_API.get(TMDB.TV.ON_THE_AIR);

  return tvAndMoviesAdapter(response.data.results);
};
