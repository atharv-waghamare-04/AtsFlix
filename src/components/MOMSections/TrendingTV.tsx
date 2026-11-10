import ChildSlider from "../ChildSlider";
import { useTrendingTV } from "../../hooks/useTV";

const TrendingTVSection = () => {
  const { trendingTV, isTrendingTVLoading } = useTrendingTV({
    skip: false,
    refetchOnMountOrArgChange: true,
  });
    return (
    <ChildSlider
      data={trendingTV}
      isDetailsLoading={isTrendingTVLoading}
      title="Trending TV Shows"
      id="trending-tv"
    />
  );
};

export default TrendingTVSection;
