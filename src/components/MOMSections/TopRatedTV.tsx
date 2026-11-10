import ChildSlider from "../ChildSlider";
import { useTopRatedTV } from "../../hooks/useTV";

const TopRatedTVSection = () => {
  const { topRatedTV, isTopRatedTVLoading } = useTopRatedTV({
    skip: false,
    refetchOnMountOrArgChange: true,
  });
    return (
    <ChildSlider
      data={topRatedTV}
      isDetailsLoading={isTopRatedTVLoading}
      title="Top Rated TV Shows"
      id="topRated-tv"
    />
  );
};

export default TopRatedTVSection;
