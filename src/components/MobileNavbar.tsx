import { NavLink, useLocation } from "react-router-dom";
import { mobileNavLinks, mobileNavLinksMore } from "../config/mobileNavConfig";
import useMediaQueries from "../hooks/useMediaQueries";
import { PlusIcon } from "../icons/navbar";
import { useState } from "react";
import MobileNavModal from "../ui/MobileNavModal";

type NavbarActiveMenu =
  | "Home"
  | "Movies"
  | "TV Shows"
  | "Popular Movies"
  | "Popular TV Shows"
  | "Browse by Languages"
  | "More"
  | null;

export const MobileNavbar = () => {
  const [isMenuItemClicked, setIsMenuItemClicked] =
    useState<NavbarActiveMenu>(null);

  const location = useLocation();

  const currentPath = location.pathname;

  const { isMobileOrTablet, isMobile, isSmallMobile, isTablet } =
    useMediaQueries();

  if (!isMobileOrTablet) return null;

  return (
    <nav
      className={`mobile-navbar-main-wrapper flex items-center justify-center gap-4 text-[1.2rem]  fixed
    bottom-4
    left-1/2
    -translate-x-1/2
    z-50
    ${isSmallMobile ? "w-[95%]" : "w-[85%]"}
    
   `}
    >
      <div
        className={`mobile-navbar-wrapper flex items-center gap-2  bg-white/10
    backdrop-blur-xl
    border
    border-white/10
    rounded-2xl w-full  overflow-hidden p-[0.250rem] px-2 ${isSmallMobile ? "justify-center max-w-[18rem]" : "justify-between max-w-[20rem]"}`}
      >
        {mobileNavLinks.map((data) => {
          const Icon = data.icon;
          return (
            <NavLink
              to={data.path}
              key={data.name}
              onClick={() =>
                setIsMenuItemClicked(data.name as NavbarActiveMenu)
              }
            >
              <div
                className={`mobile-nav-item p-[0.550rem] rounded-xl ${currentPath === data.path ? "bg-red-700/30 text-red-400" : "text-neutral-300"}`}
              >
                <Icon
                  style={
                    isSmallMobile
                      ? {
                          fontSize: "1.8rem",
                        }
                      : isMobile
                        ? {
                            fontSize: "1.9rem",
                          }
                        : isTablet
                          ? {
                              fontSize: "2rem",
                            }
                          : {}
                  }
                />
              </div>
            </NavLink>
          );
        })}
      </div>
      <>
        <button
          onClick={() =>
            setIsMenuItemClicked((prev) => (prev === "More" ? null : "More"))
          }
          className={`
        flex items-center justify-center relative
      
      backdrop-blur-xl
      border
      border-white/10
      rounded-full
      w-full h-full
      max-w-[3.25rem]
      max-h-[3.25rem]
      p-2.5 py-3 transition-all ease-in-out duration-200
      ${isMenuItemClicked === "More" ? "bg-red-300/30 text-red-400 -rotate-225" : "text-neutral-300 bg-white/10 rotate-0"}`}
        >
          <PlusIcon
            style={
              isSmallMobile
                ? {
                    fontSize: "2rem",
                  }
                : isMobile
                  ? {
                      fontSize: "2rem",
                    }
                  : isTablet
                    ? {
                        fontSize: "2.1rem",
                      }
                    : {}
            }
          />
        </button>
        <div className="absolute bottom-[120%] right-[0%]">
          <MobileNavModal
            isOpen={isMenuItemClicked === "More"}
            isMobile={isMobile}
            isSmallMobile={isSmallMobile}
            isTablet={isTablet}
            config={mobileNavLinksMore}
          />
        </div>
      </>
    </nav>
  );
};

export default MobileNavbar;
