import Link from "next/link";

type Props = {
  title: string;
  url: string;
  isExternalLink?: boolean;
};

export const IngredientListItem: React.FC<Props> = (props) => {
  return (
    <div className="border-b border-lightGray px-4 py-3 last-of-type:border-none">
      {props.isExternalLink ? (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
      ) : (
        <Link href="/">{props.title}</Link>
      )}
    </div>
  );
};
