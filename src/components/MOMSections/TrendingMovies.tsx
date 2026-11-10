import ChildSlider from "../ChildSlider";
import { useTrendingMovies } from "../../hooks/useMovies";

const TrendingMoviesSection = () => {
  const { trendingMovies, isTrendingMoviesLoading } = useTrendingMovies({
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  return (
    <ChildSlider
      data={trendingMovies}
      isDetailsLoading={isTrendingMoviesLoading}
      title="Trending Movies"
      id="trending-movies"
    />
  );
};

export default TrendingMoviesSection;
