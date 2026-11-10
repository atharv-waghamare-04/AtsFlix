import {
  MoviesIcon,
  TVIcon,
  InsightsIcon,
  StarIcon,
  TrendingIcon,
  InviteIcon,
} from "../icons/categoryPage";

export const discoverTiles = [
  {
    icon: TVIcon,
    title: "TV Shows",
    targetType: "tv",
    category: "popular",
    switchTile: true,
  },

  {
    icon: MoviesIcon,
    title: "Movies",
    targetType: "movies",
    category: "popular",
    switchTile: true,
  },

  {
    icon: InsightsIcon,
    title: "Popular",
    category: "popular",
  },

  {
    icon: StarIcon,
    title: "Top Rated",
    category: "top-rated",
  },

  {
    icon: TrendingIcon,
    title: "Trending Now",
    category: "trending",
  },

  {
    icon: InviteIcon,
    title: "Upcoming",
    category: "upcoming",
    hideFor: ["tv"],
  },
  {
    icon: InviteIcon,
    title: "Airing Today",
    category: "airing-today",
    hideFor: ["movies"],
  },
];

export const exploreLanguageTiles = [
  {
    title: "English",
    description:
      "Watch and download English movies and TV shows online for free on our website.",
    category: "english-en",
    path: "/discover/movies/genres/english-en",
    hideFor: ["genres"],
  },
  {
    title: "Hindi",
    description:
      "Watch and download Hindi movies and TV shows online for free on our website.",
    category: "hindi-hi",
    path: "/discover/movies/genres/hindi-hi",
    hideFor: ["genres"],
  },
  {
    title: "Tamil",
    description:
      "Watch and download Tamil movies and TV shows online for free on our website.",
    category: "tamil-ta",
    path: "/discover/movies/genres/tamil-ta",
    hideFor: ["genres"],
  },
  {
    title: "Telugu",
    description:
      "Watch and download Telugu movies and TV shows online for free on our website.",
    category: "telugu-te",
    path: "/discover/movies/genres/telugu-te",
    hideFor: ["genres"],
  },
  {
    title: "Malayalam",
    description:
      "Watch and download Malayalam movies and TV shows online for free on our website.",
    category: "malayalam-ml",
    path: "/discover/movies/genres/malayalam-ml",
    hideFor: ["genres"],
  },
  {
    title: "Kannada",
    description:
      "Watch and download Kannada movies and TV shows online for free on our website.",
    category: "kannada-kn",
    path: "/discover/movies/genres/kannada-ka",
    hideFor: ["genres"],
  },
  {
    title: "Bengali",
    description:
      "Watch and download Bengali movies and TV shows online for free on our website.",
    category: "bengali-bn",
    path: "/discover/movies/genres/bengali-bn",
    hideFor: ["genres"],
  },
  {
    title: "Marathi",
    description:
      "Watch and download Marathi movies and TV shows online for free on our website.",
    category: "marathi-mr",
    path: "/discover/movies/genres/marathi-mr",
    hideFor: ["genres"],
  },
  {
    title: "Japanese",
    description:
      "Watch and download Japanese movies and TV shows online for free on our website.",
    category: "japanese-ja",
    path: "/discover/movies/genres/japanese-ja",
    hideFor: ["genres"],
  },
  {
    title: "Korean",
    description:
      "Watch and download Korean movies and TV shows online for free on our website.",
    category: "korean-ko",
    path: "/discover/movies/genres/korean-ko",
    hideFor: ["genres"],
  },
  {
    title: "Chinese",
    description:
      "Watch and download Chinese movies and TV shows online for free on our website.",
    category: "chinese-zh",
    path: "/discover/movies/genres/chinese-zh",
    hideFor: ["genres"],
  },
];

