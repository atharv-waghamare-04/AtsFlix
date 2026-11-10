import noImage from "../../No_image_found.png";

export const imageUtils = ({ data }) => {
  const TMDB_IMAGE = "https://image.tmdb.org/t/p";

  const posterPath = data?.poster_path;
  const backdropPath = data?.backdrop_path;

  const hasPoster = Boolean(posterPath);
  const hasBackdrop = Boolean(backdropPath);

  /* -----------------------------
     POSTER
  ----------------------------- */

  const posterSrc = hasPoster ? `${TMDB_IMAGE}/w500${posterPath}` : noImage;

  const posterSrcSet = hasPoster
    ? `
        ${TMDB_IMAGE}/w342${posterPath} 342w,
        ${TMDB_IMAGE}/w500${posterPath} 500w,
        ${TMDB_IMAGE}/w780${posterPath} 780w
      `
    : noImage;

  /* -----------------------------
     BACKDROP
  ----------------------------- */

  const backdropSrc = hasBackdrop
    ? `${TMDB_IMAGE}/w1280${backdropPath}`
    : noImage;

  const backdropSrcSet = hasBackdrop
    ? `
        ${TMDB_IMAGE}/w300${backdropPath} 300w,
        ${TMDB_IMAGE}/w780${backdropPath} 780w,
        ${TMDB_IMAGE}/w1280${backdropPath} 1280w
      `
    : noImage;

  /* -----------------------------
     GENERAL FALLBACK
  ----------------------------- */

  const src = hasBackdrop ? backdropSrc : hasPoster ? posterSrc : noImage;

  return {
    src,

    posterSrc,
    posterSrcSet,

    backdropSrc,
    backdropSrcSet,
  };
};

export const imageUtilsTVDetails = ({ networks, production_companies }) => {
  const networksData =
    (networks ?? []).map((network) => {
      return {
        name: network.name,
        logo: network.logo_path,
      };
    });

  const productionCompanies =
    (production_companies ?? []).map((com) => {
      return {
        name: com.name,
        logo: com.logo_path,
      };
    });

  return [...networksData, ...productionCompanies];
};
