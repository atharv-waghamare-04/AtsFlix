import { ArrowIcon } from "../icons/navDropDown";
import { Link } from "react-router-dom";
import type React from "react";

interface DropDownModalsProps {
  links: {
    title: string;
    link: string;
    icon: React.ElementType;
  }[];
  isOpen: boolean;
  isMobile?: boolean;
}

const DropDownModals = ({
  links = [],
  isOpen,
  isMobile,
}: DropDownModalsProps) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-main-wrapper">
      <div className="dropdown-wrapper">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link to={link.link} className="w-full" key={link.title}>
              <div className="dropdown-nav-item group">
                <div className="drop-n-i">
                  <div className="drop-icon">
                    <Icon />
                  </div>
                  <div className="drop-title">{link.title}</div>
                </div>
                {isMobile ? (
                  <ArrowIcon fontSize="small" className="ml-2 -rotate-90" />
                ) : (
                  <ArrowIcon fontSize="small" className="ml-2 -rotate-90" />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DropDownModals;
