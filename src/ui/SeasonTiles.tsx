export const SeasonTiles = ({ season, index, isHovered }) => {
  return (
    <div
      className={`season-wrapper w-[8rem] h-[12rem] rounded-2xl overflow-hidden bg-neutral-900 relative ${
        isHovered ? "border border-[#E50914]" : "border-transparent border"
      } `}
    >
      <div className="absolute bottom-0 w-full h-full bg-linear-to-t from-neutral-900/90 to-transparent from-0% to-65% z-10"></div>
      <img
        loading={index < 3 ? "eager" : "lazy"}
        decoding="async"
        src={`https://image.tmdb.org/t/p/w342${season?.poster_path}`}
        alt={season?.name}
        className="w-full h-full object-cover rounded-2xl"
      />

      <h3 className="absolute bottom-3 left-0 text-[0.8rem] text-neutral-300 text-center font-extrabold leading-4 w-full z-20">
        {season?.name && season?.name.length > 20
          ? `${season?.name.slice(0, 20)}...`
          : season?.name}
      </h3>
    </div>
  );
};
