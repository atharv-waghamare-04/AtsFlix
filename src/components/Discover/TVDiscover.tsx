import { useAllGenresTV } from "../../hooks/useTV";
import DiscoverCard from "../../ui/DiscoverCard";
import { tvGenres } from "../../config/genreConfig";
import { Link } from "react-router-dom";
import type { Movie } from "../../types/movie";

const TVDiscover = () => {
  const {
    actionAdventureTVShows,
    animationTVShows,
    comedyTVShows,
    crimeTVShows,
    documentaryTVShows,
    dramaTVShows,
    familyTVShows,
    kidsTVShows,
    mysteryTVShows,
    newsTVShows,
    realityTVShows,
    sciFiTVShows,
    soapTVShows,
    talkTVShows,
    warPoliticsTVShows,
    westernTVShows,

  } = useAllGenresTV(
    {
      skip: false,
      refetchOnMountOrArgChange: true,
    }
  );

  const tvGenresData = {
    "action-adventure": actionAdventureTVShows,
    animation: animationTVShows,
    comedy: comedyTVShows,
    crime: crimeTVShows,
    documentary: documentaryTVShows,
    drama: dramaTVShows,
    family: familyTVShows,
    kids: kidsTVShows,
    mystery: mysteryTVShows,
    news: newsTVShows,
    reality: realityTVShows,
    sciFi: sciFiTVShows,
    soap: soapTVShows,
    talk: talkTVShows,
    warPolitics: warPoliticsTVShows,
    western: westernTVShows,
  };

  
  const imageData = (data: Movie[] = []) => {
    if (!data) return [];

    return data.map((item) => item.poster_path || item.backdrop_path);
  };

  const dataFun = (genre) => {
    const movies = tvGenresData[genre.key];
    return imageData(movies);
  };

  return (
    <div className="discover-grid-wrapper">
      {tvGenres.map((genre, idx) => {
        const data = dataFun(genre);
        const iconsData = genre.Icon;
        return (
          <Link to={`/discover/tv/genres/${genre.key}`}>
            <DiscoverCard
              key={idx}
              data={data}
              title={genre.key}
              icon={iconsData}
              localLang=""
            />
          </Link>
        );
      })}
    </div>
  );
};

export default TVDiscover;
