import type { Mov_TV } from "../types/general";

export type TimeWindow = "day" | "week";

export type Language =
  | "en-US"
  | "ko-KR"
  | "ja-JP"
  | "zh-CN"
  | "zh-TW"
  | "es-ES"
  | "fr-FR"
  | "de-DE"
  | "it-IT"
  | "hi-IN"
  | "pt-BR";

export interface TVDetails {
  trendingTV?: TV[];
  topRatedTV?: TV[];
  popularTV?: TV[];
  airingTodayTV?: TV[];
  trendingTVDetails?: Mov_TV[];
  topRatedTVDetails?: Mov_TV[];
  popularTVDetails?: Mov_TV[];
  airingTodayTVDetails?: Mov_TV[];
  isMOMsTVLoading?: boolean;
  isMOMsTVDetailsLoading?: boolean;
}

export type UseMOMsTVDetailsResult = {
  trendingTV?: TVDetails["trendingTV"];
  topRatedTV?: TVDetails["topRatedTV"];
  popularTV?: TVDetails["popularTV"];
  airingTodayTV?: TVDetails["airingTodayTV"];
  trendingTVDetails?: TVDetails["trendingTVDetails"];
  topRatedTVDetails?: TVDetails["topRatedTVDetails"];
  popularTVDetails?: TVDetails["popularTVDetails"];
  airingTodayTVDetails?: TVDetails["airingTodayTVDetails"];
  isMOMsTVDetailsLoading: boolean;
};

type TV = {
  backdrop_path: string | null;
  first_air_date: string | null;
  genre_ids: number[] | null;
  series_id: number;
  name: string | null;
  origin_country: string[] | null;
  original_language: string | null;
  original_name: string | null;
  overview: string | null;
  popularity: number | null;
  poster_path: string | null;
  vote_average: number | null;
  vote_count: number | null;
};
