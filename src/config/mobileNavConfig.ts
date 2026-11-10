import {
  HomeIcon,
  MoviesIcon,
  SearchIcon,
  TVIcon,
  LanguagesIcon,
  PopularMoviesIcon,
  PopularTVIcon,
} from "../icons/navbar";

export const mobileNavLinks = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Movies",
    path: "/discover/movies/genres",
    icon: MoviesIcon,
  },
  {
    name: "Search",
    path: "/search",
    icon: SearchIcon,
  },
  {
    name: "TV Shows",
    path: "/discover/tv/genres",
    icon: TVIcon,
  },
  {
    name: "Browse by Languages",
    path: "/discover/movies/languages",
    icon: LanguagesIcon,
  },
];

export const mobileNavLinksMore = [
  {
    name: "Popular Movies",
    icon: PopularMoviesIcon,
    path: "/movies/popular",
  },
  {
    name: "Popular TV Shows",
    icon: PopularTVIcon,
    path: "/tv/popular",
  },
];
