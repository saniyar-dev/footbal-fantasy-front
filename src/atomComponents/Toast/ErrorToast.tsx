import React, { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import Column from "../Grid/Column";
import Row from "../Grid/Row";
import Icon from "../Icon/Icon";

const StyledRow = styled(Row)`
  background: #fe7877;
  padding: 8px 16px 8px 40px;
  border-radius: 8px;
  gap: 8px;
  font-family: "Vazirmatn";
  font-style: normal;
  font-size: 14px;
`;

const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const ErrorToast: FC<{
  children: ReactNode;
}> = ({ children }): ReactElement => {
  return (
    <StyledRow>
      <Column
        styles={{
          justifyContent: "center",
        }}
      >
        <Icon src={require("@assets/Icons/Toast/error.png")} width="24px" />
      </Column>
      <Column>
        <StyledTitle>به پوچی رسیدی</StyledTitle>
        {children}
      </Column>
    </StyledRow>
  );
};

export default ErrorToast;
