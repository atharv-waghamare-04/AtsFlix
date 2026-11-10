import { NavLink, useLocation } from "react-router-dom";

const MobileNavModal = ({
  config,
  isOpen,
  isSmallMobile,
  isMobile,
  isTablet,
}) => {
  const location = useLocation();

  const currentPath = location.pathname;

  if (!isOpen) return null;

  return (
    <div
      className={`bg-white/10
        backdrop-blur-xl
        border flex flex-col gap-1 items-start justify-start
        border-white/10
        rounded-2xl max-w-[30rem] overflow-hidden p-[0.550rem]  ${isOpen ? "w-full h-fit transform transition-all duration-900 ease-in-out" : "w-full h-0 transform transition-all duration-900 ease-in-out"}`}
    >
      {config.map((data, idx) => {
        const Icon = data.icon;
        return (
          <NavLink to={data.path} className={"w-full"}>
            <div
              key={idx}
              className={`rounded-xl flex w-full items-center justify-start p-3 gap-3 ${currentPath === data.path ? "bg-red-700/30 text-red-400" : "text-neutral-300"} 
            `}
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
              <span className="font-extrabold ">{data.name}</span>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default MobileNavModal;
