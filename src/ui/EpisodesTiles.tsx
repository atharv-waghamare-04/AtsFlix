export const EpisodesTiles = ({
  still_path,
  name,
  episode_number,
  overview,
  runtime,
  ratings,
  dotIcon,
  starIcon,
  isMobile,
  isTablet,
}) => {
  const StarIcon = starIcon;
  const DotIcon = dotIcon;
  return (
    <div className="episodes-tiles-wrapper bg-neutral-800 p-2 w-full h-fit rounded-lg flex flex-col lg:flex-row gap-4 items-center pb-4">
      <div className="episodes-tiles-image w-full h-[12rem] lg:w-[16rem] lg:h-[10rem] rounded-lg overflow-hidden flex items-center justify-centeritems-center overflow-hidden relative">
        <p className="text-[1.8rem] font-extrabold text-neutral-300 lg:ml-4 absolute lg:hidden items-center justify-center bg-neutral-100/20 px-2 rounded-sm top-2 left-2 z-10">
          {episode_number}
        </p>
        <img
          src={`https://image.tmdb.org/t/p/w500${still_path}`}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full h-full bg-neutral-900/30"></div>
      </div>
      <p className="text-[1.8rem] font-extrabold text-neutral-600 lg:ml-4 hidden lg:flex items-center justify-center">
        {episode_number}
      </p>
      <div className="episodes-tiles-info  w-full h-fit lg:h-full  lg:w-[calc(100%-14rem)] px-4 flex items-start justify-start relative">
        <div className="episodes-heading-content-wrapper w-full h-full lg:max-w-[calc(100%-6rem)] flex flex-col gap-1 ">
          <h3 className="text-[1.4rem] font-bold">{name}</h3>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-center text-neutral-400">
              {runtime} min
            </span>
            <span className="text-sm font-bold text-neutral-400 text-center flex items-center justify-center gap-1">
              {ratings}{" "}
              <StarIcon fontSize="small" className="text-neutral-400" />
            </span>
          </div>
          <p className="text-neutral-400 text-[0.875rem] lg:text-[0.95rem] leading-5 lg:leading-6">
            {overview}
          </p>
        </div>
        {isMobile && isTablet ? null : (
          <DotIcon
            fontSize="medium"
            className="text-neutral-300 cursor-pointer hover:text-neutral-500 absolute top-2 right-2"
          />
        )}
      </div>
    </div>
  );
};

export default EpisodesTiles;
