import FollowerRow from "@src/components/YourFollowersSection/FollowerRow/FollowerRow";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import Column from "../Grid/Column";
import SearchComponent from "./SearchComponent";

const StyledColumn = styled(Column)`
  width: 100%;
  gap: 16px;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;

const SearchWithPreview: FC<{
  placeHolder?: string;
  children?: ReactElement;
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
