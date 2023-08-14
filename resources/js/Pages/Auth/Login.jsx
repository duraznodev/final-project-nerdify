import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <>
      <GuestLayout>
        <div className="rounded-[20px] bg-white px-5 pb-5 pt-[30px] shadow-md">
          <Head title="Log in" />

          {status && (
            <div className="mb-4 text-sm font-medium text-green-600">
              {status}
            </div>
          )}

          <h1 className="text-center text-lg font-semibold text-gray-900">
            Login to your acount
          </h1>

          <form onSubmit={submit}>
            <div className="mt-5">
              <TextInput
                placeholder="Your email"
                id="email"
                type="email"
                name="email"
                value={data.email}
                className=" block w-full"
                autoComplete="username"
                isFocused={true}
                onChange={(e) => setData("email", e.target.value)}
              />

              <InputError message={errors.email} className="mt-2" />
            </div>
            <div className="mt-4">
              <TextInput
                placeholder="Your password"
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                autoComplete="current-password"
                onChange={(e) => setData("password", e.target.value)}
              />

              <InputError message={errors.password} className="mt-2" />
            </div>
            {/* <div className="mt-4 block">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData("remember", e.target.checked)}
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div> */}
            <button
              disabled={processing}
              className="mt-4 w-full rounded-[10px] bg-[#0062FF] py-3.5  text-xs font-semibold text-[#FAFAFB]"
            >
              Continue
            </button>

            <div className="mt-4 text-center text-xs font-normal text-neutral-400">
              OR
            </div>

            <button className="mt-2.5 flex w-full items-center justify-center gap-x-3 rounded-[10px] border border-[#F1F1F5] py-2.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_794_35"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67273 11.2 4.32727L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_794_35)">
                  <path
                    d="M-0.744141 12.7275V3.27295L5.58144 8.00022L-0.744141 12.7275Z"
                    fill="#FBBC05"
                  />
                </g>
                <mask
                  id="mask1_794_35"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67273 11.2 4.32727L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_794_35)">
                  <path
                    d="M-0.744141 3.27295L5.58144 8.00022L8.18609 5.78204L17.1163 4.36386V-0.727051H-0.744141V3.27295Z"
                    fill="#EA4335"
                  />
                </g>
                <mask
                  id="mask2_794_35"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67273 11.2 4.32727L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask2_794_35)">
                  <path
                    d="M-0.744141 12.7275L10.4186 4.36386L13.3582 4.72749L17.1163 -0.727051V16.7275H-0.744141V12.7275Z"
                    fill="#34A853"
                  />
                </g>
                <mask
                  id="mask3_794_35"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67273 11.2 4.32727L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask3_794_35)">
                  <path
                    d="M17.1165 16.7275L5.58163 8.00022L4.09326 6.90931L17.1165 3.27295V16.7275Z"
                    fill="#4285F4"
                  />
                </g>
              </svg>
              <div className="text-center text-xs font-semibold text-zinc-500">
                Continue with Google
              </div>
            </button>

            <div className="mt-20 flex items-center justify-center gap-x-1 font-secondary">
              <a href="#" className="text-xs text-blue-600">
                Can't login?
              </a>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"
                  fill="#0062FF"
                />
              </svg>
              <a href="#" className="text-xs text-blue-600">
                Sign up for new user?
              </a>
            </div>

            {/* <div className="mt-4 flex items-center justify-end">
          {canResetPassword && (
            <Link
              href={route("password.request")}
              className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Forgot your password?
            </Link>
          )}
          <div>
            Not a member?
            <PrimaryButton type="button">
              <Link href={route("register")}>Register</Link>
            </PrimaryButton>
          </div>
        </div> */}
          </form>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-1 font-secondary text-white">
          <a href="#" className="text-xs ">
            Privacy policy
          </a>
          <svg
            width="3"
            height="3"
            viewBox="0 0 3 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"
              fill="currentColor"
            />
          </svg>
          <a href="#" className="text-xs ">
            Terms of use
          </a>
        </div>
      </GuestLayout>
    </>
  );
}
