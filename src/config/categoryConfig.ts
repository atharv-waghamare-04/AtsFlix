export const categoryConfig = {
  movies: {
    popular: {
      title: "Popular Movies",
      description:
        "Explore popular movies and discover titles that audiences are watching.",
    },
    trending: {
      title: "Trending Movies",
      description:
        "Explore movies currently attracting attention from audiences.",
    },
    "top-rated": {
      title: "Top Rated Movies",
      description:
        "Discover highly rated movies across a range of genres.",
    },
    upcoming: {
      title: "Upcoming Movies",
      description:
        "Explore movies scheduled for release in the coming months.",
    },
  },
  tv: {
    popular: {
      title: "Popular TV Shows",
      description:
        "Explore popular television shows and discover what audiences are watching.",
    },
    trending: {
      title: "Trending TV Shows",
      description:
        "Explore television shows currently attracting audience attention.",
    },
    "top-rated": {
      title: "Top Rated TV Shows",
      description:
        "Discover highly rated television shows across a range of genres.",
    },
    "airing-today": {
      title: "Airing Today TV Shows",
      description:
        "Explore television shows with episodes airing today.",
    },
  },
} as const;
