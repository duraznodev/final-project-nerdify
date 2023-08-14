export default function AboutItem({ icon, text }) {
  return (
    <div className="flex items-center gap-x-3">
      {icon}
      <div className="text-sm">{text}</div>
    </div>
  );
}
