import React from "react";

export type TimeProps = {
  hour: number;
  minute: number;
};

const Time = ({ hour, minute }: TimeProps) => {
  return (
    <div className="font-pricedown text-5xl text-white font-outline-2">
      {hour.toString().padStart(2, "0")}:{minute.toString().padStart(2, "0")}
    </div>
  );
};

export default Time;
