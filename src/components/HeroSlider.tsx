import { useMediaQueries } from "../hooks/useMediaQueries";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightPlayIcon, InfoIcon, StarIcon } from "../icons/detailsPage";
import { Autoplay, Pagination, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { formatReleaseDate } from "../utility/dateUtils";
import { HeroPoster } from "../ui/HeroPoster";
import { HeroContent } from "../ui/HeroContent";
import { getGenreNames } from "../utility/genreUtils";
import type { Movie } from "../types/movie";

interface HeroSliderProps { movies?: Movie[]; loading?: boolean; }

const HeroSlider = ({ movies = [] }: HeroSliderProps) => {
  const { isMobile } = useMediaQueries();

  return (
    <section id="hero-slider">
      <Swiper
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        virtual={{
          enabled: true,
        }}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor
        spaceBetween={100}
        modules={[Pagination, Autoplay, Virtual]}
      >
        {movies?.map((movie, index) => {
          const { onlyDate, month, year } = formatReleaseDate(movie);

          
          const genres = getGenreNames(movie?.genre_ids ?? []).filter((name): name is string => Boolean(name));

                    return (
            <SwiperSlide
              key={movie.id || index}
              virtualIndex={index}
              className="hero-main-wrapper "
            >
              <div
                key={movie.id || index}
                className="hero-swiper-slide-wrapper relative h-full w-full"
              >
                <HeroPoster data={movie} isMobile={isMobile} />
                <div className="hero-content-main-wrapper bottom-10 md:bottom-10">
                  <HeroContent
                    StarIcon={StarIcon}
                    ArrowRightPlayIcon={ArrowRightPlayIcon}
                    InfoIcon={InfoIcon}
                    year={year}
                    vote_average={movie.vote_average}
                    overview={movie.overview}
                    homepage={movie.homepage}
                    title={movie.title}
                    isMobile={isMobile}
                    genres={genres}
                    playLink={`/discover/movies/watch/${movie.id}`}
                    infoLink={`/discover/movies/watch/${movie.id}`}
                    tagline={movie?.tagline}
                  />
                </div>
                <span className="text-neutral-300 uppercase italic text-[0.8rem] sm:text-[1rem] md:text-[4rem] font-black mt-2 md:mt-10 absolute top-0 left-1/2 -translate-x-1/2 md:leading-3">
                  {onlyDate} {month}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
