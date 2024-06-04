import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main>
      <h1>Home page...</h1>
      <h2>{t("title")}</h2>
      <Link href={"profile"}>Profile</Link>
    </main>
  );
}
