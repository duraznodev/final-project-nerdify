import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    // password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset(
        "password",
        // "password_confirmation"
      );
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("register"));
  };

  return (
    <GuestLayout>
      <div className="rounded-t-[20px] bg-white px-5 pb-5 pt-[30px] shadow-md">
        <Head title="Register" />

        <h1 className="text-center text-lg font-semibold text-gray-900">
          Sign Up to your account
        </h1>

        <form onSubmit={submit} className="mt-8">
          <div>
            <TextInput
              autoComplete="username"
              className="block w-full"
              id="email"
              name="email"
              onChange={(e) => setData("email", e.target.value)}
              placeholder="Your email"
              required
              type="email"
              value={data.email}
            />

            <InputError message={errors.email} className="mt-2" />
          </div>

          <div className="mt-4">
            <TextInput
              id="name"
              name="name"
              placeholder="Your name"
              value={data.name}
              className="block w-full"
              autoComplete="name"
              isFocused={true}
              onChange={(e) => setData("name", e.target.value)}
              required
            />

            <InputError message={errors.name} className="mt-2" />
          </div>

          <div className="mt-4">
            <TextInput
              placeholder="Create Password"
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="block w-full"
              autoComplete="new-password"
              onChange={(e) => setData("password", e.target.value)}
              required
            />

            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="mt-11 text-center">
            <span className="text-xs font-normal leading-tight text-neutral-400">
              By signing up, you confirm that you’ve read
              <br />
              and accepted our{" "}
            </span>
            <span className="text-xs font-normal leading-tight text-blue-600">
              User Notice
            </span>
            <span className="text-xs font-normal leading-tight text-neutral-400">
              {" "}
              and{" "}
            </span>
            <span className="text-xs font-normal leading-tight text-blue-600">
              Privacy Policy.
            </span>
          </div>
          <button
            disabled={processing}
            className="mt-5 w-full rounded-[10px] bg-[#0062FF] py-3.5  text-xs font-semibold text-[#FAFAFB]"
          >
            Register
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
          {/*<div className="mt-4">*/}
          {/*  <InputLabel*/}
          {/*    htmlFor="password_confirmation"*/}
          {/*    value="Confirm Password"*/}
          {/*  />*/}

          {/*  <TextInput*/}
          {/*    id="password_confirmation"*/}
          {/*    type="password"*/}
          {/*    name="password_confirmation"*/}
          {/*    value={data.password_confirmation}*/}
          {/*    className="mt-1 block w-full"*/}
          {/*    autoComplete="new-password"*/}
          {/*    onChange={(e) => setData("password_confirmation", e.target.value)}*/}
          {/*    required*/}
          {/*  />*/}

          {/*  <InputError message={errors.password_confirmation} className="mt-2" />*/}
          {/*</div>*/}

          {/* <div className="mt-4 flex items-center justify-end"></div> */}
        </form>
      </div>
      <div className="flex justify-center rounded-b-[20px] bg-[#FAFAFB] py-4">
        <Link
          href={route("login")}
          className="font-secondary text-xs font-medium text-[#0062FF]"
        >
          Already have an Square account? Log in
        </Link>
      </div>
    </GuestLayout>
  );
}
