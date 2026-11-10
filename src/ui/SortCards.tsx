import type { ChangeEventHandler } from "react";
import useMediaQueries from "../hooks/useMediaQueries";
import type { FilterConfig } from "../config/filterConfig";

interface SortCardsProps {
  functionsCard: Pick<FilterConfig, "type" | "title">;
  options: string[];
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const SortCards = ({
  functionsCard,
  options,
  value,
  onChange,
}: SortCardsProps) => {
  const { isSmallMobile, isMobile } = useMediaQueries();

  return (
    <div
      className={`category-functions-item ${isSmallMobile || isMobile ? "text-[0.7rem]" : "text-[1rem]"}`}
    >
      <label className="sr-only" htmlFor={functionsCard.type}>
        Sort by {functionsCard.title}
      </label>
      <select
        name={functionsCard.type}
        id={functionsCard.type}
        value={value}
        onChange={onChange}
      >
        <option value="">Sort By: {functionsCard.title}</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortCards;
