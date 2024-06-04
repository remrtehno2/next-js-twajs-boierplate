import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import ClientCode from "../components/client-code";

export default function Page() {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <h1>{t("title")}</h1>

      <ClientCode />

      <div style={{ marginTop: 20 }}>
        <Link href="/?lang=ru" as="/ru">
          RU
        </Link>
      </div>

      <div>
        <Link href="/?lang=uz" as="/uz">
          UZ
        </Link>
      </div>

      <div>
        <Link href={`/second-page?lang=${lang}`} as={`/${lang}/second-page`}>
          ➡️
        </Link>
      </div>
    </>
  );
}

export const metadata = {
  title: "App directory",
};
