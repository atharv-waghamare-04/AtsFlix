import { axiosTMDBInstance } from "./axios";

export const fetchTrendingTV = async (params: number) => {
  const { data } = await axiosTMDBInstance.get(
    "/trending/tv/week",
    {
      params: {
        page: params,
      },
    },
  );
    return data;
};

export const fetchAiringTodayTV = async (params: number) => {
  const { data } = await axiosTMDBInstance.get("/tv/airing_today", {
    params: {
      page: params,
    },
  });
    return data;
};

export const fetchTopRatedTV = async (params: number) => {
  const { data } = await axiosTMDBInstance.get("/tv/top_rated", {
    params: {
      page: params,
    },
  });
    return data;
};

export const fetchPopularTV = async (params: number) => {
  const { data } = await axiosTMDBInstance.get("/tv/popular", {
    params: {
      page: params,
    },
  });
    return data;
};

export const fetchLanguageTV = async (lang: string[], params: number) => {
  const langArr = lang.length > 1 ? lang.join("|") : lang[0];
  const { data } = await axiosTMDBInstance.get("/discover/tv", {
    params: {
      with_original_language: langArr,
      with_spoken_languages: langArr,
      sort_by: "popularity.desc",
      include_adult: "false",
      include_video: "false",
      page: params,
    },
  });
    return data;
};

export const fetchGenresTV = async (genres: number[], params: number) => {
  const genreIds = genres.length > 1 ? genres.join("|") : genres[0];
  const { data } = await axiosTMDBInstance.get("/discover/tv", {
    params: {
      with_genres: genreIds,
      sort_by: "popularity.desc",
      include_adult: "false",
      include_video: "false",
      page: params,
    },
  });
    return data;
};

export const fetchTVDetails = async (series_id: number) => {
  const { data } = await axiosTMDBInstance.get(`/tv/${series_id}`);
    return data;
};

export const fetchTVDetailsCast = async (series_id: number) => {
  const { data } = await axiosTMDBInstance.get(`/tv/${series_id}/credits`);
    return data;
};

export const fetchTVDetailsReviews = async (series_id: number) => {
  const { data } = await axiosTMDBInstance.get(`/tv/${series_id}/reviews`);
    return data;
};

export const fetchTVDetailsSimilar = async (series_id: number) => {
  const { data } = await axiosTMDBInstance.get(`/tv/${series_id}/similar`);
    return data;
};

export const fetchTVDetailsTrailers = async (
  series_id: number,
  season_number: number,
) => {
  const { data } = await axiosTMDBInstance.get(
    `/tv/${series_id}/season/${season_number}/videos`,
  );

  
  return data;
};

export const fetchTVDetailsEpisodes = async (
  series_id: number,
  season_number: number,
) => {
  const { data } = await axiosTMDBInstance.get(
    `/tv/${series_id}/season/${season_number}`,
  );

  
  return data;
};
