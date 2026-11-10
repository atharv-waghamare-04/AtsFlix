import { StarIcon } from "../icons/heroSlider";
import type { Mov_TV_Details } from "../types/general";
import ChildSliderCard from "../ui/ChSliderCard";
import { imageUtils } from "../utility/imageUtils";
import { getGenreNames } from "../utility/genreUtils";
import { ChildConfig } from "../config/childConfig";

const ChildSlider = ({
  data = [],
  id,
  title,
}: Mov_TV_Details) => {
  const type = ChildConfig.find(
    (item) => item.name.toLowerCase() === title.toLowerCase(),
  )?.type;
    return (
    <>
      <div className="child-slider-title">
        <h1>{title}</h1>
      </div>
      <div
        data-lenis-prevent
        id={id}
        className="child-slider-main-wrapper fade-mask-horizontal "
      >
        {data?.map((movie, idx) => {
          const srcData = imageUtils({ data: movie });
          return (
            <ChildSliderCard
              key={movie.id}
              movie={movie}
              idx={idx}
              srcData={srcData}
              getGenreNames={getGenreNames(movie?.genre_ids ?? []).filter((name): name is string => Boolean(name))}
              StarIcon={StarIcon}
              type={type}
            />
          );
        })}
      </div>
    </>
  );
};

export default ChildSlider;
