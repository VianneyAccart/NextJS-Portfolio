import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const [testimonial, setTestimonial] = useState(1);

  return (
    <section className="px-5 mt-40">
      <div className="flex flex-col items-center my-12">
        <h2 className="z-10 text-6xl font-bold">Témoignages</h2>
        <p className="my-4 font-light text-xl">
          Ils m'ont fait confiance en me confiant la réalisation de leur projet.
        </p>
      </div>
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
          <figcaption className="mt-10 md:px-32 md:mx-10 lg:mx-32 xl:mx-52 text-center font-light text-xl">
            "Je suis photographe professionnel et j'ai fait appel à Vianney pour
            concevoir mon site internet. Il a su faire preuve d'un grand
            professionnalisme pour s'adapter au mieux à mes besoins et me
            proposer quelque chose qui me correspond parfaitement. Il est très
            organisé, disponible et force de proposition"
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
            "J’ai fait appel à Vianney au lancement de mon activité de coaching
            sportif pour réaliser mon site. Je n'avais que peu d'idées
            concernant le design. Vianney a su me poser les bonnes questions
            afin de me proposer différentes possibilités. Il a su prendre des
            initiatives pour me faire gagner du temps"
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
}
