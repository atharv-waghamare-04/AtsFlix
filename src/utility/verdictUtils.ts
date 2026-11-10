import { VerdictUpIcon, VerdictDownIcon } from "../icons/detailsPage";

export const boxVerdict = (budget: number, revenue: number) => {
  if (budget > revenue) {
    const difference = Math.abs(budget - revenue).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return [
      {
        message: `Failed. The Project made a loss of `,
        icon: VerdictDownIcon,
        htmlColor: "#ff0000",
        difference: difference,
      },
    ];
  } else if (budget < revenue) {
    const difference = Math.abs(budget - revenue).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return [
      {
        message: `Success. The Project made a profit of `,
        icon: VerdictUpIcon,
        htmlColor: "#00c950",
        difference: difference,
      },
    ];
  }

  return;
};
