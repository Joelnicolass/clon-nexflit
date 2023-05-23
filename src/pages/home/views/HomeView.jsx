import React from "react";
import useSWR from "swr";

import styles from "./HomeView.module.css";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../../services/moviesServices";
import CarouselNetflix from "../components/CarouselNetflix/CarouselNetflix";
import {
  getPopularTvShows,
  getTopRatedTvShows,
  getOnTheAirTvShows,
} from "../../../services/tvServices";

const HomeView = () => {
  const { data: popularMovies, isLoading: isLoadingPopularMovies } = useSWR(
    "popularMovies",
    getPopularMovies
  );
  const { data: topRatedMovies, isLoading: isLoadingTopRatedMovies } = useSWR(
    "topRatedMovies",
    getTopRatedMovies
  );
  const { data: upcomingMovies, isLoading: isLoadingUpcomingMovies } = useSWR(
    "upcomingMovies",
    getUpcomingMovies
  );

  const { data: popularTvShows, isLoading: isLoadingPopularTvShows } = useSWR(
    "popularTvShows",
    getPopularTvShows
  );

  const { data: topRatedTvShows, isLoading: isLoadingTopRatedTvShows } = useSWR(
    "topRatedTvShows",
    getTopRatedTvShows
  );

  const { data: onTheAirTvShows, isLoading: isLoadingOnTheAirTvShows } = useSWR(
    "onTheAirTvShows",
    getOnTheAirTvShows
  );

  return (
    <div className={styles.container}>
      <CarouselNetflix
        isLoading={isLoadingPopularMovies}
        data={popularMovies}
        title={"Peliculas Populares"}
      />
      <CarouselNetflix
        isLoading={isLoadingTopRatedMovies}
        data={topRatedMovies}
        title={"Peliculas galardonadas"}
      />
      <CarouselNetflix
        isLoading={isLoadingUpcomingMovies}
        data={upcomingMovies}
        title={"Peliculas que se vienen"}
      />

      <CarouselNetflix
        isLoading={isLoadingPopularTvShows}
        data={popularTvShows}
        title={"Series Populares"}
      />

      <CarouselNetflix
        isLoading={isLoadingTopRatedTvShows}
        data={topRatedTvShows}
        title={"Series galardonadas"}
      />

      <CarouselNetflix
        isLoading={isLoadingOnTheAirTvShows}
        data={onTheAirTvShows}
        title={"Series que se vienen"}
      />
    </div>
  );
};

export default HomeView;
