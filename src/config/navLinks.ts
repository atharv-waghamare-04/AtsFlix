import { MoviesIcon, TVIcon } from "../icons/navDropDown";

export const browseLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Movies",
    path: "/discover/movies/genres",
  },
  {
    name: "TV Shows",
    path: "/discover/tv/genres",
  },
  {
    name: "New & Popular",
    path: "#",
    dropdown: true,
    dropdownList: [
      {
        title: "Movies",
        link: "/movies/popular",
        icon: MoviesIcon,
      },
      {
        title: "TV Shows",
        link: "/tv/popular",
        icon: TVIcon,
      },
    ],
  },
  {
    name: "Browse by Languages",
    path: "/discover/movies/languages",
  },
];
