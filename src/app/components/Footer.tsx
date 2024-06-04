import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("CopyRight");

  return <div className="text-center py-4">{t("title")}</div>;
};

export default Footer;
