import { useParams } from "react-router-dom";
import { useState } from "react";
import MovieCardMobile from "../ui/MovieCard";
import filterConfig from "../config/filterConfig";
import { categoryConfig } from "../config/categoryConfig";
import { useMovieFilters } from "../hooks/useMovieFilters";
import { getCategoryTiles } from "../utility/categoryTiles";
import { formatReleaseDate } from "../utility/dateUtils";
import { getGenreNames } from "../utility/genreUtils";
import CategoryTile from "../ui/CategoryTile";
import SortCards from "../ui/SortCards";
import {
  usePopularMoviesInfinite,
  useTrendingMoviesInfinite,
  useTopRatedMoviesInfinite,
  useUpcomingMoviesInfinite,
} from "../hooks/useMovies";
import {
  usePopularTVInfinite,
  useTrendingTVInfinite,
  useTopRatedTVInfinite,
  useAiringTodayTVInfinite,
} from "../hooks/useTV";

type SortType = "popularity" | "rating" | "release_date" | "language";

interface SortConfig {
  type: SortType;
  value: string;
}

const CategoryPage = () => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [isClicked, setIsClicked] = useState<number | null>(null);
  const { type, category } = useParams();

  const isMovies = type === "movies";
  const isTV = type === "tv";
  const queryOptions = { refetchOnMountOrArgChange: true };

  // Call every query hook in a stable order. Only the selected category is enabled.
  const popularMovies = usePopularMoviesInfinite({
    skip: !(isMovies && category === "popular"),
    ...queryOptions,
  });
  const trendingMovies = useTrendingMoviesInfinite({
    skip: !(isMovies && category === "trending"),
    ...queryOptions,
  });
  const topRatedMovies = useTopRatedMoviesInfinite({
    skip: !(isMovies && category === "top-rated"),
    ...queryOptions,
  });
  const upcomingMovies = useUpcomingMoviesInfinite({
    skip: !(isMovies && category === "upcoming"),
    ...queryOptions,
  });
  const popularTV = usePopularTVInfinite({
    skip: !(isTV && category === "popular"),
    ...queryOptions,
  });
  const trendingTV = useTrendingTVInfinite({
    skip: !(isTV && category === "trending"),
    ...queryOptions,
  });
  const topRatedTV = useTopRatedTVInfinite({
    skip: !(isTV && category === "top-rated"),
    ...queryOptions,
  });
  const airingTodayTV = useAiringTodayTVInfinite({
    skip: !(isTV && category === "airing-today"),
    ...queryOptions,
  });

  const typeConfig =
    type && type in categoryConfig
      ? categoryConfig[type as keyof typeof categoryConfig]
      : undefined;
  const config =
    typeConfig && category && category in typeConfig
      ? typeConfig[category as keyof typeof typeConfig]
      : undefined;

  const selectedQuery =
    isMovies
      ? category === "popular"
        ? popularMovies
        : category === "trending"
          ? trendingMovies
          : category === "top-rated"
            ? topRatedMovies
            : category === "upcoming"
              ? upcomingMovies
              : null
      : isTV
        ? category === "popular"
          ? popularTV
          : category === "trending"
            ? trendingTV
            : category === "top-rated"
              ? topRatedTV
              : category === "airing-today"
                ? airingTodayTV
                : null
        : null;

  const displayData = useMovieFilters(selectedQuery?.data ?? [], sortConfig);

  if (!type || !category) {
    return <div className="global-loading">Invalid Category</div>;
  }

  if (!config || !selectedQuery) {
    return <div className="global-loading">Category Not Found</div>;
  }

  const { fetchNextPage, hasNextPage, isFetchingNextPage } = selectedQuery;
  const categoryTiles = getCategoryTiles(type, category);

  return (
    <section id="category-page" className="background">
      <div className="main-wrapper">
        <div className="content-wrapper">
          <h1>{config.title}</h1>
          <p>{config.description}</p>

          <div className="content-tab-wrapper">
            {categoryTiles.map((tile) => (
              <CategoryTile
                key={tile.title}
                title={tile.title}
                icon={tile.icon}
                path={tile.path}
              />
            ))}
          </div>

          <div className="category-content-movie-wrapper">
            <div className="category-functions-wrapper">
              {filterConfig.map((functionsCard) => (
                <SortCards
                  key={functionsCard.type}
                  functionsCard={functionsCard}
                  options={functionsCard.options}
                  value={
                    sortConfig?.type === functionsCard.type
                      ? sortConfig.value
                      : ""
                  }
                  onChange={(event) => {
                    setSortConfig({
                      type: functionsCard.type,
                      value: event.target.value,
                    });
                  }}
                />
              ))}
            </div>

            <div className="movie-card-items-wrapper">
              {displayData.map((movie) => {
                const date = formatReleaseDate(movie);
                const genres = getGenreNames(movie.genre_ids ?? []);

                return (
                  <div
                    onClick={() => setIsClicked(movie.id)}
                    key={movie.id}
                    className="movie-card-item flex items-center justify-center"
                  >
                    <MovieCardMobile
                      title={movie.title || movie.name || "Untitled"}
                      year={date.year}
                      month={date.month}
                      ratings={Number(movie.vote_average ?? 0).toFixed(1)}
                      id={movie.id}
                      genres={genres}
                      image={movie.poster_path}
                      type={type}
                      isClicked={isClicked === movie.id}
                    />
                  </div>
                );
              })}
            </div>

            {hasNextPage && (
              <div className="load-more-button-wrapper overflow-y-visible">
                <button
                  disabled={isFetchingNextPage}
                  className="load-more-button"
                  type="button"
                  onClick={() => fetchNextPage()}
                >
                  <span className="uppercase">
                    {isFetchingNextPage ? "Loading..." : "Load More..."}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
