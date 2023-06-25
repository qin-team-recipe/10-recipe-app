import { FC, ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
};

export const SectionContainer: FC<SectionContainerProps> = (props) => {
  const { children } = props;

  return <div className="flex flex-col">{children}</div>;
};
