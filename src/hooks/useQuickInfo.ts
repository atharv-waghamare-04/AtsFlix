import {
  SeasonsIcon,
  EpisodesIcon,
  CalendarIcon,
  DoneIcon,
  ProgressIcon,
} from "../icons/detailsPage";

interface TVQuickInfoData {
  first_air_date?: string | null;
  last_air_date?: string | null;
  number_of_seasons?: number | null;
  number_of_episodes?: number | null;
  in_production?: boolean;
}

const getYear = (date?: string | null): string | null => {
  if (!date) return null;
  const year = new Date(date).getFullYear();
  return Number.isNaN(year) ? null : String(year);
};

export const getQuickInfo = (data?: TVQuickInfoData | null) => {
  const firstAirYear = getYear(data?.first_air_date);
  const lastAirYear = getYear(data?.last_air_date);
  const airedValue = firstAirYear
    ? `${firstAirYear} - ${lastAirYear ?? "Present"}`
    : "N/A";

  return [
    {
      name: "Seasons",
      value: data?.number_of_seasons ?? "N/A",
      icon: SeasonsIcon,
      htmlColor: "#E50914",
    },
    {
      name: "Episodes",
      value: data?.number_of_episodes ?? "N/A",
      icon: EpisodesIcon,
      htmlColor: "#fbbf24",
    },
    {
      name: "Aired",
      value: airedValue,
      icon: CalendarIcon,
      htmlColor: "#2b7fff",
    },
    {
      name: "Status",
      value: data?.in_production ? "In Production" : "Completed",
      icon: data?.in_production ? ProgressIcon : DoneIcon,
      htmlColor: data?.in_production ? "#fd5f09" : "#47ff27",
    },
  ];
};
