import {
  fetchAiringTodayTV,
  fetchTrendingTV,
  fetchTopRatedTV,
  fetchPopularTV,
  fetchTVDetails,
  fetchGenresTV,
} from "../API/tvAPI";
import {
  useInfiniteQuery,
  useQueries,
  useQuery,
} from "@tanstack/react-query";

type InfiniteTVQueryOptions = {
  skip?: boolean;
  refetchOnMountOrArgChange?: boolean | "always";
};

export const useAiringTodayTV = ({ skip, refetchOnMountOrArgChange }) => {
  const airingTodayTVQuery = useQuery({
    queryKey: ["tv", "airingTodayTV"],
    queryFn: () => fetchAiringTodayTV(1),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    enabled: !skip,
    refetchOnMount: refetchOnMountOrArgChange,
  });

  const airingToday = airingTodayTVQuery.data?.results ?? [];
  
  return {
    airingTodayTV: airingToday,
    isAiringTodayTVLoading: airingTodayTVQuery.isLoading,
    isFetching: airingTodayTVQuery.isFetched,
  };
};

export const useTrendingTV = ({ skip, refetchOnMountOrArgChange }) => {
  const trendingTVQuery = useQuery({
    queryKey: ["tv", "trendingTV"],
    queryFn: () => fetchTrendingTV(1),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    enabled: !skip,
    refetchOnMount: refetchOnMountOrArgChange,
  });

  const trendingTV = trendingTVQuery.data?.results ?? [];
    return {
    trendingTV: trendingTV,
    isTrendingTVLoading: trendingTVQuery.isLoading,
  };
};

export const useTopRatedTV = ({ skip, refetchOnMountOrArgChange }) => {
  const topRatedTVQuery = useQuery({
    queryKey: ["tv", "topRatedTV"],
    queryFn: () => fetchTopRatedTV(1),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    enabled: !skip,
    refetchOnMount: refetchOnMountOrArgChange,
  });

  const topRatedTV = topRatedTVQuery.data?.results ?? [];
    return {
    topRatedTV: topRatedTV,
    isTopRatedTVLoading: topRatedTVQuery.isLoading,
  };
};

export const usePopularTV = ({ skip, refetchOnMountOrArgChange }) => {
  const popularTVQuery = useQuery({
    queryKey: ["tv", "popularTV"],
    queryFn: () => fetchPopularTV(1),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !skip,
    refetchOnMount: refetchOnMountOrArgChange,
  });

  const popularTV = popularTVQuery.data?.results ?? [];

    return {
    popularTV: popularTV,
    isPopularTVLoading: popularTVQuery.isLoading,
  };
};

