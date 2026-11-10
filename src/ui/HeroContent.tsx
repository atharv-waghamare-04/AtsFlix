import { Link } from "react-router-dom";

interface HeroContentProps {
  StarIcon: React.ElementType;
  ArrowRightPlayIcon: React.ElementType;
  InfoIcon: React.ElementType;
  year: number;
  runtime?: string;
  spoken_languages?: string[] | undefined;
  vote_average: number;
  overview: string;
  homepage: string;
  title: string;
  isMobile: boolean;
  genres: string[] | undefined;
  playLink: string;
  infoLink: string;
  seasonsEpisodes?: string;
  tagline?: string;
}

export const HeroContent = ({
  StarIcon,
  ArrowRightPlayIcon,
  InfoIcon,
  year,
  runtime,
  spoken_languages = [],
  vote_average,
  overview,
  title,
  isMobile,
  genres = [],
  playLink,
  infoLink,
  seasonsEpisodes,
  tagline,
}: HeroContentProps) => {
  const spoken =
    spoken_languages?.length > 3
      ? spoken_languages.slice(0, 3)
      : spoken_languages.length <= 3
        ? spoken_languages
        : null;
  const genresLength =
    genres?.length > 3 ? genres.slice(0, 3) : genres?.length <= 3 ? genres : [];

    return (
    <div className="hero-content-wrapper ">
      <h2 className="flex flex-col text-center md:text-left">
        {title}
        {tagline && (
          <p className="text-sm sm:text-[1.1rem] text-[#fff]/60 group-hover:text-[#fff]/100 p-1 pl-2.5 mt-1 mx-1 bg-linear-to-r from-[#E50914] to-transparent rounded-sm md:w-full">
            {tagline}
          </p>
        )}
      </h2>

      <div className="hero-extra-content flex flex-col lg:flex-row gap-2 items-center justify-center sm:justify-start ">
        <div className="flex group-1 gap-2 lg:gap-4 items-center justify-center md:items-start md:justify-start md:text-left w-full lg:w-fit">
          <p>{year}</p>

          {runtime && seasonsEpisodes
            ? seasonsEpisodes + " | " + runtime
            : seasonsEpisodes
              ? seasonsEpisodes
              : runtime
                ? runtime
                : ""}
        </div>
        <div className="flex gap-4">
          <p>
            {spoken?.length > 0 && genresLength?.length > 0
              ? spoken?.join(", ") + " | " + genresLength?.join(", ")
              : spoken?.length > 0
                ? spoken?.join(", ")
                : genresLength?.length > 0
                  ? genresLength?.join(", ")
                  : ""}
          </p>
          <p className="flex items-center gap-0.5">
            <StarIcon fontSize="small" />
            {vote_average?.toFixed(1)}
          </p>
        </div>
      </div>
      <p className="px-2 md:px-1 text-sm">
        {overview?.length > 200 && isMobile
          ? overview?.slice(0, 100) + "..."
          : overview?.slice(0, 150) + "..."}
      </p>
      <div className="hero-buttons ">
        <Link to={playLink} className="play-button py-2 md:py-3">
          <ArrowRightPlayIcon fontSize="medium" />
          Play
        </Link>
        <Link to={infoLink} className="more-info-button py-2 md:py-3">
          <InfoIcon fontSize="medium" />
          More Info
        </Link>
      </div>
    </div>
  );
};

export default HeroContent;
