import { useQueries } from "@tanstack/react-query";
import { useMovieDetails } from "./useMovies";
import { useTVDetails } from "./useTV";
import {
  fetchMovieDetailsCast,
  fetchMovieDetailsReviews,
  fetchMovieDetailsSimilar,
  fetchMovieDetailsVideos,
} from "../API/movieAPI";
import {
  fetchTVDetailsCast,
  fetchTVDetailsReviews,
  fetchTVDetailsSimilar,
  fetchTVDetailsTrailers,
  fetchTVDetailsEpisodes,
} from "../API/tvAPI";

const DETAIL_STALE_TIME = 1000 * 60 * 30;
const DETAIL_GC_TIME = 1000 * 60 * 60 * 24 * 7;

export const useDetailsQuery = (type: string | undefined, id: number) => {
  // Both hooks are always called in the same order. They share their own query
  // keys and React Query cache; the selected result is returned below.
  const movieDetails = useMovieDetails(id, type === "movies");
  const tvDetails = useTVDetails(id, type === "tv");

  return type === "tv" ? tvDetails : movieDetails;
};

export const useDetailsGridQuery = (id: number) => {
  const details = useQueries({
    queries: [
      {
        queryKey: ["movie", "detailsVideos", id],
        queryFn: () => fetchMovieDetailsVideos(id),
        staleTime: DETAIL_STALE_TIME,
        gcTime: DETAIL_GC_TIME,
        enabled: Number.isInteger(id) && id > 0,
      },
      {
        queryKey: ["movie", "detailsCast", id],
        queryFn: () => fetchMovieDetailsCast(id),
        staleTime: DETAIL_STALE_TIME,
        gcTime: DETAIL_GC_TIME,
        enabled: Number.isInteger(id) && id > 0,
      },
      {
        queryKey: ["movie", "detailsReviews", id],
        queryFn: () => fetchMovieDetailsReviews(id, 1),
        staleTime: DETAIL_STALE_TIME,
        gcTime: DETAIL_GC_TIME,
        enabled: Number.isInteger(id) && id > 0,
      },
      {
        queryKey: ["movie", "detailsSimilar", id],
        queryFn: () => fetchMovieDetailsSimilar(id),
        staleTime: DETAIL_STALE_TIME,
        gcTime: DETAIL_GC_TIME,
        enabled: Number.isInteger(id) && id > 0,
      },
    ],
  });

  const videos = details[0]?.data?.results ?? [];
  const cast = details[1]?.data?.cast ?? [];
  const reviews = details[2]?.data?.results ?? [];
  const similar = details[3]?.data?.results ?? [];

  return {
    VideoDetails: videos,
    CastDetails: cast,
    ReviewDetails: reviews,
    SimilarDetails: similar,
    IsDetailsLoading: details.some((query) => query.isLoading),
    isDetailsError: details.some((query) => query.isError),
    DetailsError: details.find((query) => query.isError)?.error,
  };
};

export const useTVDetailsCastReviewsSimilarQuery = (id: number) => {
  const details = useQueries({
    queries: [
      {
        queryKey: ["tv", "detailsReviews", id],
        queryFn: () => fetchTVDetailsReviews(id),
        staleTime: DETAIL_STALE_TIME,
        gcTime: DETAIL_GC_TIME,
        enabled: Number.isInteger(id) && id > 0,
      },
      {
        queryKey: ["tv", "detailsCast", id],
        queryFn: () => fetchTVDetailsCast(id),
        staleTime: DETAIL_STALE_TIME,
        gcTime: DETAIL_GC_TIME,
        enabled: Number.isInteger(id) && id > 0,
      },
      {
        queryKey: ["tv", "detailsSimilar", id],
        queryFn: () => fetchTVDetailsSimilar(id),
        staleTime: DETAIL_STALE_TIME,
        gcTime: DETAIL_GC_TIME,
        enabled: Number.isInteger(id) && id > 0,
      },
    ],
  });

  return {
    ReviewDetails: details[0]?.data?.results ?? [],
    CastDetails: details[1]?.data?.cast ?? [],
    SimilarDetails: details[2]?.data?.results ?? [],
    IsDetailsLoading: details.some((query) => query.isLoading),
    isDetailsError: details.some((query) => query.isError),
    DetailsError: details.find((query) => query.isError)?.error,
  };
};

export const useTVDetailsTrailersEpisodesQuery = (
  id: number | null,
  season: number | null,
) => {
  const isEnabled =
    typeof id === "number" &&
    Number.isInteger(id) &&
    id > 0 &&
    typeof season === "number" &&
    Number.isInteger(season) &&
    season >= 0;

  const details = useQueries({
    queries: [
      {
        queryKey: ["tv", "detailsTrailers", id, season],
        queryFn: () => fetchTVDetailsTrailers(id as number, season as number),
        staleTime: DETAIL_STALE_TIME,
        gcTime: DETAIL_GC_TIME,
        enabled: isEnabled,
      },
      {
        queryKey: ["tv", "detailsEpisodes", id, season],
        queryFn: () => fetchTVDetailsEpisodes(id as number, season as number),
        staleTime: DETAIL_STALE_TIME,
        gcTime: DETAIL_GC_TIME,
        enabled: isEnabled,
      },
    ],
  });

  return {
    TrailersDetails: details[0]?.data?.results ?? [],
    EpisodesDetails: details[1]?.data?.episodes ?? [],
    IsDetailsLoading: details.some((query) => query.isLoading),
    isDetailsError: details.some((query) => query.isError),
    DetailsError: details.find((query) => query.isError)?.error,
  };
};
