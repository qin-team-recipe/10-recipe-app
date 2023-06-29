import Link from "next/link";

type Props = {
  title: string;
  external?: boolean;
};

export const IngredientListItem: React.FC<Props> = (props) => {
  return (
    <div className="border-b border-lightGray px-4 py-3 last-of-type:border-none">
      {props.external ? <a href={props.title}>{props.title}</a> : <Link href="/">{props.title}</Link>}
    </div>
  );
};
