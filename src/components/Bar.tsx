import clsx from "clsx";

export type BarProps = {
  value: number;
  foregroundColor: string;
  backgroundColor: string;
};

const Bar = ({ value, foregroundColor, backgroundColor }: BarProps) => {
  const width = Math.min(Math.max(value, 0), 100);

  return (
    <div
      className={clsx(
        "w-full h-3.5 mb-4 border-black border-2",
        backgroundColor
      )}
    >
      <div
        className={clsx("h-2.5", foregroundColor)}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default Bar;
