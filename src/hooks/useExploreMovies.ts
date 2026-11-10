import {
  useGenresMoviesInfinite,
  useLanguageMoviesInfinite,
} from "./useMovies";
import { useGenresTVInfinite } from "./useTV";
import {
  getExploreLanguageTiles,
  getExploreMovieGenreTiles,
  getExploreTVGenreTiles,
} from "../utility/categoryTiles";

export function useExploreMovies(
  type: string,
  category: string,
  name?: string,
  id?: number,
) {
  const isMovieLanguage = type === "movies" && category === "languages";
  const isMovieGenre = type === "movies" && category === "genres";
  const isTVGenre = type === "tv" && category === "genres";

  // All hooks are called on every render. `enabled` controls network activity.
  const language = useLanguageMoviesInfinite(
    { skip: false },
    name ? [name] : [],
    { enabled: isMovieLanguage && Boolean(name) },
  );

  const movieGenres = useGenresMoviesInfinite(
    { skip: false },
    typeof id === "number" ? [id] : [],
    { enabled: isMovieGenre && Number.isInteger(id) },
  );

  const tvGenres = useGenresTVInfinite(
    { skip: false },
    typeof id === "number" ? [id] : [],
    { enabled: isTVGenre && Number.isInteger(id) },
  );

  if (isMovieLanguage) return language;
  if (isMovieGenre) return movieGenres;
  if (isTVGenre) return tvGenres;

  return null;
}

export const useExploreTiles = (type: string, category: string, value = "") => {
  if (type === "movies" && category === "languages") {
    return getExploreLanguageTiles(type, category, value);
  }

  if (type === "movies" && category === "genres") {
    return getExploreMovieGenreTiles(type, category, value);
  }

  if (type === "tv" && category === "genres") {
    return getExploreTVGenreTiles(type, category, value);
  }

  return [];
};
