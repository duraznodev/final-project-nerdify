export default function AboutBio({ children }) {
  return (
    <>
      <p className="px-5 py-4 font-secondary text-sm text-zinc-700">
        {children}
      </p>
      <div className="mx-4 min-h-[2px] flex-1 bg-gray-100"></div>
    </>
  );
}
