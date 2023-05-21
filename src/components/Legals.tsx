const Legals = ({ closeLegals }: { closeLegals: any }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70"></div>
        <div className="w-full md:w-3/6 mx-10 bg-white dark:bg-gray-800 text-neutral-800 dark:text-gray-200 rounded-lg p-6 z-50">
          <div className="flex justify-between">
            <p className="text-xl">Mentions Légales</p>
            <div
              className="bg-transparent cursor-pointer p-0 text-neutral-800 dark:text-white"
              onClick={closeLegals}
            >
              &#10005;
            </div>
          </div>
          <div className="mt-8">
            <ul>
              <li className="mb-4">
                <p>Propriétaire</p>
                <span className="font-light">
                  Monsieur Vianney ACCART – 3 Rue du Repos, 69740 Genas
                </span>
              </li>
              <li className="mb-4">
                <p>Responsable de la publication</p>
                <span className="font-light">
                  Vianney ACCART – vianneyaccart@gmail.com
                </span>
              </li>
              <li className="mb-4">
                <p>Webmaster</p>
                <span className="font-light">Vianney ACCART</span>
              </li>
              <li>
                <p>Hébergement</p>
                <span className="font-light">
                  Ce site est hébergé par Firebase
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legals;
