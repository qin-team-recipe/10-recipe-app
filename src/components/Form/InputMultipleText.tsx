import cc from "classcat";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";

import { InputAddButton } from "@/components/Button";

type InputTextProps = {
  label: string;
  labelAfterElement?: React.ReactNode;
  name: string;
  placeholder?: string;
  errorText?: string;
  register: UseFormRegister<any>;
  control: Control<any>;
  addText: string;
  isShowIncrementIndex?: boolean;
};

export const InputMultipleText: React.FC<InputTextProps> = (props) => {
  const { fields, append } = useFieldArray({
    control: props.control,
    name: props.name,
  });

  return (
    <div>
      <div className="flex">
        <label className="mb-1 block pl-4 font-bold">{props.label}</label>
        {props.labelAfterElement && props.labelAfterElement}
      </div>
      {fields?.map((field, i) => {
        const inputClass = cc([
          "w-full border-t border-lightGray bg-inputGray px-4 py-2 shadow-inner",
          {
            "border-b": i === fields.length - 1,
            "pl-10": props.isShowIncrementIndex,
          },
        ]);

        return (
          <div key={field.id} className="relative">
            {props.isShowIncrementIndex && (
              <span className="absolute left-4 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-tomato text-small text-white">
                {i + 1}
              </span>
            )}
            <input
              {...props.register(`${props.name}.${i}.value`)}
              className={inputClass}
              placeholder={props.placeholder}
            />
          </div>
        );
      })}
      {props.errorText && <p className="mt-1 pl-4 text-small text-red">{props.errorText}</p>}
      <InputAddButton text={props.addText} addClassNames="mt-2 ml-4" onClick={() => append({ value: "" })} />
    </div>
  );
};
