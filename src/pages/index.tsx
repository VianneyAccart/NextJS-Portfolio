import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useTranslationWithBrowserLanguageDetection } from "@/i18n/i18n";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const { t } = useTranslationWithBrowserLanguageDetection();

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
      </main>
    </>
  );
}
