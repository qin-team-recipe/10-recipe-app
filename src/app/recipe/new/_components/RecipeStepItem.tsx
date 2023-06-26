type Props = {
  description: string;
  supplement: string;
  stepNumber: number;
};

export const RecipeStepItem: React.FC<Props> = ({ description, supplement, stepNumber }) => {
  return (
    <div className="flex gap-2 border-b border-lightGray px-4 py-2 last-of-type:border-none">
      <div className="h-5 w-5 shrink-0 rounded-full bg-tomato text-center leading-5">
        <span className=" text-white">{stepNumber}</span>
      </div>
      <div>
        <div>{description}</div>
        <p className="text-small text-gray">{supplement}</p>
      </div>
    </div>
  );
};
