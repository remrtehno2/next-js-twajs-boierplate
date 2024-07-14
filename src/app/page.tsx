"use client";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import ClientCode from "../components/client-code";
import { Button } from "@nextui-org/button";
import { useTgBackButton } from "@/hooks/useTgBackButton";

const Page = () => {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <h1>{t("title")}</h1>
      <ClientCode />
      <Button color="primary">Press me</Button>
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
};

export default Page;
