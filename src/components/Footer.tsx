import { BsTwitter } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from "@/links";

const FooterLink = ({ icon: Icon, url }: { icon: IconType; url: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="nav-icon w-12 h-12 border border-solid border-1 border-neutral-500 dark:border-gray-200 rounded-full flex items-center justify-center">
        <Icon className="text-md" role="button" />
      </div>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="px-5 mt-48 flex flex-col items-center">
      <div className="flex gap-7">
        <FooterLink icon={FiGithub} url={GITHUB_URL} />
        <FooterLink icon={BsTwitter} url={TWITTER_URL} />
        <FooterLink icon={FaLinkedinIn} url={LINKEDIN_URL} />
      </div>
      <div className="mb-12 mt-4">
        <p className="mt-4 font-light text-lg text-center">
          Design et développement réalisés par mes soins - Tous droits réservés
        </p>
        <p className="font-light text-lg text-center">Mentions Légales</p>
      </div>
    </footer>
  );
};

export default Footer;
