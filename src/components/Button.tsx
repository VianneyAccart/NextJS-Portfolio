const Button = ({
  url,
  newTab,
  label,
}: {
  url: string;
  newTab: boolean;
  label: string;
}) => {
  return (
    <a
      href={url}
      rel={newTab ? "noreferrer noopener" : ""}
      target={newTab ? "_blank" : ""}
    >
      <button className="flex gap-2 items-center">{label}</button>
    </a>
  );
};

export default Button;
