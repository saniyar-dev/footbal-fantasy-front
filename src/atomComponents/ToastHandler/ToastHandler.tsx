import useToast from "@src/helpers/useToast";
import React, { FC, ReactElement, useEffect } from "react";
import styled from "styled-components";
import Column from "../Grid/Column";
import ErrorToast from "../Toast/ErrorToast";
import SuccessToast from "../Toast/SuccessToast";

const CustomContainer = styled(Column)`
  justify-content: end;
  align-items: start;
  padding: 0 32px 24px 0;
  position: fixed;
  z-index: 110;
  top: 0;
  width: 100%;
  height: 100%;
`;

const ToastHandler: FC = (): ReactElement => {
  const { toasts, removeLastToast } = useToast();
  useEffect(() => {
    const intervalId = setInterval(() => {
      removeLastToast();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [toasts]);
  return (
    <>
      {toasts.length > 0 && (
        <CustomContainer>
          {toasts.map((toast) => {
            return toast._tag === "error" ? (
              <ErrorToast>{toast.message}</ErrorToast>
            ) : (
              <SuccessToast>{toast.message}</SuccessToast>
            );
          })}
        </CustomContainer>
      )}
    </>
  );
};

export default ToastHandler;
