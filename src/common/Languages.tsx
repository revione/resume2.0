/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useState } from "react";
import i18next, { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import Select, { SingleValue } from "react-select";

interface StateSelect {
  value: string;
  label: string;
}

export default function Languages() {
  const { t } = useTranslation();

  const options = [
    { value: "es", label: t("languages.es") },
    { value: "en", label: t("languages.en") },
    { value: "de", label: t("languages.de") },
  ];

  const [value, setValue] = useState<StateSelect>(
    options.filter((option) => {
      if (option.value === i18next.language.slice(0, 2)) return option;
    })[0]
  );

  const newOptionSelected = (language: SingleValue<StateSelect>) => {
    const selectedValue = (language as StateSelect).value;
    void changeLanguage(selectedValue);
    setValue({
      ...language,
      label: t(`languages.${selectedValue}`),
    } as StateSelect);
  };

  return (
    <Select
      defaultValue={value}
      value={value}
      classNamePrefix="languages"
      options={options}
      onChange={newOptionSelected}
    />
  );
}
