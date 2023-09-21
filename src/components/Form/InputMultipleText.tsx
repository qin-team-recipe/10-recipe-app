import cc from "classcat";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";

import { InputAddButton } from "@/components/Button";

type InputTextProps = {
  label: string;
  name: string;
  placeholder?: string;
  errorText?: string;
  register: UseFormRegister<any>;
  control: Control<any>;
};

export const InputMultipleText: React.FC<InputTextProps> = (props) => {
  const { fields, append } = useFieldArray({
    control: props.control,
    name: props.name,
  });

  return (
    <div>
      <label className="mb-1 block pl-4 font-bold">{props.label}</label>
      {fields.map((field, i) => {
        const inputClass = cc([
          "w-full border-t border-lightGray bg-inputGray px-4 py-2 shadow-inner",
          {
            "border-b": i === fields.length - 1,
          },
        ]);

        return (
          <input
            key={field.id}
            {...props.register(`${props.name}.${i}.value`)}
            className={inputClass}
            placeholder={props.placeholder}
          />
        );
      })}
      {props.errorText && <p className="mt-1 pl-4 text-small text-red">{props.errorText}</p>}
      <InputAddButton text="リンクを追加する" addClassNames="mt-2 ml-4" onClick={() => append({ value: "" })} />
    </div>
  );
};
