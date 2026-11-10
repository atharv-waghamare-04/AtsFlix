import ReadMore from "../utility/readMore";

export const ReviewTiles = ({ review, month, year, ProfileIcon, length }) => {
  return (
    <div
      key={review.id}
      className={`reviews-wrapper bg-neutral-800 p-5 pt-4 flex flex-col gap-2 rounded-2xl ${length < 3 ? "mt-0" : "first:mt-5"} w-full `}
    >
      <div className="flex justify-between items-center gap-3">
        <div className="reviews-name flex items-center justify-start gap-2 text-md text-neutral-300/90 uppercase tracking-wider font-bold">
          <ProfileIcon fontSize="small" />

          {review.author}
        </div>

        <div className="text-neutral-600 text-sm font-semibold shrink-0">
          {`${month} ${year}`}
        </div>
      </div>

      <ReadMore text={review.content} limit={50} increment={50} />
    </div>
  );
};

export default ReviewTiles;
