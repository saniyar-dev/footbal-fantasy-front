import FollowerRow from "@src/components/YourFollowersSection/FollowerRow/FollowerRow";
import React, { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import Column from "../Grid/Column";
import SearchComponent from "./SearchComponent";

const StyledColumn = styled(Column)`
  gap: 16px;
  width: 571px;
  height: 211px;
  position: absolute;
  top: 40px;
  z-index: 100;

  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
  border-radius: 0 0 16px 16px;

  padding: 16px;
`;

const SearchWithPreview: FC<{
  placeHolder?: string;
  children?: ReactNode;
  searchFn: (str: String) => Promise<void>;
}> = ({ placeHolder, children, searchFn }): ReactElement => {
  return (
    <Column styles={{ width: "100%" }}>
      <SearchComponent
        placeHolder={placeHolder ? placeHolder : "جستجو"}
        searchFn={searchFn}
      />
      {children ? <StyledColumn>{children}</StyledColumn> : undefined}
    </Column>
  );
};

export default SearchWithPreview;
