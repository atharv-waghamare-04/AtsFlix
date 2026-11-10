import { browseLinks } from "../config/navLinks";
import DropDownModals from "../ui/DropDownModals";
import { useState } from "react";
import { SearchIcon, NotificationIcon, ProfileIcon } from "../icons/navbar";
import { Link } from "react-router-dom";
import useMediaQueries from "../hooks/useMediaQueries";

type NavbarActiveMenu =
  | "Home"
  | "Movies"
  | "TV Shows"
  | "New & Popular"
  | "Browse by Languages"
  | null;

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<NavbarActiveMenu>(null);

  // Desktop navbar only
  const { isDesktop, isLargeDesktop } = useMediaQueries();
  // Completely remove navbar on phone/tablet
  if (!isDesktop) return null;

  return (
    <div className="nav-background">
      <div className="main-nav-wrapper">
        <nav
          className="navbar-wrapper"
          onMouseLeave={() => {
            setActiveMenu(null);
          }}
        >
          {/* Logo */}
          <Link to="/">
            <div className="logo">
              <img src="../public/AtsFlix.png" alt="Atsflix-logo" />
            </div>
          </Link>

          {/* Main navigation */}
          <div className="nav-items flex">
            <ul className="flex text-white gap-3 lg:gap-8 text-xs md:text-md lg:text-lg">
              {browseLinks.map((data) => (
                <div
                  className="relative overflow-visible"
                  key={data.name}
                  onMouseEnter={() => {
                    if (data.dropdown) {
                      setActiveMenu(data.name as NavbarActiveMenu);
                    } else {
                      setActiveMenu(null);
                    }
                  }}
                >
                  <Link to={data.path}>
                    <li className="md:font-medium">{data.name}</li>
                  </Link>

                  {data.dropdown && activeMenu === data.name && (
                    <div className="absolute top-[120%] -left-[30%] w-[12rem] z-50">
                      <DropDownModals
                        links={data.dropdownList}
                        isOpen={true}
                        isMobile={false}
                      />
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>

          {/* Right side icons */}
          <div className="nav-2 flex items-center justify-center gap-3 lg:gap-5 text-white">
            <div className="search">
              <SearchIcon
                fontSize={isLargeDesktop ? "medium" : "small"}
                className="cursor-pointer"
              />
            </div>

            <div className="notification">
              <NotificationIcon
                fontSize={isLargeDesktop ? "medium" : "small"}
                className="cursor-pointer"
              />
            </div>

            <div className="profile">
              <ProfileIcon
                fontSize={isLargeDesktop ? "medium" : "small"}
                className="cursor-pointer"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
