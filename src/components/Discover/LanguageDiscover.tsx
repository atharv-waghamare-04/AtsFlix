import { Link } from "react-router-dom";
import { langConfig } from "../../config/langConfig";
import { useAllLanguagesMov } from "../../hooks/useMovies";
import DiscoverCard from "../../ui/DiscoverCard";
import type { Movie } from "../../types/movie";

const LanguageDiscover = () => {
  const {
    englishMovies,
    hindiMovies,
    bengaliMovies,
    tamilMovies,
    teluguMovies,
    marathiMovies,
    kannadaMovies,
    malayalamMovies,
    gujaratiMovies,
    japaneseMovies,
    koreanMovies,
    chineseMovies,
  } = useAllLanguagesMov({
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const langData = {
    en: englishMovies,
    hi: hindiMovies,
    bn: bengaliMovies,
    ta: tamilMovies,
    te: teluguMovies,
    mr: marathiMovies,
    kn: kannadaMovies,
    ml: malayalamMovies,
    gu: gujaratiMovies,
    ja: japaneseMovies,
    ko: koreanMovies,
    zh: chineseMovies,
  };

  
  const imageData = (data: Movie[] = []) => {
    if (!data) return [];

    return data?.map((item) => item?.poster_path || item?.backdrop_path);
  };

  const langImageData = (langCode: string) => {
    const data = langData[langCode as keyof typeof langData];
    return imageData(data);
  };

  return (
    <div className="discover-grid-wrapper">
      {langConfig.map((lang) => {
        const data = langImageData(lang.value);

        const localLangData = lang.original_lang;

        const langURL = `/discover/movies/languages/${lang.label.toLowerCase() + "-" + lang.value}`;
        
        
        return (
          <Link to={langURL} key={lang.label}>
            <DiscoverCard
              key={lang.label}
              title={lang.label}
              data={data}
              localLang={localLangData}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default LanguageDiscover;
