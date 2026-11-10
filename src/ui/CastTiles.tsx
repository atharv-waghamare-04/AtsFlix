interface CastPerson {
  id?: number;
  name?: string;
  profile_path?: string | null;
  known_for_department?: string;
  character?: string;
}

interface CastTilesProps {
  cast?: CastPerson;
  index?: number;
  isHovered?: boolean;
}

export const CastTiles = ({
  cast,
  index = 0,
  isHovered = false,
}: CastTilesProps) => (
  <div
    className={`
      cast-wrapper p-2 pt-3 flex flex-col rounded-xl w-fit min-w-[10rem]
      max-h-[13rem] justify-start items-center gap-2 lg:first:ml-5
      ${isHovered ? "bg-[#E6E6E6]" : "bg-neutral-800"}
    `}
  >
    <div
      className={`cast-image-wrapper rounded-full overflow-hidden flex items-center justify-center w-[6rem] h-[6rem] bg-[#E6E6E6] p-[0.2rem] transition-all transform ${isHovered ? "scale-110" : "scale-100"}`}
    >
      <img
        loading={index === 0 ? "eager" : "lazy"}
        decoding="async"
        src={
          cast?.profile_path
            ? `https://image.tmdb.org/t/p/w342${cast.profile_path}`
            : "/No_image_found.png"
        }
        alt={cast?.name ? `Portrait of ${cast.name}` : "Cast member"}
        className="w-full h-full object-cover rounded-full"
      />
    </div>

    <div className="flex flex-col gap-1 text-xs text-center">
      <div className="cast-name text-neutral-500 font-bold">
        {cast?.name} {cast?.known_for_department === "Acting" && "As"}
      </div>
      <div className="cast-character text-neutral-400 font-extrabold">
        {cast?.character}
      </div>
    </div>
  </div>
);

export default CastTiles;
