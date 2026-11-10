type BoxOfficeTilesProps = {
  value?: string;
  KeyRightIcon?: React.ElementType;
  Icon?: React.ElementType;
  isMobile: boolean;
  isTablet: boolean;
  htmlColor: string | undefined;
  title?: string;
  description?: string;
  isHovered?: boolean;
  tvInfoHeading?: string;
  tvValue?: string;
};

const htmlToRGB = (htmlColor: string, opacity: number) => {
  const hex = htmlColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b}, ${opacity}%)`;
};

export const BoxOfficeTiles = ({
  value,
  KeyRightIcon,
  Icon,
  isMobile,
  isTablet,
  htmlColor,
  title,
  description,
  isHovered,
  tvInfoHeading,
  tvValue,
}: BoxOfficeTilesProps) => {
    return (
    <div
      className={`flex justify-start  md:items-center flex-col lg:flex-row  w-full overflow-hidden text-center
    lg:text-left transition-all duration-150 ease-in rounded-lg cursor-pointer p-1.5 sm:px-3 sm:py-2
    md:px-4 md:py-2
    lg:px-3 lg:py-2
    gap-4 md:gap-2`}
      style={
        isHovered
          ? {
              backgroundColor: htmlToRGB(htmlColor!, 20),
            }
          : {}
      }
    >
      {htmlColor && (
        <span
          className={`flex justify-center items-center rounded-full bg-[rgb(from_var(--color)_r_g_b_/_20%)] p-2.5  md:p-3.5`}
          style={
            {
              "--color": htmlColor,
            } as React.CSSProperties
          }
        >
          {Icon && (
            <Icon
              fontSize={isTablet ? "medium" : "large"}
              htmlColor={htmlColor}
            />
          )}
        </span>
      )}
      <div className="flex flex-col md:flex-col-reverse lg:flex-col gap-1 lg:gap-0 w-full ">
        {title && (
          <h2 className="text-sm md:text-lg xl:text-2xl font-extrabold uppercase">
            {title}
          </h2>
        )}
        {tvValue && (
          <h2 className="text-sm md:text-[1rem] lg:text-[1.2rem] xl:text-[1.6rem] font-extrabold uppercase">
            {tvValue}
          </h2>
        )}
        {tvInfoHeading && (
          <h3 className="text-[0.7rem] md:text-[0.8rem]  xl:text-[1rem] font-black uppercase">
            {tvInfoHeading}
          </h3>
        )}
        {description && value && (
          <p className="text-xs tracking-wider  text-neutral-400 md:text-sm">
            {description}
            <span className="font-semibold">{value}</span>
          </p>
        )}
      </div>
      {tvValue ? (
        ""
      ) : isTablet ? (
        ""
      ) : KeyRightIcon ? (
        <KeyRightIcon
          fontSize={isMobile ? "medium" : "large"}
          htmlColor="#e0e0e0"
        />
      ) : null}
    </div>
  );
};

export default BoxOfficeTiles;
