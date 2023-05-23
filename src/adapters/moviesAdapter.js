import { TMDB } from "../config/apiConfig";

export const tvAndMoviesAdapter = (apiResponse) => {
  return apiResponse.map((e) => {
    return {
      id: e.id,
      title: e.title || e.name,
      description: e.overview,
      poster: `${TMDB.IMAGE.BASE_URL}${TMDB.IMAGE.POSTER_SIZE.LARGE}${e.poster_path}`,
      backdrop: `${TMDB.IMAGE.BASE_URL}${TMDB.IMAGE.BACKDROP_SIZE.LARGE}${e.backdrop_path}`,
      releaseDate: e.release_date,
      voteAverage: e.vote_average,
      voteCount: e.vote_count,
      popularity: e.popularity,
      genreIds: e.genre_ids,
      video: e.video,
    };
  });
};
