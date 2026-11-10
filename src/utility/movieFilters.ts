import type { Movie } from "../types/movie";

export type SortType = "popularity" | "release_date" | "rating" | "language";

export interface SortConfig {
  type: SortType;
  value: string;
}

const languageMap: Record<string, string> = {
  English: "en",
  Hindi: "hi",
  Tamil: "ta",
  Telugu: "te",
  Malayalam: "ml",
  Bengali: "bn",
  Kannada: "kn",
  Marathi: "mr",
  Gujarati: "gu",
  Japanese: "ja",
  Korean: "ko",
  Chinese: "zh",
};

const sortByNumber = (
  movies: Movie[],
  getValue: (movie: Movie) => number,
  direction: "asc" | "desc",
) => {
  const multiplier = direction === "asc" ? 1 : -1;
  return [...movies].sort(
    (a, b) => (getValue(a) - getValue(b)) * multiplier,
  );
};

const handlePopularity = (movies: Movie[], value: string): Movie[] => {
  switch (value) {
    case "High to Low":
      return sortByNumber(movies, (movie) => movie.popularity ?? 0, "desc");
    case "Low to High":
      return sortByNumber(movies, (movie) => movie.popularity ?? 0, "asc");
    case "Above 10000 Votes":
      return movies.filter((movie) => (movie.vote_count ?? 0) > 10000);
    case "Above 5000 Votes":
      return movies.filter((movie) => (movie.vote_count ?? 0) > 5000);
    case "Above 2000 Votes":
      return movies.filter((movie) => (movie.vote_count ?? 0) > 2000);
    case "Above 1000 Votes":
      return movies.filter((movie) => (movie.vote_count ?? 0) > 1000);
    case "Above 500 Votes":
      return movies.filter((movie) => (movie.vote_count ?? 0) > 500);
    default:
      return movies;
  }
};

const handleRating = (movies: Movie[], value: string): Movie[] => {
  switch (value) {
    case "Descending":
      return sortByNumber(movies, (movie) => movie.vote_average ?? 0, "desc");
    case "Ascending":
      return sortByNumber(movies, (movie) => movie.vote_average ?? 0, "asc");
    case "Above 5 Stars":
      return movies.filter((movie) => movie.vote_average > 5);
    case "Above 6 Stars":
      return movies.filter((movie) => movie.vote_average > 6);
    case "Above 7 Stars":
      return movies.filter((movie) => movie.vote_average > 7);
    case "Above 8 Stars":
      return movies.filter((movie) => movie.vote_average > 8);
    case "Above 9 Stars":
      return movies.filter((movie) => movie.vote_average > 9);
    default:
      return movies;
  }
};

const getMovieDate = (movie: Movie): Date | null => {
  const rawDate = movie.release_date || movie.first_air_date;
  if (!rawDate) return null;

  const date = new Date(`${rawDate}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
};

const handleDate = (movies: Movie[], value: string): Movie[] => {
  switch (value) {
    case "Latest":
      return [...movies].sort(
        (a, b) =>
          (getMovieDate(b)?.getTime() ?? 0) -
          (getMovieDate(a)?.getTime() ?? 0),
      );
    case "Oldest":
      return [...movies].sort(
        (a, b) =>
          (getMovieDate(a)?.getTime() ?? 0) -
          (getMovieDate(b)?.getTime() ?? 0),
      );
    case "This Year": {
      const currentYear = new Date().getFullYear();
      return movies.filter(
        (movie) => getMovieDate(movie)?.getFullYear() === currentYear,
      );
    }
    case "This Month": {
      const now = new Date();
      return movies.filter((movie) => {
        const date = getMovieDate(movie);
        return (
          date?.getFullYear() === now.getFullYear() &&
          date?.getMonth() === now.getMonth()
        );
      });
    }
    case "This Week": {
      const now = new Date();
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      startOfWeek.setHours(0, 0, 0, 0);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 7);

      return movies.filter((movie) => {
        const date = getMovieDate(movie);
        return date !== null && date >= startOfWeek && date < endOfWeek;
      });
    }
    default:
      return movies;
  }
};

const handleLanguage = (movies: Movie[], value: string): Movie[] => {
  const code = languageMap[value];
  return code
    ? movies.filter((movie) => movie.original_language === code)
    : movies;
};

export const filterMovies = (
  movies: Movie[],
  sort: SortConfig | null,
): Movie[] => {
  if (!sort) return movies;

  switch (sort.type) {
    case "popularity":
      return handlePopularity(movies, sort.value);
    case "rating":
      return handleRating(movies, sort.value);
    case "release_date":
      return handleDate(movies, sort.value);
    case "language":
      return handleLanguage(movies, sort.value);
    default:
      return movies;
  }
};

export default filterMovies;
