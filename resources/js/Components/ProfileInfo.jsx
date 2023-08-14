import clsx from "clsx";

export default function ProfileInfo({ active, title, count }) {
  return (
    <div className="relative flex flex-col px-2.5 py-3">
      {active && (
        <div className="absolute bottom-0 left-0 h-1 w-full rounded-t-2xl bg-blue-600"></div>
      )}
      <span
        className={clsx("text-center text-sm font-medium ", {
          "text-blue-600": active,
          "text-[#92929D]": !active,
        })}
      >
        {title}
      </span>
      <span
        className={clsx("min-w-[52px] text-center font-semibold ", {
          "text-blue-600": active,
          "text-[#44444F]": !active,
        })}
      >
        {count}
      </span>
    </div>
  );
}
