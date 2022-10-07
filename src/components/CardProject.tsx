import Link from "next/link";

const CardProjectComponent = ({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) => {
  return (
    <div>
      <Link href={url}>
        <h1>{name}</h1>
      </Link>
      <p>{description}</p>
      <img width={40} src={image} />
    </div>
  );
};

export default CardProjectComponent;
