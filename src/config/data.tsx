import {
  HomeIcon,
  MoviesIcon,
  TVIcon,
  TrendingIcon,
  LanguageIcon,
} from "../icons/navDropDown";

export const navbarData = [
  { title: "Home", link: "/", icon: HomeIcon },
  { title: "Movies", link: "/discover/movies/genres", icon: MoviesIcon },
  { title: "TV Shows", link: "/discover/tv/genres", icon: TVIcon },
  {
    title: "New & Popular",
    link: "/movies/popular",
    icon: TrendingIcon,
  },
  {
    title: "Browse by languages",
    link: "/discover/movies/languages",
    icon: LanguageIcon,
  },
];

export const languagesData = [
  { title: "English", link: "/languages/english-en", icon: "" },
  { title: "Hindi", link: "/languages/hindi-hi", icon: "" },
  { title: "Japanese", link: "/languages/japanese-ja", icon: "" },
  { title: "Korean", link: "/languages/korean-ko", icon: "" },
  { title: "Chinese", link: "/languages/chinese-zh", icon: "" },
];

export const footerData = [
  { title: "FAQ", link: "#", id: 1 },
  { title: "Help Center", link: "#", id: 2 },
  { title: "Account", link: "#", id: 3 },
  { title: "Media Center", link: "#", id: 4 },
  { title: "Investor Relations", link: "#", id: 5 },
  { title: "Jobs", link: "#", id: 6 },
  { title: "Terms of Use", link: "#", id: 7 },
  { title: "Contact Us", link: "#", id: 8 },
  { title: "Legal Notice", link: "#", id: 9 },
  { title: "Cookie Preferences", link: "#", id: 10 },
  { title: "Corporate Information", link: "#", id: 11 },
  { title: "Media Center", link: "#", id: 12 },
];
