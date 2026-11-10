import { useState } from "react";

interface ReadMoreProps {
  text?: string | undefined;
  limit?: number;
  increment?: number;
}

export const ReadMore = ({
  text,
  limit = 100,
  increment = 200,
}: ReadMoreProps) => {
  const [length, setLength] = useState(limit);

  const safeText = text ?? "";
  const words = safeText.split(" ");

  const visibleText = words.slice(0, length).join(" ");

  const hasMore = words.length > length;

  return (
    <div className="text-[0.8rem] text-neutral-400 tracking-wide">
      <p>
        {visibleText}
        {hasMore && "..."}
      </p>

      <div
        className="text-neutral-400 cursor-pointer mt-2 hover:underline"
        onClick={() => {
          if (hasMore) {
            setLength((prev) => Math.min(prev + increment, words.length));
          } else {
            setLength(limit);
          }
        }}
      >
        {hasMore
          ? "Read more"
          : safeText.length < limit
            ? ""
            : safeText.length > limit && !hasMore
              ? ""
              : "Show less"}
      </div>
    </div>
  );
};

export default ReadMore;
