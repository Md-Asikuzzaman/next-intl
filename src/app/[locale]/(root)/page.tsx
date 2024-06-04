import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h2 className="text-3xl font-semibold my-5">{t("title")}</h2>
      <p>{t("description")}</p>
    </div>
  );
}
