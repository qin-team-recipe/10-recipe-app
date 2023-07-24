"use client";

import { useFormContext } from "react-hook-form";

type Props = {
  label: string;
  placeholder?: string;
  schema: "name" | "description";
};

export const SingleInput: React.FC<Props> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label className="mb-1 ml-4 font-bold text-black">{props.label}</label>
      <input
        className="w-full border-y border-lightGray py-3 pl-5 outline-none placeholder:text-lightGray"
        type="text"
        placeholder={props.placeholder}
        {...register(`${props.schema}`)}
      />
    </div>
  );
};
