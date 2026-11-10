import { Link } from "react-router-dom";

const RankTiles = ({ movie, idx, srcData }) => {
  const rank = idx + 1;
  const isDoubleDigit = rank >= 10;
  return (
    <div
      className={`rankslider-item-wrapper ${
        isDoubleDigit ? "double-rank" : ""
      }`}
      style={{ zIndex: rank }}
    >
      <div className="rankslider-item">
        <div
          className={`rankslider-index ${
            isDoubleDigit
              ? "rankslider-index-double text-[10rem]sm:text-[12rem] md:text-[17rem] lg:text-[17rem] xl:text-[19.5rem]"
              : ""
          }`}
        >
          {rank}
        </div>
        <Link to={`discover/movies/watch/${movie?.id}`}>
          <div className="rankslider-img">
            <div className="overlay" />

            <img
              loading={idx === 0 ? "eager" : "lazy"}
              srcSet={srcData.posterSrcSet}
              src={srcData.posterSrc}
              alt={movie?.title || "No Image Found"}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RankTiles;
