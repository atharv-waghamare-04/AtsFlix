import { imageUtils } from "../utility/imageUtils";
import RankTiles from "../ui/RankTiles";
import type { Movie } from "../types/movie";

const RankSlider = ({ movies = [] }: { movies?: Movie[] }) => {
  if (!movies) {
    return <div>Loading slider data...</div>;
  }

  const slicedMovies = movies?.slice(0, 10);

  
  return (
    <div data-lenis-prevent className="rankslider-wrapper fade-mask-horizontal">
      {slicedMovies?.map((movie, idx) => {
        const srcData = imageUtils({ data: movie });

                return <RankTiles movie={movie} idx={idx} srcData={srcData} />;
      })}
    </div>
  );
};

export default RankSlider;
