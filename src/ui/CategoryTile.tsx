import React from "react";
import { Link } from "react-router-dom";
import useMediaQueries from "../hooks/useMediaQueries";

interface CategoryTileProps {
  title: string;
  icon: React.ElementType | false;
  path?: string;
  number?: string | number;
}

const CategoryTile = ({
  title,
  icon: Icon,
  path = "",
  number,
}: CategoryTileProps) => {
  const { isSmallMobile, isMobile } = useMediaQueries();

  return (
    <Link
      to={path}
      className="
      flex
      items-center
      justify-center
      gap-3
      h-13
      min-w-fit
      w-full
      max-w-[8rem]
      px-6
      rounded-xl
      bg-[#131313]/60
      border
      hover:bg-neutral-900
      border-white/10
      
      hover:shadow-[0_0_50px_#E50914]/20
      hover:border-[#f45a62]/60
      hover:bg-black/80
      transition-all
      duration-150
      group 
      "
    >
      {Icon && (
        <div>
          <Icon
            style={
              isSmallMobile || isMobile
                ? { fontSize: "1.3rem" }
                : { fontSize: "1rem" }
            }
            className="group-hover:text-[#f45a62]"
          />
        </div>
      )}

      <div className="flex items-center gap-2">
        {number && (
          <span
            className="
            text-red-500
            font-bold
            "
          >
            {number}
          </span>
        )}

        <span
          className={`
          text-white
          font-semibold
          
          whitespace-nowrap group-hover:text-[#f45a62]
          ${isSmallMobile || isMobile ? "text-[0.8rem]" : "text-[1rem]"}
          `}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};

export default CategoryTile;
