import React, {
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useFormValidator, {
  FormInputTypes,
} from "@src/helpers/useFormValidator";
import styled, { CSSProperties } from "styled-components";
import Button from "../Button/Button";
import Column from "../Grid/Column";
import Container from "../Grid/Container";
import Row from "../Grid/Row";

const FormContext = createContext<{
  submit: () => void;
  childValues: React.MutableRefObject<Partial<Record<FormInputTypes, string>>>;
  childValidate: React.MutableRefObject<
    Partial<Record<FormInputTypes, () => boolean>>
  >;
}>({
  submit: () => {},
  childValues: { current: {} },
  childValidate: { current: {} },
});

export const Form: FC<{
  children: ReactNode;
  styles?: Pick<
    CSSProperties,
    "gap" | "gridTemplateColumns" | "gridTemplateRows" | "width" | "height"
  >;
  onSubmitFn: (data: Partial<Record<FormInputTypes, string>>) => void;
}> = ({ children, styles, onSubmitFn }): ReactElement => {
  const childValues = useRef<Partial<Record<FormInputTypes, string>>>({});
  const childValidate = useRef<Partial<Record<FormInputTypes, () => boolean>>>(
    {}
  );

  const submit = () => {
    let willSubmit = true;
    for (const key in childValidate.current) {
      const validateFn =
        childValidate.current[key as unknown as FormInputTypes];
      if (validateFn && validateFn() === false) {
        willSubmit = false;
      }
    }
    if (willSubmit) {
      onSubmitFn(childValues.current);
    }
  };

  return (
    <FormContext.Provider
      value={{
        submit,
        childValues,
        childValidate,
      }}
    >
      <Container styles={styles}>{children}</Container>
    </FormContext.Provider>
  );
};

const RightBar = styled.div`
  border: 3px solid #9b3af9;
  flex-grow: 1;
`;
const LeftBar = styled.div`
  border: 3px solid #933087;
  flex-grow: 1;
`;

const HeaderTitle = styled.div`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
`;

export const FormHeader: FC<{
  children: ReactNode;
}> = ({ children }): ReactElement => {
  return (
    <Row
      styles={{
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <RightBar />
      <HeaderTitle>{children}</HeaderTitle>
      <LeftBar />
    </Row>
  );
};

const StyledInput = styled.input<{
  styles?: Pick<CSSProperties, "color" | "background" | "border">;
}>`
  box-sizing: border-box;
  padding-right: 16px;
  height: 48px;

  color: ${(props) => (props.styles?.color ? props.styles.color : "#333333")};
  background: ${(props) =>
    props.styles?.background ? props.styles.background : "#F4F4F4"};
  border: ${(props) => props.styles?.border};

  border-radius: 8px;
`;

const StyledLabel = styled.div<{ styles?: Pick<CSSProperties, "color"> }>`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.styles?.color ? props.styles.color : "#333333")};
`;

const StyledError = styled.div`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: right;

  color: #ed1b5d;
`;

export const FormInput: FC<{
  id: FormInputTypes;
  label: string;
  placeHolder: string;
  errMessage?: string;
  styles?: Pick<CSSProperties, "background" | "color" | "border">;
}> = ({ label, placeHolder, id, errMessage, styles }): ReactElement => {
  const { childValues, childValidate } = useContext(FormContext);
  const [value, setValue] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const validate = useFormValidator();

  const validateChild = (): boolean => {
    if (!value) {
      setErr("اینو باید پر کنی مشتی");
      return false;
    }
    if (validate({ type: id, value })) {
      setErr("");
      return true;
    } else {
      setErr(errMessage ? errMessage : "مقدار این فیلد معتبر نیست");
      return false;
    }
  };

  useEffect(() => {
    childValues.current[id] = value;
    childValidate.current[id] = validateChild;
    if (value) {
      if (validate({ type: id, value: value })) {
        setErr("");
      } else {
        setErr(errMessage ? errMessage : "مقدار این فیلد معتبر نیست");
      }
    } else {
      setErr("");
    }
  }, [value]);

  return (
    <Column styles={{ justifyContent: "center", gap: "16px" }}>
      <StyledLabel styles={styles}>{label}</StyledLabel>
      <StyledInput
        placeholder={placeHolder}
        onChange={(e) => setValue(e.target.value)}
        type={id}
        styles={styles}
      />
      <StyledError>{err}</StyledError>
    </Column>
  );
};

const StyledButtonDiv = styled(Row)`
  flex-grow: 1;
  justify-content: center;
`;

export const FormPrimaryButton: FC<{
  children: ReactNode;
}> = ({ children }): ReactElement => {
  const { submit } = useContext(FormContext);
  return <StyledButtonDiv onClick={submit}>{children}</StyledButtonDiv>;
};

export const FormSecondaryButton: FC<{
  children: ReactNode;
  onClickFn: () => void;
}> = ({ children, onClickFn }): ReactElement => {
  return <StyledButtonDiv onClick={onClickFn}>{children}</StyledButtonDiv>;
};
