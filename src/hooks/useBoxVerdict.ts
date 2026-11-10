import { boxVerdict } from "../utility/verdictUtils";
import { BudgetMoneyIcon, RevenueMoneyIcon } from "../icons/detailsPage";

export const getBoxVerdict = (data) => {
  const verdictData = boxVerdict(data.budget, data.revenue);

  const vIcon = verdictData?.[0]?.icon;

  const vColor = verdictData?.[0]?.htmlColor;

  const vMessage = verdictData?.[0]?.message;

  const vDifference = verdictData?.[0]?.difference;

  const budget = data.budget.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const revenue = data.revenue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const dg1 = [
    {
      title: "Budget",
      value: budget,
      description: "The Budget Invested on this Project was ",
      icon: BudgetMoneyIcon,
      htmlColor: "#fbbf24",
    },
    {
      title: "Revenue",
      value: revenue,
      description: "The Revenue Gained on this Project was ",
      icon: RevenueMoneyIcon,
      htmlColor: "#2b7fff",
    },
    {
      title: "Box Office",
      value: vDifference,
      description: vMessage,
      icon: vIcon,
      htmlColor: vColor,
    },
  ];

  return dg1;
};

export default getBoxVerdict;
