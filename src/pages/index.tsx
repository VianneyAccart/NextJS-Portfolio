import Head from "next/head";
import { useTranslationWithBrowserLanguageDetection } from "@/i18n/i18n";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home = () => {
  const { t } = useTranslationWithBrowserLanguageDetection();

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta
          name="description"
          content="Vianney Accart, Développeur Full Stack & Ingénieur Logiciel - Portfolio - Découvrez mes réalisations et discutons de votre futur projet."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Vianney Accart - Développeur Full Stack & Ingénieur Logiciel"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta
          property="og:image"
          content="/og_picture_portfolio_vianney_accart.jpg"
        />
        <meta
          property="og:image:url"
          content="/og_picture_portfolio_vianney_accart.jpg"
        />
        <meta
          property="og:image:alt"
          content="Illustration du site internet de Vianney Accart"
        />
        <meta property="og:url" content="https://vianneyaccart.com/" />
        <meta
          property="og:description"
          content="Vianney Accart, Développeur Full Stack & Ingénieur Logiciel - Portfolio - Découvrez mes réalisations et discutons de votre futur projet."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
