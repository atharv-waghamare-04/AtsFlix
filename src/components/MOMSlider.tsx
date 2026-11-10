import { lazy } from "react";
import LazySliderSection from "./LazySliderSection";
import SliderSkeleton from "./Skeleton";

const TopRatedMovies = lazy(
  () => import("../components/MOMSections/TopRatedMovies"),
);

const TopRatedTVSection = lazy(
  () => import("../components/MOMSections/TopRatedTV"),
);

const TrendingMoviesSection = lazy(
  () => import("../components/MOMSections/TrendingMovies"),
);

const TrendingTVSection = lazy(
  () => import("../components/MOMSections/TrendingTV"),
);

const PopularTVSection = lazy(
  () => import("../components/MOMSections/PopularTV"),
);

const AiringTodayTVSection = lazy(
  () => import("../components/MOMSections/AiringToday"),
);

const UpcomingMoviesSection = lazy(
  () => import("../components/MOMSections/UpcomingMovies"),
);

const MOMSlider = () => {
  return (
    <section id="slider-collections" className="flex flex-col gap-0">
      <LazySliderSection fallback={<SliderSkeleton width={120} hieght={32} />}>
        <TopRatedMovies />
      </LazySliderSection>

      <LazySliderSection fallback={<SliderSkeleton width={120} hieght={32} />}>
        <TopRatedTVSection />
      </LazySliderSection>

      <LazySliderSection fallback={<SliderSkeleton width={120} hieght={32} />}>
        <TrendingMoviesSection />
      </LazySliderSection>

      <LazySliderSection fallback={<SliderSkeleton width={120} hieght={32} />}>
        <TrendingTVSection />
      </LazySliderSection>

      <LazySliderSection fallback={<SliderSkeleton width={120} hieght={32} />}>
        <PopularTVSection />
      </LazySliderSection>

      <LazySliderSection fallback={<SliderSkeleton width={120} hieght={32} />}>
        <UpcomingMoviesSection />
      </LazySliderSection>

      <LazySliderSection fallback={<SliderSkeleton width={120} hieght={32} />}>
        <AiringTodayTVSection />
      </LazySliderSection>
    </section>
  );
};

export default MOMSlider;
