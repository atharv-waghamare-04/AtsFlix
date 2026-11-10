import { useMediaQuery } from "react-responsive";

export const useMediaQueries = () => {
  const isSmallMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  const isMobile = useMediaQuery({
    query: "(min-width: 476px) and (max-width: 639px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1012px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 1013px)",
  });

  const isLargeDesktop = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 1012px)",
  });

  return {
    isSmallMobile,
    isMobile,
    isTablet,
    isMobileOrTablet,
    isDesktop,
    isLargeDesktop,
  };
};

export default useMediaQueries;
