interface DetailsPageSkeletonProps {
  kind?: "movie" | "tv";
}

const SkeletonBlock = ({
  className = "",
}: {
  className?: string;
}) => (
  <div
    aria-hidden="true"
    className={`animate-pulse rounded-lg bg-neutral-800/90 ${className}`}
  />
);

const DetailsPageSkeleton = ({
  kind = "movie",
}: DetailsPageSkeletonProps) => {
  const isTV = kind === "tv";

  return (
    <section
      className="background"
      aria-busy="true"
      aria-live="polite"
      aria-label={`Loading ${isTV ? "TV show" : "movie"} details`}
    >
      <div className="main-wrapper gap-5">
        <p className="sr-only">Loading title details. Please wait.</p>

        {/* Hero area */}
        <div className="relative w-[97%] min-h-[25rem] md:min-h-[34rem] overflow-hidden rounded-2xl bg-neutral-950">
          <SkeletonBlock className="absolute inset-0 h-full w-full rounded-none opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:p-8 md:max-w-3xl md:p-10">
            <SkeletonBlock className="h-8 w-3/4 sm:h-12 md:h-14" />
            <div className="flex flex-wrap gap-2">
              <SkeletonBlock className="h-5 w-16" />
              <SkeletonBlock className="h-5 w-20" />
              <SkeletonBlock className="h-5 w-24" />
              <SkeletonBlock className="h-5 w-16" />
            </div>
            <SkeletonBlock className="h-3 w-full max-w-2xl" />
            <SkeletonBlock className="h-3 w-11/12 max-w-xl" />
            <SkeletonBlock className="h-3 w-4/5 max-w-lg" />
            <div className="mt-2 flex gap-3">
              <SkeletonBlock className="h-11 w-32 rounded-full" />
              <SkeletonBlock className="h-11 w-28 rounded-full" />
            </div>
          </div>
        </div>

        {/* Movie financial summary / TV quick facts */}
        <div className="grid w-full grid-cols-2 gap-3 px-1 md:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={`summary-${index}`}
              className="flex min-h-24 flex-col justify-center gap-3 rounded-2xl bg-neutral-900/80 p-4"
            >
              <SkeletonBlock className="h-3 w-2/5" />
              <SkeletonBlock className="h-6 w-3/4" />
            </div>
          ))}
        </div>

        {/* Supporting information */}
        <div className="grid w-full grid-cols-1 gap-4 px-1 xl:grid-cols-5">
          <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-neutral-900/80 p-4 xl:col-span-3">
            <SkeletonBlock className="h-6 w-40" />
            <div className="flex gap-3 overflow-hidden">
              {Array.from({ length: 3 }, (_, index) => (
                <SkeletonBlock
                  key={`clip-${index}`}
                  className="h-28 min-w-48 flex-1 sm:h-36"
                />
              ))}
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-neutral-900/80 p-4 xl:col-span-2">
            <SkeletonBlock className="h-6 w-32" />
            <div className="flex gap-3 overflow-hidden">
              {Array.from({ length: 3 }, (_, index) => (
                <SkeletonBlock
                  key={`info-${index}`}
                  className="h-24 min-w-20 flex-1"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Cast */}
        <div className="w-full rounded-2xl bg-neutral-900/80 p-4">
          <SkeletonBlock className="mb-4 h-6 w-24" />
          <div className="flex gap-4 overflow-hidden">
            {Array.from({ length: 7 }, (_, index) => (
              <div
                key={`cast-${index}`}
                className="flex min-w-24 flex-col items-center gap-2"
              >
                <SkeletonBlock className="h-20 w-20 rounded-full" />
                <SkeletonBlock className="h-3 w-20" />
                <SkeletonBlock className="h-3 w-14" />
              </div>
            ))}
          </div>
        </div>

        {/* TV seasons or movie recommendations */}
        <div className="w-full rounded-2xl bg-neutral-900/80 p-4">
          <SkeletonBlock
            className={`mb-4 h-6 ${isTV ? "w-28" : "w-44"}`}
          />
          <div className="flex gap-3 overflow-hidden">
            {Array.from({ length: 6 }, (_, index) => (
              <SkeletonBlock
                key={`poster-${index}`}
                className="h-36 min-w-24 flex-1 sm:h-48 sm:min-w-32"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPageSkeleton;
