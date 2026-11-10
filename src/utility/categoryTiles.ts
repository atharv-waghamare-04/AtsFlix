import {
  discoverTiles,
  exploreLanguageTiles,
  exploreMoviesGenreTiles,
  exploreTVGenreTiles,
} from "../config/tilesConfig";

export const getCategoryTiles = (currentType: string, category: string) => {
  return discoverTiles
    .filter((tile) => {
      if (tile.hideFor?.includes(currentType)) {
        return false;
      }

      if (tile.switchTile) {
        return tile.targetType !== currentType;
      }

      if (tile.category === category) {
        return false;
      }

      return true;
    })
    .map((tile) => {
      const type = tile.targetType ?? currentType;

      return {
        ...tile,

        type,

        path: `/${type}/${tile.category}`,
      };
    });
};

export const getExploreLanguageTiles = (
  type: string,
  category: string,
  value: string,
) => {
  return exploreLanguageTiles
    .filter((tile) => {
      if (tile.hideFor?.includes(category)) {
        return false;
      }

      if (tile.category === value) {
        return false;
      }

      return true;
    })
    .map((tile) => ({
      ...tile,
      path: `/discover/${type}/${category}/${tile.category}`,
    }));
};

export const getExploreMovieGenreTiles = (
  type: string,
  category: string,
  value: string,
) => {
  return exploreMoviesGenreTiles
    .filter((tile) => {
      if (tile.hideFor?.includes(type || category)) {
        return false;
      }

      if (tile.value === value) {
        return false;
      }

      return true;
    })
    .map((tile) => ({
      ...tile,
      path: `/discover/${type}/${category}/${tile.value}`,
    }));
};

export const getExploreTVGenreTiles = (
  type: string,
  category: string,
  value: string,
) => {
  return exploreTVGenreTiles
    .filter((tile) => {
      if (tile.hideFor?.includes(type || category)) {
        return false;
      }

      if (tile.value === value) {
        return false;
      }

      return true;
    })
    .map((tile) => ({
      ...tile,
      path: `/discover/${type}/${category}/${tile.value}`,
    }));
};
