import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button" | "submit";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
const Button = (props: ButtonProps | AnchorProps) => {
  if (props.el === "button" || props.el === "submit")
    return (
      <div className="">
        <button
          {...props}
          className="bg-[#338196] capitalize cursor-pointer text-white text-sm rounded-md py-2 px-4 border border-[#338196] hover:border-[#217086]"
        ></button>
      </div>
    );
  return (
    <a
      {...props}
      className=" text-white text-sm rounded-md py-2 px-4 border  hover:underline hover:underline-offset-4  "
    >
      Link
    </a>
  );
};

export default Button;
