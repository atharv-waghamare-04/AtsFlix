import { useParams } from "react-router-dom";
import {
  useDetailsQuery,
  useTVDetailsCastReviewsSimilarQuery,
  useTVDetailsTrailersEpisodesQuery,
} from "../hooks/useDetailsQuery";
import { HeroPoster } from "../ui/HeroPoster";
import { useMediaQueries } from "../hooks/useMediaQueries";
import { HeroContent } from "../ui/HeroContent";
import {
  ArrowRightPlayIcon,
  InfoIcon,
  StarIcon,
  KeyRightIcon,
  ProfileIcon,
  DotVertIcon,
  DropDownIcon,
} from "../icons/detailsPage";
import LiteYoutubeEmbed from "react-lite-youtube-embed";

import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { formatReleaseDate } from "../utility/dateUtils";

import { BoxOfficeTiles } from "../ui/BoxOfficeTiles";
import { imageUtilsTVDetails } from "../utility/imageUtils";

import { useState, useEffect } from "react";
import { CastTiles } from "../ui/CastTiles";
import { SimilarTiles } from "../ui/SimilarTiles";
import { getQuickInfo } from "../hooks/useQuickInfo";

import { LatestEpisode } from "../ui/LatestEpisode";
import { ReviewTiles } from "../ui/ReviewTiles";
import { SeasonTiles } from "../ui/SeasonTiles";
import EpisodesTiles from "../ui/EpisodesTiles";
import DetailsPageSkeleton from "../ui/DetailsPageSkeleton";

