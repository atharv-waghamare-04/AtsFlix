import type { SortType } from "../utility/movieFilters";

export interface FilterConfig {
  type: SortType;

  title: string;

  options: string[];
}

export const filterConfig: FilterConfig[] = [
  {
    type: "popularity",

    title: "Popularity",

    options: [
      "High to Low",
      "Low to High",
      "Above 500 Votes",
      "Above 1000 Votes",
      "Above 2000 Votes",
      "Above 5000 Votes",
      "Above 10000 Votes",
    ],
  },

  {
    type: "rating",

    title: "Rating",

    options: [
      "Descending",
      "Ascending",
      "Above 5 Stars",
      "Above 6 Stars",
      "Above 7 Stars",
      "Above 8 Stars",
      "Above 9 Stars",
    ],
  },

  {
    type: "release_date",

    title: "Release Date",

    options: ["Latest", "Oldest", "This Week", "This Month", "This Year"],
  },

  {
    type: "language",

    title: "Language",

    options: [
      "English",
      "Hindi",
      "Tamil",
      "Telugu",
      "Malayalam",
      "Kannada",
      "Bengali",
      "Marathi",
      "Gujarati",
      "Korean",
      "Japanese",
      "Chinese",
    ],
  },
];

export default filterConfig;
