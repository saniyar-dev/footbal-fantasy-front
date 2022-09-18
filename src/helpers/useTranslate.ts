const numDict: Record<string, string> = {
  0: "۰",
  1: "۱",
  2: "۲",
  3: "۳",
  4: "۴",
  5: "۵",
  6: "۶",
  7: "۷",
  8: "۸",
  9: "۹",
};
const useTranslate = (): ((number: number) => string) => {
  const translate = (number: number): string => {
    const newNumber = number.toString();

    return newNumber
      .split("")
      .reduce((prev, curr) => {
        if (curr === ".") {
          return [...prev, curr];
        }
        return [...prev, numDict[curr]];
      }, [] as Array<string>)
      .join("");
  };

  return translate;
};

export default useTranslate;
