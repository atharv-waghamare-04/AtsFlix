import { useAllGenresMov } from "../../hooks/useMovies";
import DiscoverCard from "../../ui/DiscoverCard";

import { movieGenres } from "../../config/genreConfig";
import { Link } from "react-router-dom";
import type { Movie } from "../../types/movie";

const MovieDiscover = () => {
  const {
    actionMovies,
    adventureMovies,
    animationMovies,
    comedyMovies,
    crimeMovies,
    documentaryMovies,
    dramaMovies,
    familyMovies,
    fantasyMovies,
    historyMovies,
    horrorMovies,
    musicMovies,
    mysteryMovies,
    romanceMovies,
    scienceFictionMovies,
    tvMovieMovies,
    thrillerMovies,
    warMovies,
    westernMovies,

  } = useAllGenresMov({
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const genreData = {
    action: actionMovies,
    adventure: adventureMovies,
    animation: animationMovies,
    comedy: comedyMovies,
    crime: crimeMovies,
    documentary: documentaryMovies,
    drama: dramaMovies,
    family: familyMovies,
    fantasy: fantasyMovies,
    history: historyMovies,
    horror: horrorMovies,
    music: musicMovies,
    mystery: mysteryMovies,
    romance: romanceMovies,
    "science-fiction": scienceFictionMovies,
    "tv-movie": tvMovieMovies,
    thriller: thrillerMovies,
    war: warMovies,
    western: westernMovies,
  };

  
  const imageData = (data: Movie[] = []) => {
    if (!data) return [];

    return data.map((item) => item.poster_path || item.backdrop_path);
  };

  const dataFun = (genre) => {
    const movies = genreData[genre];
    return imageData(movies);
  };

  return (
    <div className="discover-grid-wrapper ">
      {movieGenres?.map((genre) => {
        const data = dataFun(genre.key);
        const icon = genre.icon;
                return (
          <Link
            to={`/discover/movies/genres/${genre.genre.toLowerCase()}`}
            key={genre.genre}
          >
            <DiscoverCard title={genre.genre} data={data} icon={icon} />
          </Link>
        );
      })}
    </div>
  );
};

export default MovieDiscover;
