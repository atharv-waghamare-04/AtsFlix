import ChildSlider from "../ChildSlider";
import { usePopularTV } from "../../hooks/useTV";

const PopularTVSection = () => {
  const { popularTV, isPopularTVLoading } = usePopularTV({
    skip: false,
    refetchOnMountOrArgChange: true,
  });
    return (
    <ChildSlider
      data={popularTV}
      isDetailsLoading={isPopularTVLoading}
      title="Popular TV Shows"
      id="popular-tv"
    />
  );
};

export default PopularTVSection;
