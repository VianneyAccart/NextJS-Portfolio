const Button = ({
  url,
  newTab,
  label,
  className,
}: {
  url: string;
  newTab: boolean;
  label: string;
  className?: string;
}) => {
  return (
    <a
      href={url}
      rel={newTab ? "noreferrer noopener" : ""}
      target={newTab ? "_blank" : ""}
    >
      <button className={`flex gap-2 items-center ${className}`}>
        {label}
      </button>
    </a>
  );
};

export default Button;
