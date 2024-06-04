import { NextPage } from "next";
import { useTranslations } from "next-intl";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const t = useTranslations("ContactInfo");
  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-12">
        <thead className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tr>
            <th>{t("name.name-title")}</th>
            <th>{t("address.address-title")}</th>
            <th>{t("location.location-title")}</th>
            <th>{t("phone.phone-title")}</th>
            <th>{t("birth-date.birth-date-title")}</th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td>{t("name.name-value")}</td>
            <td>{t("address.address-value")}</td>
            <td>{t("location.location-value")}</td>
            <td>{t("phone.phone-value")}</td>
            <td>{t("birth-date.birth-date-value")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Page;
