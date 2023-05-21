const SectionIntroduction = ({
  title,
  introduction,
}: {
  title: string;
  introduction: string;
}) => {
  return (
    <div className="flex flex-col items-center my-12">
      <h2>{title}</h2>
      <p className="my-4 font-light text-xl">{introduction}</p>
    </div>
  );
};

export default SectionIntroduction;
