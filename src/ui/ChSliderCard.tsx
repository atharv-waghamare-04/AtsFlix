import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import type { Mov_TV } from "../types/general";

interface ChildSliderCardProps {
  movie: Mov_TV;
  idx: number;
  srcData: {
    backdropSrcSet: string;
    backdropSrc: string;
  };
  getGenreNames: string[];
  StarIcon: ComponentType<{ fontSize?: "small" | "medium" | "large" | "inherit" }>;
  type: string | undefined;
}

const ChildSliderCard = ({
  movie,
  idx,
  srcData,
  getGenreNames,
  StarIcon,
  type,
}: ChildSliderCardProps) => {
  const urlType = type === "tv" ? "stream" : "watch";
  const title = movie.title || movie.name || "Untitled";
  const year = movie.release_date
    ? movie.release_date.split("-")[0]
    : movie.first_air_date?.split("-")[0];

  const genreLabel = getGenreNames.join(" • ");
  const truncatedGenreLabel =
    genreLabel.length > 20 ? `${genreLabel.slice(0, 20)} ...` : genreLabel;

  return (
    <Link to={`/discover/${type}/${urlType}/${movie.id}`}>
      <div className="child-slider-item first:ml-5">
        <img
          loading={idx === 0 ? "eager" : "lazy"}
          decoding="async"
          srcSet={srcData.backdropSrcSet}
          src={srcData.backdropSrc}
          alt={title}
        />
        <div className="child-slider-overlay" />
        <div className="child-slide-content">
          <div className="child-slide-title">
            <span>{title}</span>
          </div>
          <div className="child-slide-subtitle">
            <span>{year}</span>
            <span className="text-[0.5rem]">●</span>
            <span>{truncatedGenreLabel}</span>
          </div>
        </div>
        <div className="child-slide-rating-wrapper">
          <div className="child-slide-rating">
            <StarIcon fontSize="small" />
            <span className="text-[0.8rem] sm:text-[1rem]">
              {(movie.vote_average ?? 0).toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChildSliderCard;
