import {
  fetchTrendingMov,
  fetchTopRatedMov,
  fetchUpcomingMov,
  fetchPopularMov,
  fetchLanguageMov,
  fetchMovieDetails,
  fetchGenresMov,
} from "../API/movieAPI";
import { useInfiniteQuery, useQueries, useQuery } from "@tanstack/react-query";


type InfiniteMovieQueryOptions = {
  skip?: boolean;
  refetchOnMountOrArgChange?: boolean | "always";
};

export const useMoviesPopular = ({ skip, refetchOnMountOrArgChange }) => {
  const popularMoviesQuery = useQuery({
    queryKey: ["movies", "popularMovies"],
    queryFn: () => fetchPopularMov(1),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    enabled: !skip,
    refetchOnMount: refetchOnMountOrArgChange,
  });

  
  return {
    popularMovies: popularMoviesQuery.data?.results ?? [],
    isPopularMoviesLoading: popularMoviesQuery.isLoading,
  };
};

export const useTrendingMovies = ({ skip, refetchOnMountOrArgChange }) => {
  const trendingMoviesQuery = useQuery({
    queryKey: ["movies", "trendingMovies"],
    queryFn: () => fetchTrendingMov(1),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    enabled: !skip,
    refetchOnMount: refetchOnMountOrArgChange,
  });

  const trendingMovies = trendingMoviesQuery?.data?.results ?? [];
    return {
    trendingMovies: trendingMovies,
    isTrendingMoviesLoading: trendingMoviesQuery.isLoading,
  };
};

export const useTopRatedMovies = ({ skip, refetchOnMountOrArgChange }) => {
  const topRatedMoviesQuery = useQuery({
    queryKey: ["movies", "topRatedMovies"],
    queryFn: () => fetchTopRatedMov(1),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    enabled: !skip,
    refetchOnMount: refetchOnMountOrArgChange,
  });

  const topRatedMovies = topRatedMoviesQuery?.data?.results ?? [];
    return {
    topRatedMovies: topRatedMovies,
    isTopRatedMoviesLoading: topRatedMoviesQuery.isLoading,
  };
};

export const useUpcomingMovies = ({ skip, refetchOnMountOrArgChange }) => {
  const upcomingMoviesQuery = useQuery({
    queryKey: ["movies", "upcomingMovies"],
    queryFn: () => fetchUpcomingMov(1),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    enabled: !skip,
    refetchOnMount: refetchOnMountOrArgChange,
  });

  const upcomingMovies = upcomingMoviesQuery?.data?.results ?? [];

  
  return {
    upcomingMovies: upcomingMovies,
    isUpcomingMoviesLoading: upcomingMoviesQuery.isLoading,
  };
};

//Infinite Scroll Hooks

