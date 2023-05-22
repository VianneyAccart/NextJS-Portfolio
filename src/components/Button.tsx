export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const Button = ({
  url,
  newTab,
  label,
  type,
  className,
}: {
  url: string;
  newTab: boolean;
  label: string;
  type: ButtonType;
  className?: string;
}) => {
  return (
    <a
      href={url}
      rel={newTab ? "noreferrer noopener" : ""}
      target={newTab ? "_blank" : ""}
    >
      <button
        className={`flex gap-2 items-center ${className} ${
          type == "secondary" &&
          "bg-transparent text-blue-500 hover:text-white border border-solid border-1 border-blue-500 hover:border-blue-600"
        }`}
      >
        {label}
      </button>
    </a>
  );
};

export default Button;
