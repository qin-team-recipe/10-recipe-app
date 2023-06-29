import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const TabWrapper: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex w-full max-w-md flex-col gap-y-2">
        <div className="flex items-center justify-between p-1">{props.children}</div>
      </div>
    </div>
  );
};
