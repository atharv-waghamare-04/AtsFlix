import type { LucideIcon } from "lucide-react";

interface DiscoverCardProps {
  data: Array<string | null | undefined>;
  title: string;
  icon?: LucideIcon;
  localLang?: string;
}

const DiscoverCard = ({
  data,
  title,
  icon: Icon,
  localLang = "",
}: DiscoverCardProps) => {
  const slicedData = data.filter((item): item is string => Boolean(item)).slice(0, 6);

  const translateClasses = [
    "group-hover:translate-x-0",
    "group-hover:translate-x-10",
    "group-hover:translate-x-20",
    "group-hover:translate-x-30",
    "group-hover:translate-x-40",
    "group-hover:translate-x-50",
  ];

  return (
    <div
      className="
        discover-card-item-wrapper outline outline-gray-100/35
        shadow-[0_0_5px_#e50914] hover:shadow-[0_0_30px_#e50914]/80
        cursor-pointer flex flex-row items-center justify-start rounded-4xl
        overflow-hidden relative group w-full max-h-68
      "
    >
      {slicedData.map((imagePath, idx) => (
        <div
          className={`discover-card-item-image-wrapper first:ml-0 -ml-20 relative rounded-2xl overflow-hidden h-64 w-38 shrink-0 transition-transform duration-300 ease-out ${translateClasses[idx]}`}
          key={`${imagePath}-${idx}`}
        >
          <div className="absolute w-full h-full min-h-120 bg-linear-to-l from-black/80 to-transparent from-5% to-30%" />
          <img
            loading="lazy"
            decoding="async"
            className="h-full w-full min-h-58 md:min-h-64 min-w-38 object-cover"
            src={`https://image.tmdb.org/t/p/w342${imagePath}`}
            alt={`${title} poster ${idx + 1}`}
          />
        </div>
      ))}

      <div className="absolute w-full h-full bg-linear-to-l from-black/90 to-transparent from-30% to-75%" />
      <div className="absolute z-10 flex flex-col right-0 w-[45%] md:w-[60%] h-full items-center justify-center gap-1 pr-2 mr-5">
        {Icon && (
          <Icon
            className="text-[1.5rem] group-hover:text-[#E50914]"
            size={70}
            strokeWidth={3}
            absoluteStrokeWidth
          />
        )}
        {localLang && (
          <h2 className="text-[2.5rem] font-extrabold text-white uppercase text-center leading-none group-hover:text-[#E50914] transform transition-all duration-100 ease-in group-hover:text-[1.8rem]">
            {localLang}
          </h2>
        )}
        <h2 className="text-2xl font-extrabold text-white uppercase text-center leading-none group-hover:text-[#E50914] transform transition-all duration-100 ease-in group-hover:text-[1.8rem]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default DiscoverCard;