export const usePopularMoviesInfinite = ({
  skip,
  refetchOnMountOrArgChange,
}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["movies-infinite", "popularMovies-infinite"],

      queryFn: ({ pageParam }) => {
        
        return fetchPopularMov(pageParam);
      },

      initialPageParam: 1,
      enabled: !skip,
      refetchOnMount: refetchOnMountOrArgChange,

      getNextPageParam: (lastPage) => {
        
        if (!lastPage) return undefined;

        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }

        return undefined;
      },
    });

  const movies = data?.pages.flatMap((page) => page?.results ?? []) ?? [];

  
  return {
    data: movies,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export const useTrendingMoviesInfinite = ({
  skip,
  refetchOnMountOrArgChange,
}) => {
  const {
    data: trendingMovies,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies-infinite", "trendingMovies-infinite"],
    queryFn: ({ pageParam }) => fetchTrendingMov(pageParam),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    enabled: !skip,
    refetchOnMount: refetchOnMountOrArgChange,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  const movies = trendingMovies?.pages.flatMap((page) => page.results) ?? [];

  const uniqueMovies = Array.from(
    new Map(movies.map((movie) => [movie.id, movie])).values(),
  );

  return {
    data: uniqueMovies,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  };
};

export const useTopRatedMoviesInfinite = ({
  skip,
  refetchOnMountOrArgChange,
}) => {
  const {
    data: topRatedMovies,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies-infinite", "topRatedMovies-infinite"],
    queryFn: ({ pageParam }) => fetchTopRatedMov(pageParam),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    enabled: !skip,
    refetchOnMount: refetchOnMountOrArgChange,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  const movies = topRatedMovies?.pages.flatMap((page) => page.results) ?? [];

  const uniqueMovies = Array.from(
    new Map(movies.map((movie) => [movie.id, movie])).values(),
  );

  return {
    data: uniqueMovies,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  };
};

export const useUpcomingMoviesInfinite = ({
  skip,
  refetchOnMountOrArgChange,
}) => {
  const {
    data: upcomingMovies,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies-infinite", "upcomingMovies-infinite"],
    queryFn: ({ pageParam }) => fetchUpcomingMov(pageParam),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    enabled: !skip,
    refetchOnMount: refetchOnMountOrArgChange,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  const movies = upcomingMovies?.pages.flatMap((page) => page.results) ?? [];

  const uniqueMovies = Array.from(
    new Map(movies.map((movie) => [movie.id, movie])).values(),
  );

  
  return {
    data: uniqueMovies,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  };
};

export const useAllLanguagesMov = ({ skip, refetchOnMountOrArgChange }) => {
  const languages = [
    { key: "English-en", value: "en" },
    { key: "Hindi-hi", value: "hi" },
    { key: "Bengali-bn", value: "bn" },
    { key: "Tamil-ta", value: "ta" },
    { key: "Telugu-te", value: "te" },
    { key: "Marathi-mr", value: "mr" },
    { key: "Kannada-kn", value: "kn" },
    { key: "Malayalam-ml", value: "ml" },
    { key: "Gujarati-gu", value: "gu" },
    { key: "Japanese-ja", value: "ja" },
    { key: "Korean-ko", value: "ko" },
    { key: "Chinese-zh", value: "zh" },
  ];
  const allLanguages = useQueries({
    queries: languages.map((language) => ({
      queryKey: ["movies", "allLanguages", language.key],
      queryFn: () => fetchLanguageMov([language.value], 1),
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      enabled: !skip,
      refetchOnMount: refetchOnMountOrArgChange,
    })),
  });

  const english = allLanguages[0].data?.results ?? [];
  const hindi = allLanguages[1].data?.results ?? [];
  const bengali = allLanguages[2].data?.results ?? [];
  const tamil = allLanguages[3].data?.results ?? [];
  const telugu = allLanguages[4].data?.results ?? [];
  const marathi = allLanguages[5].data?.results ?? [];
  const kannada = allLanguages[6].data?.results ?? [];
  const malayalam = allLanguages[7].data?.results ?? [];
  const gujarati = allLanguages[8].data?.results ?? [];
  const japanese = allLanguages[9].data?.results ?? [];
  const korean = allLanguages[10].data?.results ?? [];
  const chinese = allLanguages[11].data?.results ?? [];

  const isLoading = allLanguages?.some((language) => language.isLoading);
  const isError = allLanguages?.some((language) => language.isError);
  const error = allLanguages?.find((language) => language.isError)?.error;

  return {
    englishMovies: english,
    hindiMovies: hindi,
    bengaliMovies: bengali,
    tamilMovies: tamil,
    teluguMovies: telugu,
    marathiMovies: marathi,
    kannadaMovies: kannada,
    malayalamMovies: malayalam,
    gujaratiMovies: gujarati,
    japaneseMovies: japanese,
    koreanMovies: korean,
    chineseMovies: chinese,

    allLanguagesIsLoading: isLoading,
    allLanguagesIsError: isError,
    allLanguagesError: error,
  };
};

export const useAllGenresMov = ({ skip, refetchOnMountOrArgChange }) => {
  const movieGenres = [
    { key: "action", id: 28 },
    { key: "adventure", id: 12 },
    { key: "animation", id: 16 },
    { key: "comedy", id: 35 },
    { key: "crime", id: 80 },
    { key: "documentary", id: 99 },
    { key: "drama", id: 18 },
    { key: "family", id: 10751 },
    { key: "fantasy", id: 14 },
    { key: "history", id: 36 },
    { key: "horror", id: 27 },
    { key: "music", id: 10402 },
    { key: "mystery", id: 9648 },
    { key: "romance", id: 10749 },
    { key: "science-fiction", id: 878 },
    { key: "tv-movie", id: 10770 },
    { key: "thriller", id: 53 },
    { key: "war", id: 10752 },
    { key: "western", id: 37 },
  ] as const;

  const genreQueries = useQueries({
    queries: movieGenres.map((genre) => ({
      queryKey: ["movies", "allGenres", genre.key],

      queryFn: () => fetchGenresMov([genre.id], 1),

      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      enabled: !skip,
      refetchOnMount: refetchOnMountOrArgChange,
    })),
  });

  const action = genreQueries[0]?.data?.results ?? [];

  const adventure = genreQueries[1]?.data?.results ?? [];

  const animation = genreQueries[2]?.data?.results ?? [];

  const comedy = genreQueries[3]?.data?.results ?? [];

  const crime = genreQueries[4]?.data?.results ?? [];

  const documentary = genreQueries[5]?.data?.results ?? [];

  const drama = genreQueries[6]?.data?.results ?? [];

  const family = genreQueries[7]?.data?.results ?? [];

  const fantasy = genreQueries[8]?.data?.results ?? [];

  const history = genreQueries[9]?.data?.results ?? [];

  const horror = genreQueries[10]?.data?.results ?? [];

  const music = genreQueries[11]?.data?.results ?? [];

  const mystery = genreQueries[12]?.data?.results ?? [];

  const romance = genreQueries[13]?.data?.results ?? [];

  const scienceFiction = genreQueries[14]?.data?.results ?? [];

  const tvMovie = genreQueries[15]?.data?.results ?? [];

  const thriller = genreQueries[16]?.data?.results ?? [];

  const war = genreQueries[17]?.data?.results ?? [];

  const western = genreQueries[18]?.data?.results ?? [];

  const isLoading = genreQueries.some((query) => query.isLoading);
  const isError = genreQueries.some((query) => query.isError);
  const error = genreQueries.find((query) => query.isError)?.error;

  
  return {
    actionMovies: action,
    adventureMovies: adventure,
    animationMovies: animation,
    comedyMovies: comedy,
    crimeMovies: crime,
    documentaryMovies: documentary,
    dramaMovies: drama,
    familyMovies: family,
    fantasyMovies: fantasy,
    historyMovies: history,
    horrorMovies: horror,
    musicMovies: music,
    mysteryMovies: mystery,
    romanceMovies: romance,
    scienceFictionMovies: scienceFiction,
    tvMovieMovies: tvMovie,
    thrillerMovies: thriller,
    warMovies: war,
    westernMovies: western,

    allMoviesLoading: isLoading,
    allMoviesError: error,
    allMoviesIsError: isError,
  };
};

export const useLanguageMoviesInfinite = (
  { skip = false, refetchOnMountOrArgChange = false }: InfiniteMovieQueryOptions = {},
  langArr: string[] = [],
  options?: {
    enabled?: boolean;
  },
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["movies", "languageMovies", langArr],
      queryFn: ({ pageParam }) => fetchLanguageMov(langArr, pageParam),
      initialPageParam: 1,
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      enabled: (options?.enabled ?? true) && !skip,
      refetchOnMount: refetchOnMountOrArgChange,

      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
    });
  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  return {
    data: movies,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export const useGenresMoviesInfinite = (
  { skip = false, refetchOnMountOrArgChange = false }: InfiniteMovieQueryOptions = {},
  langArr: number[] = [],
  options?: {
    enabled?: boolean;
  },
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: ["movies", "allGenres", langArr],
      queryFn: ({ pageParam }) => fetchGenresMov(langArr, pageParam),
      initialPageParam: 1,
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      enabled: (options?.enabled ?? true) && !skip,
      refetchOnMount: refetchOnMountOrArgChange,
      getNextPageParam: (lastPage) => {
                if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
    });
  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  
  return {
    data: movies,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  };
};

export const useMovieDetails = (id: number, enabled = true) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies", "movie-details", `movieId-${id}`],
    queryFn: () => fetchMovieDetails(id),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
    enabled: enabled && Number.isInteger(id) && id > 0,
  });

  return { data, isLoading, isError, error };
};

