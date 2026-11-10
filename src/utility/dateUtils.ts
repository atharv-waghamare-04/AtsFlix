export const formatReleaseDate = (movie: { release_date?: string | null; first_air_date?: string | null; created_at?: string | null }) => {
  const date = new Date(
    movie?.release_date || movie?.first_air_date || movie?.created_at || "",
  );

  const onlyDate = date.getDate();

  const month = date.toLocaleString("default", {
    month: "short",
  });

  const year = date.getFullYear();

  return {
    onlyDate,
    month,
    year,
  };
};

export default formatReleaseDate;
