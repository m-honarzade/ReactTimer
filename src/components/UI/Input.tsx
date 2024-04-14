import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <p className="flex flex-col items-center gap-1 text-white text-sm  w-[50%] mx-auto p-2 rounded-md">
        <label htmlFor={id} className="uppercase">
          {label}
        </label>
        <input
          name={id}
          id={id}
          {...props}
          ref={ref}
          className="w-full rounded-sm p-2 bg-yellow-100 text-black  focus:border-indigo-400"
        />
      </p>
    );
  }
);

export default Input;
