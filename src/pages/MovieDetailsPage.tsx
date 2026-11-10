import { useParams } from "react-router-dom";
import { useDetailsGridQuery, useDetailsQuery } from "../hooks/useDetailsQuery";
import { formatReleaseDate } from "../utility/dateUtils";
import { runtimeUtils } from "../utility/runtimeUtils";
import {
  ArrowRightPlayIcon,
  InfoIcon,
  StarIcon,
  KeyRightIcon,
  ProfileIcon,
} from "../icons/detailsPage";
import { BoxOfficeTiles } from "../ui/BoxOfficeTiles";
import { HeroPoster } from "../ui/HeroPoster";
import { useMediaQueries } from "../hooks/useMediaQueries";
import { getBoxVerdict } from "../hooks/useBoxVerdict";
import { HeroContent } from "../ui/HeroContent";
import { useState } from "react";
import { CastTiles } from "../ui/CastTiles";
import { SimilarTiles } from "../ui/SimilarTiles";
import { displayVideoDetails as disVideoDetails } from "../utility/videoDetails";
import { ReviewTiles } from "../ui/ReviewTiles";
import DetailsPageSkeleton from "../ui/DetailsPageSkeleton";

const MovieDetailsPage = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const { type, id } = useParams();

  const detailsConfig = {
    movies: {},
  };

  const { isMobile, isTablet } = useMediaQueries();

  const idNumber = Number(id);
  const query = useDetailsQuery(type, idNumber);
  const { data, isLoading, isError } = query;
  const {
    VideoDetails,
    CastDetails,
    ReviewDetails,
    SimilarDetails,
  } = useDetailsGridQuery(idNumber);

  if (!type || !id)
    return <div className="global-loading">Invalid Category</div>;

  if (!(type in detailsConfig))
    return <div className="global-loading">Category Not Found</div>;

  const displayVideoDetails = disVideoDetails(VideoDetails);

  const displayCastDetails = CastDetails?.slice(0, 30);

  


  
  if (isLoading) return <DetailsPageSkeleton kind="movie" />;

  if (isError) {
    return (
      <div className="background">
        <div className="global-loading flex-col gap-3 px-6 text-center">
          <span>Unable to load movie details.</span>
          <span className="text-sm font-normal normal-case text-gray-400">
            Please check your connection and try again.
          </span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="background">
        <div className="global-loading">Movie details not found.</div>
      </div>
    );
  }

  
  const { year } = formatReleaseDate(data);

  const runtime = runtimeUtils(data.runtime);

  const dg1 = getBoxVerdict(data);

  
  const spokenLang = data.spoken_languages.map((lan) => {
    return lan.english_name || lan.name;
  });

  const genres = data.genres.map((gen) => {
    if (gen.name === "Science Fiction") return "Sci-Fi";

    return gen.name;
  });

  
  return (
    <div className="background">
      <div className="main-wrapper">
        <div className="hero-main-wrapper w-[97%] group">
          <HeroPoster data={data} isMobile={isMobile} />
          <div className="hero-content-main-wrapper bottom-18 md:bottom-30">
            <HeroContent
              StarIcon={StarIcon}
              ArrowRightPlayIcon={ArrowRightPlayIcon}
              InfoIcon={InfoIcon}
              year={year}
              runtime={runtime}
              spoken_languages={spokenLang}
              vote_average={data.vote_average}
              overview={data.overview}
              homepage={data.homepage}
              title={data.title}
              isMobile={isMobile}
              genres={genres}
              playLink={data.homepage}
              infoLink={data.homepage}
              tagline={data.tagline}
            />
          </div>
        </div>
        <div className="details-main-wrapper">
          {data.budget > 0 && (
            <div
              id="box_office_revenue"
              className="dg-1 xl:max-w-[80rem] max-w-[28rem] sm:max-w-[38rem] md:max-w-[50rem] lg:max-w-[60rem] w-full h-full"
            >
              {dg1.map((dg) => (
                <div
                  key={dg.title}
                  onMouseEnter={() => setIsHovered(dg.title)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <BoxOfficeTiles
                    isMobile={isMobile}
                    value={dg.value}
                    title={dg.title}
                    description={dg.description}
                    htmlColor={dg.htmlColor}
                    Icon={dg.icon}
                    KeyRightIcon={KeyRightIcon}
                    isTablet={isTablet}
                    isHovered={isHovered === dg.title}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-3.5 w-full items-start  ">
            {/* =========================
      LEFT SIDE
      Clips + Casts
  ========================== */}

            <div
              className={`flex   gap-3.5 min-w-0 w-full h-full  ${
                ReviewDetails.length > 0
                  ? "xl:col-span-3 flex-col"
                  : "xl:col-span-5"
              }`}
            >
              {/* CLIPS */}
              {displayVideoDetails.length > 0 && (
                <div
                  id="clips_and_more"
                  className="dg-2 neutral-rounded-wrapper w-full min-w-0 max-w-none"
                >
                  <h1>Clips and More</h1>

                  <div
                    data-lenis-prevent
                    className="video-details-wrapper fade-mask-horizontal"
                  >
                    {displayVideoDetails.map((video) => {
                      return (
                        <div
                          key={video?.id}
                          className="video-wrapper lg:first:ml-5"
                        >
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video?.key}`}
                            title={video?.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CASTS */}
              {displayCastDetails.length > 0 && (
                <div
                  id="cast_and_crew"
                  className="dg-4 neutral-rounded-wrapper w-full min-w-0 max-w-none"
                >
                  <h1>Casts</h1>

                  <div
                    data-lenis-prevent
                    className="cast-details-wrapper w-full min-w-0 max-w-full flex flex-nowrap overflow-x-scroll scrollbar-none fade-mask-horizontal space-x-5"
                  >
                    {displayCastDetails.map((cast, index) => {
                      return (
                        <div
                          onMouseEnter={() => setIsHovered(cast.id)}
                          onMouseLeave={() => setIsHovered(null)}
                        >
                          <CastTiles
                            key={cast.id}
                            cast={cast}
                            index={index}
                            isHovered={isHovered === cast.id}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* =========================
      REVIEWS

      < xl:
      Goes UNDER Clips + Casts.

      >= xl:
      Goes to the RIGHT.
  ========================== */}

            {ReviewDetails.length > 0 && (
              <div
                id="reviews_stack"
                className="
        dg-3
        neutral-rounded-wrapper
        w-full
        min-w-0
        max-w-none

        xl:col-span-2
        xl:col-start-4
        xl:row-start-1
      "
              >
                <h1>Reviews</h1>

                <div
                  data-lenis-prevent
                  className="reviews-main-wrapper fade-mask-vertical flex flex-col gap-3 w-full h-full max-h-[35rem] overflow-y-scroll scrollbar-none"
                >
                  {ReviewDetails.map((review) => {
                    const { month, year } = formatReleaseDate(review);

                    return (
                      <ReviewTiles
                        key={review.id}
                        review={review}
                        month={month}
                        year={year}
                        ProfileIcon={ProfileIcon}
                        length={ReviewDetails.length}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div
            id="more_like_this"
            className="dg-5 neutral-rounded-wrapper xl:max-w-[80rem] max-w-[28rem] sm:max-w-[38rem] md:max-w-[50rem] lg:max-w-[60rem]"
          >
            <h1>Recommended</h1>
            {SimilarDetails && (
              <div
                data-lenis-prevent
                className={`flex flex-nowrap overflow-x-scroll scrollbar-none overflow-y-hidden fade-mask-horizontal space-x-5 w-full`}
              >
                {SimilarDetails.map((movie, index) => {
                  return (
                    <SimilarTiles key={movie.id} movie={movie} index={index} />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
