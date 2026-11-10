import { useParams } from "react-router-dom";
import { useState } from "react";

import { discoverConfig } from "../config/discoverConfig";
import { useExploreMovies, useExploreTiles } from "../hooks/useExploreMovies";
import CategoryTile from "../ui/CategoryTile";
import { filterConfig } from "../config/filterConfig";
import SortCards from "../ui/SortCards";
import { useMovieFilters } from "../hooks/useMovieFilters";
import MovieCardMobile from "../ui/MovieCard";
import { formatReleaseDate } from "../utility/dateUtils";
import { getGenreNames } from "../utility/genreUtils";

type SortType = "popularity" | "rating" | "release_date" | "language";

interface SortConfig {
  type: SortType;
  value: string;
}

const ExploreBy = () => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const { type, category, value } = useParams();

  const typeConfig = type
    ? discoverConfig[type as keyof typeof discoverConfig]
    : undefined;

  const categoryConfig =
    typeConfig && category
      ? typeConfig[category as keyof typeof typeConfig]
      : undefined;

  const categoryList = categoryConfig?.list ?? [];
  const categoryFind = categoryList.find(
    (item) => item.path === `/discover/${type}/${category}/${value}`,
  );

  // These custom hooks run unconditionally; invalid routes simply disable fetching.
  const tilesData = useExploreTiles(type ?? "", category ?? "", value ?? "");
  const query = useExploreMovies(
    type ?? "",
    category ?? "",
    categoryFind?.name,
    categoryFind?.id,
  );
  const displayData = useMovieFilters(query?.data ?? [], sortConfig);

  if (!type || !category) {
    return <div className="global-loading">Invalid Category</div>;
  }

  if (!typeConfig) {
    return <div className="global-loading">Type Not Found</div>;
  }

  if (!categoryConfig) {
    return <div className="global-loading">Category Not Found</div>;
  }

  if (!categoryFind) {
    return <div className="global-loading">Category Item Not Found</div>;
  }

  if (!query) {
    return <div className="global-loading">Category Not Found</div>;
  }

  const { hasNextPage, fetchNextPage, isFetchingNextPage } = query;
  return (
    <section id="explore-by-page" className="background">
      <div className="main-wrapper">
        <div className="content-wrapper">
          <h1 className="text-center">
            Explore Our{" "}
            <span className="text-[#e50914]/90">
              {categoryFind.name}
            </span>{" "}
            {type} Collections
          </h1>
          <p className="text-center w-full">{categoryFind.description}</p>
        </div>

        <div className="content-tab-wrapper flex-wrap mt-10 mb-5">
          {tilesData.map((tile) => (
            <CategoryTile
              key={tile.path}
              title={tile.title}
              path={tile.path}
              icon={false}
            />
          ))}
        </div>

        <div className="category-content-movie-wrapper">
          <div className="category-functions-wrapper mb-3">
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
        </div>

        <div className="movie-card-items-wrapper">
          {displayData.map((movie) => {
            const date = formatReleaseDate(movie);
            const genres = getGenreNames(movie?.genre_ids ?? []);

            return (
              <MovieCardMobile
                key={movie.id}
                title={movie?.title || movie?.name || "Untitled"}
                year={date.year}
                month={date.month}
                ratings={Number(movie?.vote_average ?? 0).toFixed(1)}
                id={movie?.id}
                genres={genres}
                image={movie?.poster_path}
                type={type}
                isClicked={false}
              />
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
    </section>
  );
};

export default ExploreBy;