export const usePopularTVInfinite = ({ skip, refetchOnMountOrArgChange }) => {
  const {
    data: popularTV,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["tv-infinite", "popularTV-infinite"],
    queryFn: ({ pageParam }) => fetchPopularTV(pageParam),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60 * 24,
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

  const tvShows = popularTV?.pages.flatMap((page) => page.results) ?? [];

  return {
    data: tvShows,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  };
};

export const useTrendingTVInfinite = ({ skip, refetchOnMountOrArgChange }) => {
  const {
    data: trendingTV,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["tv-infinite", "trendingTV-infinite"],
    queryFn: ({ pageParam }) => fetchTrendingTV(pageParam),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
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

  const tvShows = trendingTV?.pages.flatMap((page) => page.results) ?? [];

  return {
    data: tvShows,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  };
};

export const useTopRatedTVInfinite = ({ skip, refetchOnMountOrArgChange }) => {
  const {
    data: topRatedTV,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["tv-infinite", "topRatedTV-infinite"],
    queryFn: ({ pageParam }) => fetchTopRatedTV(pageParam),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
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

  const tvShows = topRatedTV?.pages.flatMap((page) => page.results) ?? [];

  return {
    data: tvShows,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  };
};

export const useAiringTodayTVInfinite = ({
  skip,
  refetchOnMountOrArgChange,
}) => {
  const {
    data: airingTodayTV,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["tv-infinite", "airingTodayTV-infinite"],
    queryFn: ({ pageParam }) => fetchAiringTodayTV(pageParam),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
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

  const tvShows = airingTodayTV?.pages.flatMap((page) => page.results) ?? [];

  return {
    data: tvShows,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  };
};

export const useGenresTVInfinite = (
  { skip = false, refetchOnMountOrArgChange = false }: InfiniteTVQueryOptions = {},
  langArr: number[] = [],
  options?: {
    enabled?: boolean;
  },
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["tv", "allGenres", langArr],
      queryFn: ({ pageParam }) => fetchGenresTV(langArr, pageParam),
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

  const tvShows = data?.pages.flatMap((page) => page.results) ?? [];

  return {
    data: tvShows,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  };
};

export const useAllGenresTV = ({ skip, refetchOnMountOrArgChange }) => {
  const tvGenres = [
    {
      key: "Action & Adventure",
      id: 10759,
    },
    {
      key: "Animation",
      id: 16,
    },
    {
      key: "Comedy",
      id: 35,
    },
    {
      key: "Crime",
      id: 80,
    },
    {
      key: "Documentary",
      id: 99,
    },
    {
      key: "Drama",
      id: 18,
    },
    { key: "Kids", id: 10762 },
    {
      key: "Family",
      id: 10751,
    },
    {
      key: "Mystery",
      id: 9648,
    },
    { key: "News", id: 10763 },
    {
      key: "Reality",
      id: 10764,
    },
    {
      key: "Soap",
      id: 10766,
    },
    {
      key: "Talk",
      id: 10767,
    },
    {
      key: "Science Fiction",
      id: 10765,
    },
    {
      key: "WarPolitics",
      id: 10768,
    },
    {
      key: "Western",
      id: 37,
    },
  ];

  const allGenres = useQueries({
    queries: tvGenres.map((genre) => ({
      queryKey: ["tv", "allGenres", genre.key],
      queryFn: () => fetchGenresTV([genre.id], 1),
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 60,
      enabled: !!genre.id && !skip,
      refetchOnWindowFocus: false,
      refetchOnMount: refetchOnMountOrArgChange,
    })),
  });

  const actionAdventure = allGenres[0]?.data?.results ?? [];
  const animation = allGenres[1]?.data?.results ?? [];
  const comedy = allGenres[2]?.data?.results ?? [];
  const crime = allGenres[3]?.data?.results ?? [];
  const documentary = allGenres[4]?.data?.results ?? [];
  const drama = allGenres[5]?.data?.results ?? [];
  const kids = allGenres[6]?.data?.results ?? [];
  const family = allGenres[7]?.data?.results ?? [];
  const mystery = allGenres[8]?.data?.results ?? [];
  const news = allGenres[9]?.data?.results ?? [];
  const reality = allGenres[10]?.data?.results ?? [];
  const soap = allGenres[11]?.data?.results ?? [];
  const talk = allGenres[12]?.data?.results ?? [];
  const sciFi = allGenres[13]?.data?.results ?? [];
  const warPolitics = allGenres[14]?.data?.results ?? [];
  const western = allGenres[15]?.data?.results ?? [];

  const isLoading = allGenres?.some((query) => query.isLoading);
  const isError = allGenres?.some((query) => query.isError);
  const error = allGenres?.find((query) => query.isError)?.error;

  return {
    actionAdventureTVShows: actionAdventure,
    animationTVShows: animation,
    comedyTVShows: comedy,
    crimeTVShows: crime,
    documentaryTVShows: documentary,
    dramaTVShows: drama,
    familyTVShows: family,
    kidsTVShows: kids,
    mysteryTVShows: mystery,
    newsTVShows: news,
    realityTVShows: reality,
    sciFiTVShows: sciFi,
    soapTVShows: soap,
    talkTVShows: talk,
    warPoliticsTVShows: warPolitics,
    westernTVShows: western,

    allGenresTVShowsIsLoading: isLoading,
    allGenresTVShowsIsError: isError,
    allGenresTVShowsError: error,
  };
};

export const useTVDetails = (id: number, enabled = true) => {
    const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tv", "tvShows-details", `tvShowsId-${id}`],
    queryFn: () => fetchTVDetails(id),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60 * 24 * 7,
    refetchOnWindowFocus: false,
    enabled: enabled && Number.isInteger(id) && id > 0,
  });
  return { data, isLoading, isError, error };
};

// export const useMOMsTV = () => {
//   const allQueries = useQueries({
//     queries: [
//       {
//         queryKey: ["tv", "trendingTV"],
//         queryFn: fetchTrendingTV,
//         staleTime: 1000 * 60 * 30,
//         gcTime: 1000 * 60 * 60,
//         refetchOnWindowFocus:false
//       },
//       {
//         queryKey: ["tv", "topRatedTV"],
//         queryFn: fetchTopRatedTV,
//         staleTime: 1000 * 60 * 30,
//         gcTime: 1000 * 60 * 60,
//         refetchOnWindowFocus:false
//       },
//       {
//         queryKey: ["tv", "popularTV"],
//         queryFn: fetchPopularTV,
//         staleTime: 1000 * 60 * 30,
//         gcTime: 1000 * 60 * 60 * 24,
//         refetchOnWindowFocus:false
//       },
//       {
//         queryKey: ["tv", "airingTodayTV"],
//         queryFn: fetchAiringTodayTV,
//         staleTime: 1000 * 60 * 30,
//         gcTime: 1000 * 60 * 60 * 24,
//         refetchOnWindowFocus:false
//       },
//     ],
//   });

//   const trendingTV = allQueries[0].data ?? [];

//   const topRatedTV = allQueries[1].data ?? [];

//   const popularTV = allQueries[2].data ?? [];

//   const airingTodayTV = allQueries[3].data ?? [];

//   return {
//     trendingTV: trendingTV,
//     topRatedTV: topRatedTV,
//     popularTV: popularTV,
//     airingTodayTV: airingTodayTV,
//     isMOMsTVLoading: allQueries.some((query) => query.isLoading),
//   };
// };

// export const useMOMsTVDetails = ({
//   trendingTV = [],
//   topRatedTV = [],
//   popularTV = [],
//   airingTodayTV = [],
// }: TVDetails): UseMOMsTVDetailsResult => {
//   const allTVDetails = useQueries({
//     queries: [
//       ...uniqueTV(trendingTV).map((tv) => ({
//         queryKey: ["tv", "trendingTVDetails", tv.series_id],
//         queryFn: () => fetchTVDetails(tv.series_id!),
//         staleTime: 1000 * 60 * 30,
//         gcTime: 1000 * 60 * 60 * 24 * 7,
//         enabled: !!tv.series_id && trendingTV.length > 0,
//       })),

//       ...uniqueTV(topRatedTV).map((tv) => ({
//         queryKey: ["tv", "topRatedTVDetails", tv.series_id],
//         queryFn: () => fetchTVDetails(tv.series_id!),
//         staleTime: 1000 * 60 * 30,
//         gcTime: 1000 * 60 * 60 * 24 * 7,
//         enabled: !!tv.series_id && topRatedTV.length > 0,
//       })),

//       ...uniqueTV(popularTV).map((tv) => ({
//         queryKey: ["tv", "popularTVDetails", tv.series_id],
//         queryFn: () => fetchTVDetails(tv.series_id!),
//         staleTime: 1000 * 60 * 30,
//         gcTime: 1000 * 60 * 60 * 24 * 7,
//         enabled: !!tv.series_id && popularTV.length > 0,
//       })),

//       ...uniqueTV(airingTodayTV).map((tv) => ({
//         queryKey: ["tv", "airingTodayTVDetails", tv.series_id],
//         queryFn: () => fetchTVDetails(tv.series_id!),
//         staleTime: 1000 * 60 * 30,
//         gcTime: 1000 * 60 * 60 * 24 * 7,
//         enabled: !!tv.series_id && airingTodayTV.length > 0,
//       })),
//     ],
//   });

//   const trendingCount = trendingTV.length;
//   const topRatedCount = topRatedTV.length;
//   const popularCount = popularTV.length;
//   const airingTodayCount = airingTodayTV.length;

//   const trendingDetails = allTVDetails
//     .slice(0, trendingCount)
//     .map((query) => query.data)
//     .filter(Boolean);

//   const topRatedDetails = allTVDetails
//     .slice(trendingCount, trendingCount + topRatedCount)
//     .map((query) => query.data)
//     .filter(Boolean);

//   const popularDetails = allTVDetails
//     .slice(
//       trendingCount + topRatedCount,
//       trendingCount + topRatedCount + popularCount,
//     )
//     .map((query) => query.data)
//     .filter(Boolean);

//   const airingTodayDetails = allTVDetails
//     .slice(
//       trendingCount + topRatedCount + popularCount,
//       trendingCount + topRatedCount + popularCount + airingTodayCount,
//     )
//     .map((query) => query.data)
//     .filter(Boolean);

//   
