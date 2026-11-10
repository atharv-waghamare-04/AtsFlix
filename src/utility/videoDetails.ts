export const displayVideoDetails = (VidData) => {
  const clips = VidData?.map((item) => {
    if (item.type === "Clip") {
      return item;
    }
    return;
  });

  const trailers = VidData?.map((item) => {
    if (item.type === "Trailer") {
      return item;
    }
    return;
  });

  const data = [...trailers, ...clips].filter((item) => item !== undefined);

  return data.slice(0, 10);
};
