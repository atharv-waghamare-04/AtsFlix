export const HeroPoster = ({
  data,

  isMobile,
}) => {
  return (
    <div className="hero-image-wrapper w-[96%] relative">
      <div className="absolute w-full h-full bg-black/40 bg-linear-to-t from-black/80 to-transparent from-5% to-40%"></div>

      <img
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
        src={
          isMobile
            ? `https://image.tmdb.org/t/p/w500${data?.poster_path}`
            : `https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`
        }
        alt={data?.title}
      />
    </div>
  );
};

export default HeroPoster;
