import ChildSlider from "../ChildSlider";
import { useAiringTodayTV } from "../../hooks/useTV";

const AiringTodayTVSection = () => {
  const { airingTodayTV, isAiringTodayTVLoading } =
    useAiringTodayTV({
      skip: false,
      refetchOnMountOrArgChange: true,
    });
  
  if (isAiringTodayTVLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <ChildSlider
      data={airingTodayTV}
      isDetailsLoading={isAiringTodayTVLoading}
      title="Airing Today"
      id="airing-today-tv"
    />
  );
};

export default AiringTodayTVSection;
