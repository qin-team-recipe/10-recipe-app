"use client";

import { useFieldArray, useFormContext } from "react-hook-form";

import { Icon } from "@/components/icon/Icon";
import { AddButton } from "@/app/recipe/new/_components/AddButton";

type Props = {
  label: string;
  buttonTitle: string;
  schema: "link" | "ingredients" | "instruction";
};

export const MultipleInput: React.FC<Props> = (props) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: props.schema,
    control,
  });

  return (
    <div>
      <div className="flex items-center gap-4">
        <label className="mb-1 ml-4 font-bold text-black" htmlFor={props.schema}>
          {props.label}
        </label>
        <div className="flex gap-1.5">
          <Icon type="Minus" size="small" color="tomato" backgrondColor="lightTomato" />
          <Icon type="Plus" size="small" color="tomato" backgrondColor="lightTomato" />
        </div>
      </div>
      {fields.map((field, index) => (
        <input
          key={field.id}
          type="text"
          className="w-full border-y border-lightGray py-3 pl-5 outline-none"
          {...register(`${props.schema}.${index}.title`, {
            required: true,
          })}
        />
      ))}
      <AddButton title={props.buttonTitle} onClick={() => append({ title: "" })} />
    </div>
  );
};
