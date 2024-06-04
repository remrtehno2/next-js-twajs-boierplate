import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Page() {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <h1>{t`title`}</h1>

      <div>
        <Link href={`/?lang=${lang}`} as={`/${lang}`}>
          ⬅️
        </Link>
      </div>
    </>
  );
}