export const exploreMoviesGenreTiles = [
  {
    id: 28,
    title: "Action",
    value: "action",
    path: "/discover/movies/genres/action",
    description:
      "Watch and download Action movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 12,
    title: "Adventure",
    value: "adventure",
    path: "/discover/movies/genres/adventure",
    description:
      "Watch and download Adventure movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 16,
    title: "Animation",
    value: "animation",
    path: "/discover/movies/genres/animation",
    description:
      "Watch and download Animation movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 35,
    title: "Comedy",
    value: "comedy",
    path: "/discover/movies/genres/comedy",
    description:
      "Watch and download Comedy movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 80,
    title: "Crime",
    value: "crime",
    path: "/discover/movies/genres/crime",
    description:
      "Watch and download Crime movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },
  {
    id: 99,
    title: "Documentary Film",
    value: "documentary-film",
    path: "/discover/movies/genres/documentary-film",
    description:
      "Watch and download Documentary movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 18,
    title: "Drama",
    value: "drama",
    path: "/discover/movies/genres/drama",
    description:
      "Watch and download Drama movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },
  {
    id: 10751,
    title: "Family",
    value: "family",
    path: "/discover/movies/genres/family",
    description:
      "Watch and download Family movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 14,
    title: "Fantasy",
    value: "fantasy",
    path: "/discover/movies/genres/fantasy",
    description:
      "Watch and download Fantasy movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 36,
    title: "History",
    value: "history",
    path: "/discover/movies/genres/history",
    description:
      "Watch and download History movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 27,
    title: "Horror",
    value: "horror",
    path: "/discover/movies/genres/horror",
    description:
      "Watch and download Horror movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },
  {
    id: 10402,
    title: "Music",
    value: "music",
    path: "/discover/movies/genres/music",
    description:
      "Watch and download Music movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 9648,
    title: "Mystery",
    value: "mystery",
    path: "/discover/movies/genres/mystery",
    description:
      "Watch and download Mystery movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 10749,
    title: "Romance",
    value: "romance",
    path: "/discover/movies/genres/romance",
    description:
      "Watch and download Romance movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 878,
    title: "Science Fiction",
    value: "science-fiction",
    path: "/discover/movies/genres/science-fiction",
    description:
      "Watch and download Science Fiction movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 10770,
    title: "TV-Film",
    value: "tv-film",
    path: "/discover/movies/genres/tv-film",
    description:
      "Watch and download TV-Film movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },

  {
    id: 53,
    title: "Thriller",
    value: "thriller",
    path: "/discover/movies/genres/thriller",
    description:
      "Watch and download Thriller movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },
  {
    id: 10752,
    title: "War",
    value: "war",
    path: "/discover/movies/genres/war",
    description:
      "Watch and download War movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },
  {
    id: 37,
    title: "Western",
    value: "western",
    path: "/discover/movies/genres/western",
    description:
      "Watch and download Western movies and TV shows online for free on our website.",
    hideFor: ["tv", "languages"],
  },
];

export const exploreTVGenreTiles = [
  {
    id: 10759,
    title: "Action & Adventure",
    value: "action-adventure",
    path: "/discover/tv/genres/action-adventure",
    description:
      "Watch and download Action & Adventure TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 16,
    title: "Animation",
    value: "animation",
    path: "/discover/tv/genres/animation",
    description:
      "Watch and download Animation TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 35,
    title: "Comedy",
    value: "comedy",
    path: "/discover/tv/genres/comedy",
    description:
      "Watch and download Comedy TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 80,
    title: "Crime",
    value: "crime",
    path: "/discover/tv/genres/crime",
    description:
      "Watch and download Crime TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 99,
    title: "Documentary",
    value: "documentary",
    path: "/discover/tv/genres/documentary",
    description:
      "Watch and download Documentary TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 18,
    title: "Drama",
    value: "drama",
    path: "/discover/tv/genres/drama",
    description:
      "Watch and download Drama TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 10751,
    title: "Family",
    value: "family",
    path: "/discover/tv/genres/family",
    description:
      "Watch and download Family TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 10762,
    title: "Kids",
    value: "kids",
    path: "/discover/tv/genres/kids",
    description:
      "Watch and download Kids TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 9648,
    title: "Mystery",
    value: "mystery",
    path: "/discover/tv/genres/mystery",
    description:
      "Watch and download Mystery TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 10763,
    title: "News",
    value: "news",
    path: "/discover/tv/genres/news",
    description:
      "Watch and download News TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 10764,
    title: "Reality",
    value: "reality",
    path: "/discover/tv/genres/reality",
    description:
      "Watch and download Reality TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 10765,
    title: "Sci-Fi & Fantasy",
    value: "sci-fi-fantasy",
    path: "/discover/tv/genres/sci-fi-fantasy",
    description:
      "Watch and download Sci-Fi & Fantasy TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 10766,
    title: "Soap",
    value: "soap",
    path: "/discover/tv/genres/soap",
    description:
      "Watch and download Soap TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 10767,
    title: "Talk",
    value: "talk",
    path: "/discover/tv/genres/talk",
    description:
      "Watch and download Talk TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 10768,
    title: "War & Politics",
    value: "war-politics",
    path: "/discover/tv/genres/war-politics",
    description:
      "Watch and download War & Politics TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
  {
    id: 37,
    title: "Western",
    value: "western",
    path: "/discover/tv/genres/western",
    description:
      "Watch and download Western TV shows online for free on our website.",
    hideFor: ["movies", "languages"],
  },
];
