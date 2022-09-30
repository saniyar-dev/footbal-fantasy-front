export type FormInputTypes =
  | "username"
  | "password"
  | "email"
  | "name"
  | "lastname"
  | "country"
  | "code";

const useFormValidator = (): (({
  type,
  value,
}: {
  type: FormInputTypes;
  value: string | undefined;
}) => boolean) => {
  const validate = ({
    type,
    value,
  }: {
    type: FormInputTypes;
    value: string | undefined;
  }): boolean => {
    if (!value) return false;
    switch (type) {
      case "username":
        if (/\w/g.test(value)) return true;
        else return false;
      case "password":
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(value)) return true;
        else return false;
      case "name":
        if (/\w/g.test(value)) return true;
        else return false;
      case "lastname":
        if (/\w/g.test(value)) return true;
        else return false;
      case "email":
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) return true;
        else return false;
      case "country":
        return true;
      case "code":
        return true;
    }

    return true;
  };

  return validate;
};

export default useFormValidator;
