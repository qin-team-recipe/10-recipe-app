"use client";

import { useFieldArray, useFormContext } from "react-hook-form";

import { Icon } from "@/components/icon/Icon";
import { AddButton } from "@/app/recipe/new/_components/AddButton";
import { InputMenu } from "@/app/recipe/new/_components/InputMenu";

type Props = {
  label: string;
  buttonTitle: string;
  schema: "link" | "ingredients" | "instruction";
};

export const MultipleInput: React.FC<Props> = (props) => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: props.schema,
    control,
  });

  const watchInput = watch(props.schema);

  return (
    <div>
      <div className="flex items-center gap-4 border-b border-lightGray">
        <label className="mb-1 ml-4 font-bold text-black">{props.label}</label>
        <div className="flex gap-1.5">
          <Icon type="Minus" size="small" color="tomato" backgrondColor="lightTomato" />
          <Icon type="Plus" size="small" color="tomato" backgrondColor="lightTomato" />
        </div>
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-4 border-b border-lightGray bg-white px-4 py-2">
          <input
            type="text"
            {...register(`${props.schema}.${index}.title`, {
              required: true,
            })}
            className="w-full border-none outline-none"
          />
          {watchInput[index].title && <InputMenu remove={remove} index={index} />}
        </div>
      ))}

      <AddButton title={props.buttonTitle} onClick={() => append({ title: "" })} />
    </div>
  );
};
