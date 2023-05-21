import Button, { ButtonType } from "./Button";
import SectionIntroduction from "./SectionIntroduction";

const Contact = () => {
  return (
    <section>
      <SectionIntroduction
        title="Et si nous collaborions ?"
        introduction="Je vous accompagnerai dans votre projet, de l'élaboration à la
        réalisation. Parlons-en ensemble."
      />

      <div className="flex justify-center">
        <Button
          label="Start a project"
          newTab={false}
          url="mailto:vianneyaccart@gmail.com"
          type={ButtonType.PRIMARY}
        />
      </div>
    </section>
  );
};

export default Contact;
