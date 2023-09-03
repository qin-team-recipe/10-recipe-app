import Image from "next/image";

type EmptyProps = {
  text: string;
};

export const Empty: React.FC<EmptyProps> = (props) => {
  return (
    <div className="text-center">
      <Image src="/images/error.png" width={300} height={300} alt="" className="mx-auto" />
      <p>{props.text}</p>
    </div>
  );
};
