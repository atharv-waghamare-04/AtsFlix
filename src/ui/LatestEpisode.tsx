export const LatestEpisode = ({
  still_path,
  name,
  season_number,
  episode_number,
  air_year,
  air_month,
  air_day,
  type,
  vote_average,
  runtime,
  overview,
  starsIcon,
}) => {
  const Star = starsIcon;
  return (
    <div className="latest-episode-wrapper bg-neutral-800 p-2 rounded-lg flex flex-col md:flex-row">
      <div className="latest-episode-image w-full h-[15rem] md:w-[22rem] md:h-[10rem] rounded-lg overflow-hidden flex items-center justify-center overflow-hidden ">
        <img
          src={`https://image.tmdb.org/t/p/w500${still_path}`}
          alt={name}
          className="w-full h-full object-cover object-top md:object-cover "
        />
      </div>
      <div className="latest-episode-info px-2 md:ml-4 flex flex-col relative justify-start gap-0.5 mt-3 md:mt-0">
        <h3 className="text-[1.4rem] font-extrabold tracking-wide uppercase text-neutral-400 leading-5 mb-2">
          {name}
        </h3>
        <div className="flex gap-3 text-[0.8rem] text-neutral-500 font-semibold">
          <p>
            S{season_number} Ep{episode_number}
          </p>
          <p>
            {air_day} {air_month} {air_year}
          </p>

          <p>{runtime} mins</p>
        </div>
        <p className="text-neutral-400 text-[0.9rem] w-full md:w-8/12">
          {overview}
        </p>
        <div className="latest-episode-info md:flex-col-reverse lg:flex-row flex gap-4 md:gap-1 lg:gap-4 justify-between absolute right-2 md:right-5">
          <p
            className={` text-[0.8rem] font-extrabold flex items-center justify-center text-center uppercase tracking-wider p-[0.1rem]text-neutral-200 px-2 rounded-sm ${type === "finale" ? "bg-[#E50914]/50 " : "bg-neutral-700 "}`}
          >
            {type}
          </p>
          <p className="text-neutral-400 text-[1rem] font-extrabold flex items-center justify-center px-2 rounded-sm bg-neutral-600">
            <Star fontSize="small" />
            {vote_average}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestEpisode;
