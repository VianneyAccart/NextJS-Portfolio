import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inter, Kanit } from "next/font/google";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ weight: ["200", "400"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={kanit.className}>
      <ThemeProvider enableSystem={true} attribute="class">
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </ThemeProvider>
    </div>
  );
}
