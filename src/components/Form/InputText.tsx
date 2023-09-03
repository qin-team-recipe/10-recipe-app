type InputTextProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  addClassNames?: string;
  errorText?: string;
};

export const InputText: React.FC<InputTextProps> = (props) => {
  return (
    <div className={props.addClassNames}>
      <label className="mb-1 block pl-4 font-bold">{props.label}</label>
      <input
        type="text"
        className="w-full border-y border-lightGray bg-inputGray px-4 py-2 shadow-inner"
        onChange={props.onChange}
        placeholder="ニックネームをご入力ください"
      />
      {props.errorText && <p className="mt-1 pl-4 text-small text-red">{props.errorText}</p>}
    </div>
  );
};
