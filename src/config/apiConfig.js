import axios from "axios";

export const TMDB = {
  API_KEY: import.meta.env.VITE_TMDB,
  BASE_URL: "https://api.themoviedb.org/3",
  IMAGE: {
    BASE_URL: "https://image.tmdb.org/t/p",
    POSTER_SIZE: {
      SMALL: "/w185",
      MEDIUM: "/w342",
      LARGE: "/w500",
      ORIGINAL: "/original",
    },
    BACKDROP_SIZE: {
      SMALL: "/w300",
      MEDIUM: "/w780",
      LARGE: "/w1280",
      ORIGINAL: "/original",
    },
  },
  MOIVE: {
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    UPCOMING: "/movie/upcoming",
    NOW_PLAYING: "/movie/now_playing",
    DETAIL: "/movie/",
    CREDITS: "/credits",
    SIMILAR: "/similar",
    RECOMMENDATIONS: "/recommendations",
    VIDEOS: "/videos",
    REVIEWS: "/reviews",
  },
  TV: {
    POPULAR: "/tv/popular",
    TOP_RATED: "/tv/top_rated",
    ON_THE_AIR: "/tv/on_the_air",
    AIRING_TODAY: "/tv/airing_today",
    DETAIL: "/tv/",
    CREDITS: "/credits",
    SIMILAR: "/similar",
  },
  PERSON: {
    DETAIL: "/person/",
    CREDITS: "/combined_credits",
    IMAGES: "/images",
  },
};

export const TMDB_API = axios.create({
  baseURL: TMDB.BASE_URL,
  params: {
    api_key: TMDB.API_KEY,
    language: "es-ES",
  },
});
