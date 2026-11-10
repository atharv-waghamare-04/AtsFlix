import { useMoviesPopular } from "../hooks/useMovies";
import { lazy, Suspense } from "react";
import SliderSkeleton from "../components/Skeleton";

const HeroSlider = lazy(() => import("../components/HeroSlider"));

const RankSlider = lazy(() => import("../components/RankSlider"));

const MOMSlider = lazy(() => import("../components/MOMSlider"));

const HomePage = () => {
  const { popularMovies, isPopularMoviesLoading } = useMoviesPopular({
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="background">
      <div className="main-wrapper space-y-10">
        <Suspense fallback={<SliderSkeleton width={120} hieght={35} />}>
          <HeroSlider movies={popularMovies} loading={isPopularMoviesLoading} />
        </Suspense>

        <Suspense fallback={<SliderSkeleton width={120} hieght={12} />}>
          <RankSlider movies={popularMovies} />
        </Suspense>

        <Suspense fallback={<SliderSkeleton width={120} hieght={12} />}>
          <MOMSlider />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
