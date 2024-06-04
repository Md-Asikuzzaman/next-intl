import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div>
      <h2>{t("title")}</h2>
    </div>
  );
}
