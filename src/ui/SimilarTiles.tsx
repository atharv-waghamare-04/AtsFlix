import { Link } from "react-router-dom";

export const SimilarTiles = ({ movie, index }) => {
  return (
    <Link to={`/discover/movies/watch/${movie?.id}`}>
      <div className="similar-movie-wrapper h-[9rem] first:ml-5 gap-1 flex flex-col items-center justify-center">
        <div className="sim-movie-wrapper rounded-xl w-[6.5rem] overflow-hidden">
          <img
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            src={`https://image.tmdb.org/t/p/w342${movie?.poster_path}`}
            alt={movie?.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h3 className="text-sm text-neutral-400 text-center font-semibold leading-4">
          {movie?.title && movie?.title.length > 20
            ? `${movie?.title.slice(0, 20)}...`
            : movie?.title}
          {movie?.name && movie?.name.length > 20
            ? `${movie?.name.slice(0, 20)}...`
            : movie?.name}
        </h3>
      </div>
    </Link>
  );
};

export default SimilarTiles;
