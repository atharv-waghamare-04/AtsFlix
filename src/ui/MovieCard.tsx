import { Link } from "react-router-dom";
import { PlayIcon, StarIcon } from "../icons/categoryPage";
import noImage from "/No_image_found.png";
import useMediaQueries from "../hooks/useMediaQueries";

const MovieCardMobile = ({
  title,
  year,
  month,
  ratings,
  id,
  genres,
  image,
  type,
  isClicked,
}) => {
    const { isSmallMobile, isMobileOrTablet } = useMediaQueries();
  const hasImage = Boolean(image);
  return (
    <div className="movie-card-mobile-main-wrapper group">
      <div className={`movie-card-image `}>
        <img
          className={`${isClicked ? "scale-110 " : "scale-100"} transition-all duration-100 ease-in`}
          loading="lazy"
          decoding="async"
          srcSet={
            hasImage
              ? `https://image.tmdb.org/t/p/w342${image} 342w, https://image.tmdb.org/t/p/w185${image} 185w`
              : undefined
          }
          src={hasImage ? `https://image.tmdb.org/t/p/w342${image}` : noImage}
          alt={hasImage ? `${title}-image` : "No-image-found"}
        />
        <div className="movie-card-overlay"></div>
        <div
          className="absolute inset-0 rounded-2xl 
                backdrop-blur-md 
                [mask-image:linear-gradient(to_bottom,transparent_35%,black_75%)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent_35%,black_75%)]"
        ></div>
      </div>

      <div className="movie-card-info">
        <h1>{title}</h1>
        <div className="movie-card-year-rating ">
          <div className="flex gap-2 text-xl font-extrabold uppercase ">
            <p className="italic">{month}</p>
            <p className="italic">{year}</p>
          </div>
          <div className="movie-card-ratings-wrapper ">
            <StarIcon fontSize="small" />
            <p className="">{ratings}</p>
          </div>
        </div>
        <div
          className={`movie-card-buttons ${(isSmallMobile || isMobileOrTablet) && isClicked ? "flex" : "hidden"}`}
        >
          <Link
            to={
              type === "movies"
                ? `/discover/movies/watch/${id}`
                : `/discover/${type}/stream/${id}`
            }
          >
            <button className="movie-card-watch-now">
              <PlayIcon />
              Watch Now
            </button>
          </Link>
          <Link
            to={
              type === "movies"
                ? `/discover/movies/watch/${id}`
                : `/discover/${type}/stream/${id}`
            }
          >
            <button className="movie-card-more-info">More Info</button>
          </Link>
        </div>
        <div className="movie-card-genres">
          {genres?.map((genre, idx) => {
            return (
              <div className="movie-card-genre" key={idx}>
                {genre}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCardMobile;