// export const useMoviesMOMs = () => {
//   const allQueries = useQueries({
//     queries: [
//       {
//         queryKey: ["movie", "trendingMovies"],
//         queryFn: fetchTrendingMov,
//         staleTime: 1000 * 60 * 60,
//         gcTime: 1000 * 60 * 60 * 24,
//         refetchOnWindowFocus: false,
//       },
//       {
//         queryKey: ["movie", "topRatedMovies"],
//         queryFn: fetchTopRatedMov,
//         staleTime: 1000 * 60 * 60,
//         gcTime: 1000 * 60 * 60 * 24,
//         refetchOnWindowFocus: false,
//       },
//       {
//         queryKey: ["movie", "upcomingMovies"],
//         queryFn: fetchUpcomingMov,
//         staleTime: 1000 * 60 * 60,
//         gcTime: 1000 * 60 * 60 * 24,
//         refetchOnWindowFocus: false,
//       },
//     ],
//   });

//   const topRatedMovies = allQueries[1]?.data ?? [];

//   const upcomingMovies = allQueries[2]?.data ?? [];

//   const trendingMovies = allQueries[0]?.data ?? [];

//   return {
//     topRatedMovies: topRatedMovies,
//     upcomingMovies: upcomingMovies,
//     trendingMovies: trendingMovies,
//     isMOMsMoviesLoading: allQueries.some((query) => query.isLoading),
//   };
// };

// export const usePopularMovieWithDetails = ({
//   popularMoviesList = [],
// }: MoviesDetails) => {
//   const detailQueries = useQueries({
//     queries: uniqueMovies(popularMoviesList ?? []).map((movie) => ({
//       queryKey: ["movie", "popMovDetails", movie.id],
//       queryFn: () => fetchMovieDetails(movie.id!),
//       staleTime: 1000 * 60 * 30,
//       gcTime: 1000 * 60 * 60 * 24 * 7,
//       enabled: !!movie.id && popularMoviesList.length > 0,
//     })),
//   });

//   const movieDetails = detailQueries.map((query) => query.data).filter(Boolean);

//   
