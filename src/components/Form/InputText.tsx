import { UseFormRegisterReturn } from "react-hook-form";

type InputTextProps = {
  label: string;
  placeholder?: string;
  addClassNames?: string;
  errorText?: string;
  isTextArea?: boolean;
  register: UseFormRegisterReturn;
};

export const InputText: React.FC<InputTextProps> = (props) => {
  const Tag = props.isTextArea ? "textarea" : "input";
  return (
    <div className={props.addClassNames}>
      <label className="mb-1 block pl-4 font-bold">{props.label}</label>
      <Tag
        {...props.register}
        className="w-full border-y border-lightGray bg-inputGray px-4 py-2 shadow-inner"
        placeholder={props.placeholder}
      />
      {props.errorText && <p className="mt-1 pl-4 text-small text-red">{props.errorText}</p>}
    </div>
  );
};