export const TVDetailsPage = () => {
  const { type, id } = useParams();
  
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const [isSeasonChanged, setIsSeasonChanged] = useState<number | null>(null);

  const [visibleEpisodesCount, setVisibleEpisodesCount] = useState<number>(5);

  const showMoreEpisodes = () => {
    setVisibleEpisodesCount((prev) =>
      Math.min(prev + 5, EpisodesDetails?.length),
    );
  };

  const showLessEpisodes = () => {
    setVisibleEpisodesCount(5);
  };

  const idNumber = Number(id);

  const query = useDetailsQuery("tv", idNumber);

  const { data, isLoading, isError } = query;

  useEffect(() => {
    if (data?.seasons?.length && isSeasonChanged === null) {
      setIsSeasonChanged(data?.seasons[0]?.season_number);
    }
  }, [isSeasonChanged, data]);

  const handleSeasonChange = (seasonNumber: number) => {
    setIsSeasonChanged(seasonNumber);
    setVisibleEpisodesCount(5);
  };

  const { ReviewDetails, CastDetails, SimilarDetails } =
    useTVDetailsCastReviewsSimilarQuery(idNumber);

  const { TrailersDetails, EpisodesDetails } =
    useTVDetailsTrailersEpisodesQuery(idNumber, isSeasonChanged);

  
  const visibleEpisodes = EpisodesDetails?.slice(0, visibleEpisodesCount);

    
  const { isMobile, isTablet } = useMediaQueries();

  const tvDetailsConfig = {
    tv: {},
  };

  if (!type || !id)
    return <div className="global-loading">Invalid Category</div>;

  if (!((type as keyof typeof tvDetailsConfig) in tvDetailsConfig))
    return <div className="global-loading">Category Not Found</div>;

  if (!id) return <div className="global-loading">Invalid Request</div>;

  if (isLoading) return <DetailsPageSkeleton kind="tv" />;

  if (isError) {
    return (
      <div className="background">
        <div className="global-loading flex-col gap-3 px-6 text-center">
          <span>Unable to load TV show details.</span>
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
        <div className="global-loading">TV show details not found.</div>
      </div>
    );
  }

  
  const quickInfoConfig = getQuickInfo(data);

  const { year: releaseYear } = formatReleaseDate(data);

  const spokenLang =
    data?.spoken_languages.map((lan) => {
      return lan.name;
    }) ?? data?.spoken_languages[0];

  const genres = data?.genres.map((gen) => gen.name);

  const seasonsEpisodes = (data) => {
    const seasons = data?.number_of_seasons;
    const episodes = data?.number_of_episodes;
    return `${seasons}S ${episodes}Ep`;
  };

  const networkProductions = imageUtilsTVDetails({
    networks: data?.networks,
    production_companies: data?.production_companies,
  });

  
  const {
    onlyDate: latestDate,
    month: latestMonth,
    year: latestYear,
  } = formatReleaseDate(data);

  
  return (
    <section className="background ">
      <div className="main-wrapper gap-3">
        {/* ---------------- */}
        {/* Hero Section */}
        {/* ---------------- */}

        <div
          id="details-hero-wrapper"
          className="hero-main-wrapper group w-[97%]"
        >
          <HeroPoster data={data} isMobile={isMobile} />
          <div className="hero-content-main-wrapper bottom-18 md:bottom-30">
            <HeroContent
              StarIcon={StarIcon}
              ArrowRightPlayIcon={ArrowRightPlayIcon}
              InfoIcon={InfoIcon}
              seasonsEpisodes={seasonsEpisodes(data)}
              year={releaseYear}
              spoken_languages={spokenLang}
              vote_average={data?.vote_average}
              overview={data?.overview}
              homepage={data?.homepage}
              title={data?.name}
              tagline={data?.tagline}
              isMobile={isMobile}
              genres={genres}
              playLink={data?.homepage}
              infoLink={data?.homepage}
            />
          </div>
        </div>

        {/* ---------------------------- */}
        {/* QuickInfo Wrapper */}
        {/* ---------------------------- */}
        <div className="quick-info-wrapper">
          {quickInfoConfig.map((data, index) => {
            return (
              <div
                key={index}
                className="quick-info-item"
                onMouseEnter={() => setIsHovered(data?.name)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <BoxOfficeTiles
                  isMobile={isMobile}
                  tvValue={String(data?.value ?? "")}
                  htmlColor={data?.htmlColor}
                  Icon={data?.icon}
                  KeyRightIcon={KeyRightIcon}
                  isTablet={isTablet}
                  isHovered={isHovered === data?.name}
                  tvInfoHeading={data?.name}
                />
              </div>
            );
          })}
        </div>

        {/* ---------------------------- */}
        {/* Details Grid Wrapper */}
        {/* ---------------------------- */}

        <div className="details-grid-wrapper ">
          {/* ---------------------------- */}
          {/* Created By & Latest Episode Grid Wrapper */}

          <div className="created-by-latest-episode grid grid-cols-12 grid-rows-1 gap-4">
            <div className="created-by-main-wrapper w-full h-full col-span-12 md:col-span-4 min-h-10 neutral-rounded-wrapper ">
              <h2>Created By</h2>
              {/* Created By UI  component */}
              <div
                data-lenis-prevent
                className={`created-by-wrapper  h-full items-start mt-2 mb-2 justify-start flex ${data?.created_by.length > 3 ? "overflow-x-scroll fade-mask-horizontal" : ""}`}
              >
                {data?.created_by.length > 0 &&
                  data?.created_by.map((creator, index) => {
                    return (
                      <div
                        key={index}
                        className={`created-by-item ${data?.created_by.length > 3 ? "" : "first:ml-0 lg:first:-ml-5"}`}
                        onMouseEnter={() => setIsHovered(creator?.name)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        <CastTiles
                          key={index}
                          cast={creator}
                          isHovered={isHovered === creator?.name}
                          index={index}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="tv-latest-episode-main-wrapper w-full col-span-12 md:col-span-8 neutral-rounded-wrapper mb-2">
              <h2>Latest Episode</h2>
              {/* Latest Episode UI TO-DO component */}
              <LatestEpisode
                still_path={data?.last_episode_to_air?.still_path}
                name={data?.last_episode_to_air?.name}
                season_number={data?.last_episode_to_air?.season_number}
                episode_number={data?.last_episode_to_air?.episode_number}
                air_year={latestYear}
                air_month={latestMonth}
                air_day={latestDate}
                type={data?.last_episode_to_air?.episode_type}
                vote_average={data?.last_episode_to_air?.vote_average.toFixed(
                  1,
                )}
                runtime={data?.last_episode_to_air?.runtime}
                overview={data?.last_episode_to_air?.overview}
                starsIcon={StarIcon}
              />
            </div>
          </div>

          {/* ---------------------------- */}
          {/* Cast & Network Grid Wrapper */}

          <div className="cast-created-by grid grid-cols-12 grid-rows-1 gap-4">
            <div className="cast-main-wrapper w-full h-full col-span-12 md:col-span-8 min-h-10 neutral-rounded-wrapper">
              <h2>Cast</h2>
              {/* Cast UI TO-DO component */}
              <div
                data-lenis-prevent
                className={`cast-scroll-wrapper flex gap-2 items-center h-full ${CastDetails?.length > 3 ? "fade-mask-horizontal overflow-x-scroll-wrapper" : ""} `}
              >
                {CastDetails.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={`cast-item mb-2 ${CastDetails.length > 3 ? "" : "first:ml-0 lg:first:-ml-5"}`}
                      onMouseEnter={() => setIsHovered(data?.name)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <CastTiles
                        key={index}
                        cast={data}
                        isHovered={isHovered === data?.name}
                        index={index}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="created-by-main-wrapper w-full h-full col-span-12 md:col-span-4 min-h-10 neutral-rounded-wrapper">
              <h2>Network & Productions</h2>
              {/* Created By UI TO-DO component */}
              <div
                data-lenis-prevent
                className={`tv-network-wrapper  flex md:flex-col lg:flex-row gap-2 pb-2 items-center justify-start h-full w-full ${networkProductions.length < 3 ? "" : "fade-mask-horizontal overflow-x-scroll-wrapper"}`}
              >
                {networkProductions.map((data, index) => {
                  if (!data?.logo) return null;
                  return (
                    <div
                      key={index}
                      className="tv-network-item w-[9rem] h-[7rem] first:ml-3 last:mr-3 bg-neutral-700 py-4 px-2 rounded-lg shrink-0 flex items-center justify-center"
                    >
                      <img
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        src={`https://image.tmdb.org/t/p/w342${data?.logo}`}
                        alt={data?.name}
                        className="w-[90%] h-full object-contain object-center"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* ------------------------ */}
          {/* Seasons List & Videos Wrapper */}
          <div className="seasons-videos-wrapper grid grid-cols-12 grid-rows-1 gap-4">
            <div className="seasons-list-main-wrapper w-full h-full  col-span-12 order-2 lg:order-1 lg:col-span-7 md:col-start-1 min-h-10 neutral-rounded-wrapper">
              <h2>Seasons</h2>
              <div
                data-lenis-prevent
                className="seasons-list-wrapper w-full h-full overflow-visible fade-mask-horizontal flex py-2 overflow-x-scroll-wrapper gap-3 mb-2"
              >
                {data?.seasons.length > 0 &&
                  data?.seasons?.map((season, idx) => {
                    return (
                      <div
                        className={`seasons-item overflow-visible rounded-2xl cursor-pointer shadow-[0_0_10px_#E50914]/0  first:ml-5 last:mr-5 ${isHovered === season.name ? " shadow-[0_0_10px_#E50914]/100 transition-all" : ""} ${isSeasonChanged === season?.season_number ? "border border-[#E50914] inset-0 shadow-[0_0_10px_#E50914]/70" : "border-transparent border"}`}
                        onMouseEnter={() => setIsHovered(season?.name)}
                        onMouseLeave={() => setIsHovered(null)}
                        onClick={() =>
                          handleSeasonChange(season?.season_number)
                        }
                      >
                        <SeasonTiles
                          season={season}
                          index={idx}
                          isHovered={isHovered === season?.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="videos-main-wrapper w-full h-full order-1 lg:order-2  col-span-12 lg:col-span-5 min-h-10 neutral-rounded-wrapper">
              <h2>Trailers & More...</h2>
              <div
                data-lenis-prevent
                className="videos-wrapper w-full min-h-[5rem] h-full fade-mask-horizontal flex gap-5 items-center justify-start overflow-x-scroll-wrapper"
              >
                {TrailersDetails.length > 0 ? (
                  TrailersDetails?.map((data, index) => {
                    return (
                      <div
                        className="w-full h-full max-h-[12rem]   min-w-[20rem] min-h-[5rem] rounded-xl overflow-hidden first:ml-3 last:mr-3 "
                        key={index}
                      >
                        <LiteYoutubeEmbed
                          id={data?.id}
                          title={data?.name}
                          style={{
                            height: "100%",
                            width: "100%",
                          }}
                          cookie={true}
                          poster="maxresdefault"
                          webp={true}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="w-full h-full flex items-center justify-center  text-neutral-500 text-[1.8rem] font-extrabold tracking-wide">
                    No Trailers Available
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ------------------------ */}
          {/* Episodes & Reviews Wrapper */}

          <div className="episodes-reviews-wrapper grid grid-cols-12 grid-rows-1 gap-4">
            <div className="episodes-main-wrapper w-full h-full col-span-12 md:col-span-8 min-h-10 neutral-rounded-wrapper">
              <h2
                className="mt-2 mb-3"
                style={
                  isTablet
                    ? {}
                    : {
                        fontSize: "2rem",
                      }
                }
              >
                Episodes
              </h2>
              <div
                data-lenis-prevent
                className={`episodes-wrapper w-full h-full flex flex-col  gap-4 pb-5`}
              >
                {visibleEpisodes?.map((data, index) => {
                  return (
                    <EpisodesTiles
                      key={index}
                      still_path={data?.still_path}
                      name={data?.name}
                      episode_number={data?.episode_number}
                      overview={data?.overview}
                      runtime={data?.runtime}
                      ratings={data?.vote_average?.toFixed(1)}
                      starIcon={StarIcon}
                      dotIcon={DotVertIcon}
                      isMobile={isMobile}
                      isTablet={isTablet}
                    />
                  );
                })}
                {EpisodesDetails?.length > 5 && (
                  <div className="episodes-show-more-wrapper w-full h-full flex items-center justify-center gap-4">
                    {visibleEpisodesCount < EpisodesDetails?.length ? (
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full max-w-[10rem]"
                        onClick={showMoreEpisodes}
                      >
                        Show More
                        <DropDownIcon className="text-white" />
                      </button>
                    ) : (
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full max-w-[10rem]"
                        onClick={showLessEpisodes}
                      >
                        Show Less
                        <DropDownIcon className="text-white rotate-180" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="reviews-main-wrapper w-full h-full max-h-[70rem] col-span-12 md:col-span-4 min-h-10 neutral-rounded-wrapper ">
              <h2
                className="mt-2 mb-3"
                style={
                  isTablet
                    ? {}
                    : {
                        fontSize: "2rem",
                      }
                }
              >
                Reviews
              </h2>
              <div
                data-lenis-prevent
                className={`reviews-wrapper w-full mb-2 h-full flex flex-col max-h-[65rem] gap-3 ${ReviewDetails.length < 3 ? "" : "fade-mask-vertical overflow-y-scroll-wrapper"}`}
              >
                {ReviewDetails.map((review) => {
                  const { month, year } = formatReleaseDate(review);

                  return (
                    <div className="last:mb-5" key={review.id}>
                      <ReviewTiles
                        review={review}
                        month={month}
                        year={year}
                        ProfileIcon={ProfileIcon}
                        length={ReviewDetails.length}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* ------------------------ */}
          {/* Similar Wrapper */}

          <div className="recommended-main-wrapper w-full h-full col-span-12 md:col-span-6 min-h-10 neutral-rounded-wrapper">
            <h2>Recommended</h2>
            <div
              data-lenis-prevent
              className={`recommended-wrapper w-full h-full flex flex-row gap-2  ${SimilarDetails.length < 3 ? "" : "fade-mask-horizontal overflow-x-scroll-wrapper"}`}
            >
              {SimilarDetails &&
                SimilarDetails.map((data, index) => {
                  return (
                    <SimilarTiles key={index} movie={data} index={index} />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVDetailsPage;
