import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
  { type = "text", className = "", isFocused = false, ...props },
  ref,
) {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <input
      {...props}
      type={type}
      className={
        "rounded-2xl border-gray-100 bg-neutral-50  ps-4 shadow-sm placeholder:font-secondary placeholder:text-sm placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 " +
        className
      }
      ref={input}
    />
  );
});
