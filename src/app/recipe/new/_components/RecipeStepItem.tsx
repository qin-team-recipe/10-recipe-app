type Props = {
  description: string;
  supplement: string;
  stepNumber: number;
};

export const RecipeStepItem: React.FC<Props> = (props) => {
  return (
    <div className="flex gap-2 border-b border-lightGray px-4 py-2 last-of-type:border-none">
      <div className="h-5 w-5 shrink-0 rounded-full bg-tomato text-center leading-5">
        <span className=" text-medium text-white">{props.stepNumber}</span>
      </div>
      <div>
        <p>{props.description}</p>
        <p className="text-small text-gray">{props.supplement}</p>
      </div>
    </div>
  );
};
