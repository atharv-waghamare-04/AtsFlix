import ChildSlider from "../ChildSlider";
import { useTopRatedMovies } from "../../hooks/useMovies";

const TopRatedMoviesSection = () => {
  const { topRatedMovies, isTopRatedMoviesLoading } = useTopRatedMovies({
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  return (
    <ChildSlider
      data={topRatedMovies}
      isDetailsLoading={isTopRatedMoviesLoading}
      title="Top Rated Movies"
      id="top-rated-movies"
    />
  );
};

export default TopRatedMoviesSection;
