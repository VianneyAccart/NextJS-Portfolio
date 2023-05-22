import { t } from "i18next";

const LegalInformation = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <li className="mb-4">
      <p>{t(title)}</p>
      <span className="font-light">{t(content)}</span>
    </li>
  );
};

const Legals = ({ closeLegals }: { closeLegals: any }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70"></div>
        <div className="w-full md:w-3/6 mx-10 bg-white dark:bg-gray-800 text-neutral-800 dark:text-gray-200 rounded-lg p-6 z-50">
          <div className="flex justify-between">
            <p className="text-xl">{t("legals.title")}</p>
            <div
              className="bg-transparent cursor-pointer p-0 text-neutral-800 dark:text-white"
              onClick={closeLegals}
            >
              &#10005;
            </div>
          </div>
          <div className="mt-8">
            <ul>
              <LegalInformation
                title="legals.ownerTitle"
                content="legals.ownerContent"
              />
              <LegalInformation
                title="legals.publishTitle"
                content="legals.publishContent"
              />
              <LegalInformation
                title="legals.webmasterTitle"
                content="legals.webmasterContent"
              />
              <LegalInformation
                title="legals.hostingTitle"
                content="legals.hostingContent"
              />
            </ul>
          </div>
          <p className="mt-8 font-light">{t("legals.privacyAndCookies")}</p>
        </div>
      </div>
    </div>
  );
};

export default Legals;
