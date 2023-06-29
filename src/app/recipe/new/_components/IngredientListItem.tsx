import Link from "next/link";

type Props = {
  title: string;
  supplement?: string;
  external?: boolean;
};

export const IngredientListItem: React.FC<Props> = ({ title, supplement, external = false }) => {
  return (
    <div className="border-b border-lightGray px-4 py-3 last-of-type:border-none">
      {external ? <a href={title}>{title}</a> : <Link href="/">{title}</Link>}
    </div>
  );
};
