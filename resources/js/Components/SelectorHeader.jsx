import clsx from "clsx";
import { RaSelect } from "./ui";

export default function SelectorHeader({ title, around, start, center }) {
  return (
    <div
      className={clsx("flex items-center gap-x-24", {
        "justify-center": center,
        "justify-around": around,
        "justify-start": start,
      })}
    >
      <h1 className="text-2xl font-semibold leading-normal">{title}</h1>
      <RaSelect placeholder="Newest" className="rounded-xl bg-white" />
    </div>
  );
}
