import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#0062FF] pt-44">
      <div>
        <Link href="/">
          <ApplicationLogo className="text-white" />
        </Link>
      </div>

      <div className="mt-10 w-full max-w-[360px] overflow-hidden ">
        {children}
      </div>
    </div>
  );
}
