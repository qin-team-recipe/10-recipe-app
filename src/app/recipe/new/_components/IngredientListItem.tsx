type Props = {
  title?: string;
  supplement?: string;
  link?: string;
};

export const IngredientListItem: React.FC<Props> = ({ title, supplement, link }) => {
  return (
    <div className="border-b border-lightGray px-4 py-3 last-of-type:border-none">
      {link ? <a href={link}>{link}</a> : <h2>{title}</h2>}
      <p className="text-small text-gray">{supplement}</p>
    </div>
  );
};
