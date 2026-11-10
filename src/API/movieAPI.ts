import { axiosTMDBInstance } from "./axios.ts";

import { allLangConfig } from "../config/langConfig";

const formatLocalDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getTodayDate = () => formatLocalDate(new Date());


const getFutureDate = (days: number) => {
  const date = new Date();

  date.setDate(date.getDate() + days);

  return formatLocalDate(date);
};

const langArr = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Malayalam",
  "Kannada",
  "Bengali",
  "Marathi",
  "Gujarati",
  "Japanese",
  "Korean",
  "Chinese",
];
const getLanguageCodes = (languageNames: string[]) => {
  return languageNames
    .map((name) => {
      const language = allLangConfig.find(
        (lang) => lang.english_name.toLowerCase() === name.toLowerCase(),
      );
      return language?.iso_639_1;
    })
    .filter(Boolean);
};

export const fetchTopRatedMov = async (page: number) => {
  const getLanguages = getLanguageCodes(langArr).join("|");
  const { data } = await axiosTMDBInstance.get("/movie/top_rated", {
    params: {
      with_original_language: getLanguages,
      page: page,
      include_adult: "false",
      include_video: "false",
    },
  });

  return data;
};

export const fetchUpcomingMov = async (page: number) => {
  const getToday = getTodayDate();

  const getFuture = getFutureDate(180);

  const getLanguages = getLanguageCodes(langArr).join("|");

  const { data } = await axiosTMDBInstance.get("/movie/upcoming", {
    params: {
      with_original_language: getLanguages,
      page: page,
      sort_by: "release_date.desc",
      "primary_release_date.gte": getToday,
      "primary_release_date.lte": getFuture,
      include_adult: "false",
      include_video: "false",
    },
  });

  
  return data;
};

export const fetchTrendingMov = async (page: number) => {
  const getLanguages = getLanguageCodes(langArr).join("|");
  const { data } = await axiosTMDBInstance.get(`/trending/movie/week`, {
    params: {
      with_original_language: getLanguages,
      page: page,
      sort_by: "popularity.desc",
      include_adult: "false",
      include_video: "false",
    },
  });

  return data;
};

export const fetchPopularMov = async (page: number) => {
    const getLanguages = getLanguageCodes(langArr).join("|");
  const { data } = await axiosTMDBInstance.get("/discover/movie", {
    params: {
      with_original_language: getLanguages,
      page: page,
      sort_by: "popularity.desc",
      include_adult: "false",
      include_video: "false",
    },
  });

    
  return data ?? [];
};

export const fetchLanguageMov = async (language: string[], page: number) => {
  const langArr = language.length > 1 ? language.join("|") : language[0];
  const { data } = await axiosTMDBInstance.get("/discover/movie", {
    params: {
      with_original_language: langArr,
      page: page,
      sort_by: "popularity.desc",
      include_adult: "false",
      include_video: "false",
    },
  });

  return data;
};

export const fetchGenresMov = async (genres: number[], page: number) => {
  const genreIds = genres.length > 1 ? genres.join("|") : genres[0];
  const { data } = await axiosTMDBInstance.get("/discover/movie", {
    params: {
      with_genres: genreIds,
      page: page,
      sort_by: "popularity.desc",
      include_adult: "false",
      include_video: "false",
    },
  });

  
  return data;
};

export const fetchMovieDetails = async (id: number) => {
  const { data } = await axiosTMDBInstance.get(`/movie/${id}`);

    return data;
};

export const fetchMovieDetailsImages = async (id: number) => {
  const { data } = await axiosTMDBInstance.get(`/movie/${id}/images`);

    return data;
};

export const fetchMovieDetailsVideos = async (id: number) => {
  const { data } = await axiosTMDBInstance.get(`/movie/${id}/videos`);

    return data;
};

export const fetchMovieDetailsSimilar = async (id: number) => {
  const { data } = await axiosTMDBInstance.get(`/movie/${id}/similar`);

    return data;
};

export const fetchMovieDetailsCast = async (id: number) => {
  const { data } = await axiosTMDBInstance.get(`/movie/${id}/credits`);

    return data;
};

export const fetchMovieDetailsReviews = async (id: number, page = 1) => {
  const { data } = await axiosTMDBInstance.get(`/movie/${id}/reviews`, {
    params: {
      page: page,
    },
  });

    return data;
};
