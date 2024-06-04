import { NextPage } from "next";
import { useTranslations } from "next-intl";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <h2 className="text-3xl font-semibold my-5">{t("title")}</h2>
      <p>{t("description")}</p>
    </div>
  );
};

export default Page;
