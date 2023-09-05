import { TabLinks, type Tab } from "@/components/TabLinks/TabLinks";

type RecipeBottomSectionProps = {
  tabs: Tab[];
  children: React.ReactNode;
};

export const RecipeBottomSection: React.FC<RecipeBottomSectionProps> = (props) => {
  return (
    <div>
      <TabLinks tabs={props.tabs} />
      {props.children}
    </div>
  );
};
