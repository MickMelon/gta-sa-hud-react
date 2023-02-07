import clsx from "clsx";
import React from "react";

export type MoneyProps = {
  amount: number;
};

const Money = ({ amount }: MoneyProps) => {
  return (
    <div
      className={clsx(
        "font-pricedown text-5xl font-outline-4",
        amount < 0 ? "text-hud-red" : "text-hud-green"
      )}
    >
      {amount < 0
        ? `-$${(amount * -1).toString().padStart(9, "0")}`
        : `$${amount.toString().padStart(9, "0")}`}
    </div>
  );
};

export default Money;
