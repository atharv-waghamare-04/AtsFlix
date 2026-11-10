import ChildSlider from "../ChildSlider";
import { useUpcomingMovies } from "../../hooks/useMovies";

const UpcomingMoviesSection = () => {
  const { upcomingMovies, isUpcomingMoviesLoading } = useUpcomingMovies({
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  return (
    <ChildSlider
      data={upcomingMovies}
      isDetailsLoading={isUpcomingMoviesLoading}
      title="Upcoming Movies"
      id="upcoming-movies"
    />
  );
};

export default UpcomingMoviesSection;
