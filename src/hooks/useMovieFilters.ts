import { useMemo } from "react";
import type { Movie } from "../types/movie";
import { filterMovies } from "../utility/movieFilters";
import type { SortConfig } from "../utility/movieFilters";

export const useMovieFilters = (
  movies: Movie[] | undefined,
  sortConfig: SortConfig | null,
): Movie[] => {
  return useMemo(
    () => filterMovies(movies ?? [], sortConfig),
    [movies, sortConfig],
  );
};
