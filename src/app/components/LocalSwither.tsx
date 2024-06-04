"use client";

import { NextPage } from "next";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

interface Props {}

const LocalSwither: NextPage<Props> = ({}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeValue = useLocale();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace("/" + nextLocale);
      router.refresh();
    });
  };

  return (
    <label>
      <p className="sr-only">change language</p>
      <select
        disabled={isPending}
        defaultValue={localeValue}
        onChange={handleChange}
      >
        <option value="en">English</option>
        <option value="bn">Bangla</option>
      </select>
    </label>
  );
};

export default LocalSwither;
