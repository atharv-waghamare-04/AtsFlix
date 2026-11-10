export type Mov_TV = {
  id: number;
  title: string;
  backdrop_path: string | null;
  first_air_date: string | "";
  genre_ids: number[] | [];
  series_id: number;
  name: string | null;
  origin_country: string[] | null;
  original_language: string | null;
  original_name: string | null;
  overview: string | null;
  popularity: number | null;
  poster_path: string | null;
  vote_average: number | 0;
  vote_count: number | null;
  release_date: string | null;
  pages?: Mov_TV[];
};

export interface Mov_TV_Details {
  data?: Mov_TV[];
  details?: Mov_TV[];
  trendingTV?: Mov_TV[];
  topRatedTV?: Mov_TV[];
  popularTV?: Mov_TV[];
  airingTodayTV?: Mov_TV[];
  trendingTVDetails?: Mov_TV[];
  topRatedTVDetails?: Mov_TV[];
  popularTVDetails?: Mov_TV[];
  airingTodayTVDetails?: Mov_TV[];
  trendingMovies?: Mov_TV[];
  topRatedMovies?: Mov_TV[];
  upcomingMovies?: Mov_TV[];
  popularMoviesList?: Mov_TV[];
  trendingMoviesWithDetails?: Mov_TV[];
  topRatedMoviesWithDetails?: Mov_TV[];
  upcomingMoviesWithDetails?: Mov_TV[];
  isMOMsMoviesLoading?: boolean | true;
  isMOMsMoviesDetailsLoading?: boolean | true;
  isMOMsTVLoading?: boolean | true;
  isMOMsTVDetailsLoading?: boolean | true;
  isDetailsLoading: boolean | true;
  id: string;
  title: string;
}
