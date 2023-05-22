import { t } from "i18next";
import Button, { ButtonType } from "./Button";
import SectionIntroduction from "./SectionIntroduction";

const Contact = () => {
  return (
    <section>
      <SectionIntroduction
        title={t("contact.title")}
        introduction={t("contact.introduction")}
      />

      <div className="flex justify-center">
        <Button
          label={t("contact.buttonLabel")}
          newTab={false}
          url="mailto:vianneyaccart@gmail.com"
          type={ButtonType.PRIMARY}
        />
      </div>
    </section>
  );
};

export default Contact;
