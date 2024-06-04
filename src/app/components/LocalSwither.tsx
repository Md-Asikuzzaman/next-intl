"use client";

import { NextPage } from "next";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

interface Props {}

const LocalSwither: NextPage<Props> = ({}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeValue = useLocale();

  const path = usePathname();

  const pathName = path.split("/").pop();

  console.log(pathName);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      if (
        pathName === "en" ||
        pathName === "bn" ||
        pathName === "hn" ||
        pathName === "ci"
      ) {
        router.replace(`/${nextLocale}`);
      } else {
        router.replace(`/${nextLocale}/${pathName}`);
        router.refresh();
      }
    });
  };

  return (
    <label>
      <p className="sr-only">change language</p>
      <select
        disabled={isPending}
        defaultValue={localeValue}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        "
      >
        <option value="en">English</option>
        <option value="bn">বাংলা</option>
        <option value="hn">हिंदी</option>
        <option value="ci">中国人</option>
      </select>
    </label>
  );
};

export default LocalSwither;
