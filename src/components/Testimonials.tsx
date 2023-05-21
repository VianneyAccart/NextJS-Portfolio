import Image from "next/image";
import { useState } from "react";
import SectionIntroduction from "./SectionIntroduction";
import { t } from "i18next";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState(1);

  return (
    <section>
      <SectionIntroduction
        title="Témoignages"
        introduction="Ils m'ont fait confiance en me confiant la réalisation de leur projet."
      />

      {testimonial == 1 ? (
        <figure className="mt-20">
          <div className="flex justify-center">
            <Image
              src="/guillaume_astruc.webp"
              alt="Picture of Guillaume Astruc" // TODO : Translate
              width={133}
              height={133}
              className="borderborder-solid border-2 border-white rounded-full"
            />
          </div>
          <figcaption className="mt-10 md:px-32 margin-x text-center font-light text-xl">
            {t("guillaumeTestimonial")}
          </figcaption>
          <p className="text-center text-xl mt-10">Guillaume Astruc</p>
          <p className="text-center text-sm font-light">
            Photographe, Guillaume Astruc Photography
          </p>
        </figure>
      ) : (
        <figure className="mt-20">
          <div className="flex justify-center">
            <Image
              src="/quentin_petitjean.webp"
              alt="Picture of Guillaume Astruc" // TODO : Translate
              width={133}
              height={133}
              className="borderborder-solid border-2 border-white rounded-full"
            />
          </div>
          <figcaption className="mt-10 md:px-32 md:mx-10 lg:mx-32 xl:mx-52 text-center font-light text-xl">
            {t("quentinTestimonial")}
          </figcaption>
          <p className="text-center text-xl mt-10">Quentin Petitjean</p>
          <p className="text-center text-sm font-light">
            Coach Sportif, Esprit Body
          </p>
        </figure>
      )}

      <div className="flex gap-4 justify-center mt-10">
        <div
          className={`w-4 h-4 rounded-full cursor-pointer ${
            testimonial == 1
              ? "bg-blue-500"
              : "bg-transparent border border-solid border-1 border-blue-500"
          }`}
          onClick={() => setTestimonial(1)}
        ></div>
        <div
          className={`w-4 h-4 rounded-full cursor-pointer ${
            testimonial == 2
              ? "bg-blue-500"
              : "bg-transparent border border-solid border-1 border-blue-500"
          }`}
          onClick={() => setTestimonial(2)}
        ></div>
      </div>
    </section>
  );
};

export default Testimonials;
