import { GITHUB_URL } from "@/links";
import Button from "./Button";

export default function Contact() {
  return (
    <section className="px-5 mt-40">
      <div className="flex flex-col items-center mt-12 mb-8">
        <h2 className="z-10 text-6xl font-bold">Et si nous collaborions ?</h2>
        <p className="my-4 font-light text-xl">
          Je vous accompagnerai dans votre projet, de l'élaboration à la
          réalisation. Parlons-en ensemble.
        </p>
      </div>

      <div className="flex justify-center">
        <Button
          label="Start a project"
          newTab={false}
          url="mailto:vianneyaccart@gmail.com"
        />
      </div>
    </section>
  );
}
