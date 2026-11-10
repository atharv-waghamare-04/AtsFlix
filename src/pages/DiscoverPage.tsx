import { useParams } from "react-router-dom";
import { discoverConfig } from "../config/discoverConfig";
import MovieDiscover from "../components/Discover/MovieDiscover";
import TVDiscover from "../components/Discover/TVDiscover";
import LanguageDiscover from "../components/Discover/LanguageDiscover";

const DiscoverPage = () => {
  const { type, category } = useParams();

  if (!type) return <div className="global-loading">Invalid Category</div>;

  if (!(type in discoverConfig))
    return <div className="global-loading">Category Not Found</div>;

  return (
    <section id="discover-page" className="background">
      <div className="main-wrapper ">
        <div className="discover-content mb-5 ">
          <div className="discover-header ">
            {category === "languages" ? (
              <h1 className="">Discover All {category}</h1>
            ) : (
              <h1>Discover All {type}</h1>
            )}
          </div>
          {type === "movies" ? (
            <p>
              Explore a world of cinema across genres, moods, and languages.
              From action-packed blockbusters and gripping thrillers to
              heartfelt romances, laugh-out-loud comedies, chilling horror,
              imaginative science fiction, fantasy, crime, drama, animation,
              documentaries, family films, and more, there is something for
              every kind of movie lover.
            </p>
          ) : type === "tv" ? (
            <p>
              Dive into an extensive collection of television shows created for
              every type of viewer. Explore popular genres such as Action &
              Adventure, Comedy, Crime, Drama, Animation, Documentary, Family,
              Kids, Mystery, Reality, News, Sci-Fi & Fantasy, Soap, Talk Shows,
              War & Politics, Westerns, and more.
            </p>
          ) : (
            <p>
              Discover movies through the languages and cultures that shape
              cinema around the world. Browse dedicated collections for English,
              Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, Marathi,
              Gujarati, Japanese, Korean, Chinese, and other languages to
              explore entertainment beyond your usual watchlist.
            </p>
          )}
        </div>

        {type === "movies" && category === "genres" ? (
          <MovieDiscover />
        ) : type === "tv" && category === "genres" ? (
          <TVDiscover />
        ) : type === "movies" && category === "languages" ? (
          <LanguageDiscover />
        ) : (
          <p className="global-loading">Invalid Category 404</p>
        )}
      </div>
    </section>
  );
};

export default DiscoverPage;
