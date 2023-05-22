import Image from "next/image";
import { useState } from "react";
import SectionIntroduction from "./SectionIntroduction";
import { t } from "i18next";

const Testimonial = ({
  src,
  alt,
  testimonial,
  person,
  roleAndCompany,
}: {
  src: string;
  alt: string;
  testimonial: string;
  person: string;
  roleAndCompany: string;
}) => {
  return (
    <figure className="mt-20">
      <div className="flex justify-center">
        <Image
          src={src}
          alt={t(alt)}
          width={133}
          height={133}
          className="borderborder-solid border-2 border-white rounded-full"
        />
      </div>
      <figcaption className="mt-10 md:px-32 margin-x text-center font-light text-xl">
        {t(testimonial)}
      </figcaption>
      <p className="text-center text-xl mt-10">{t(person)}</p>
      <p className="text-center text-sm font-light">{t(roleAndCompany)}</p>
    </figure>
  );
};

const TestimonialSelector = ({
  testimonial,
  index,
  setTestimonial,
}: {
  testimonial: number;
  index: number;
  setTestimonial: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div
      className={`w-4 h-4 rounded-full cursor-pointer ${
        testimonial == index
          ? "bg-blue-500"
          : "bg-transparent border border-solid border-1 border-blue-500"
      }`}
      onClick={() => setTestimonial(index)}
    ></div>
  );
};

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState(1);

  return (
    <section>
      <SectionIntroduction
        title={t("testimonials.title")}
        introduction={t("testimonials.introduction")}
      />

      {testimonial == 1 ? (
        <Testimonial
          src="/guillaume_astruc.webp"
          alt="testimonials.guillaumeAstrucPhotography.pictureAlt"
          testimonial="testimonials.guillaumeAstrucPhotography.testimonial"
          person="Guillaume Astruc"
          roleAndCompany="testimonials.guillaumeAstrucPhotography.roleAndCompany"
        />
      ) : (
        <Testimonial
          src="/quentin_petitjean.webp"
          alt="testimonials.espritBody.pictureAlt"
          testimonial="testimonials.espritBody.testimonial"
          person="Quentin Petitjean"
          roleAndCompany="testimonials.espritBody.roleAndCompany"
        />
      )}

      <div className="flex gap-4 justify-center mt-10">
        <TestimonialSelector
          index={1}
          testimonial={testimonial}
          setTestimonial={setTestimonial}
        />
        <TestimonialSelector
          index={2}
          testimonial={testimonial}
          setTestimonial={setTestimonial}
        />
      </div>
    </section>
  );
};

export default Testimonials;
