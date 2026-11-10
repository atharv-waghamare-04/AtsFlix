export type TimeWindow = "day" | "week";

export type Language =
  | "en-US"
  | "hi-IN"
  | "es-ES"
  | "fr-FR"
  | "de-DE"
  | "it-IT";

export interface MoviesDetails {
  trendingMovies?: Movie[];
  topRatedMovies?: Movie[];
  upcomingMovies?: Movie[];
  popularMoviesList?: Movie[];
  trendingMoviesWithDetails?: Movie[];
  topRatedMoviesWithDetails?: Movie[];
  upcomingMoviesWithDetails?: Movie[];
  popularMoviesWithDetails?: Movie[];
  moviesDetails?: Movie[];
  movies?: Movie[];
  loading?: boolean;
  detailsLoading?: boolean;
}

export interface Movie {
  id: number;
  title?: string;
  name?: string;
  overview?: string | null;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count?: number;
  popularity?: number;
  release_date?: string;
  first_air_date?: string;
  original_language?: string;
  genre_ids?: number[] | null;
  homepage?: string;
  tagline?: string;
  runtime?: number;
  spoken_languages?: Array<{ english_name?: string; name?: string }>;
}
