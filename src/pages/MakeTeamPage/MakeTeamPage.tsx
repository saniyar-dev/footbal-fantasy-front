import React, { useState } from "react";
import styled from "styled-components";
import Container from "@atomComponents/Grid/Container";
import Row from "@src/atomComponents/Grid/Row";
import Column from "@src/atomComponents/Grid/Column";
import ChoosePlayerComponent from "@src/components/ChoosePlayer/ChoosePlayer";
import Wallet from "@src/components/Wallet/Wallet";
import RahnemaLogo from "@src/components/RahnemaLogo/RahnemaLogo";
import RemainingPlayer from "@src/components/RemainingPlayer/RemainingPlayer";
import ButtonGroup, {
  ButtonGroupBtn,
} from "@src/atomComponents/Button/ButtonGroup";
import ListView from "@src/components/ListView/ListView";
import WeakSeason from "@src/components/WeakSeason/WeakSeason";
import CreateTeamSoccerField from "@src/components/SoccerFieldView/CreateTeamSoccerField";

const SpecialButtonRow = styled(Row)`
  width: 272px;
  height: 40px;

  background: #f7f7f7;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const SpecialLogoColumn = styled(Column)`
  justify-content: center;
  align-items: center;
`;

const SpecialMainViewContainer = styled(Container)`
  width: 869px;
  height: 768px;

  border-radius: 16px;
  background-color: white;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));
`;

const StyledContainer = styled(Container)`
  margin: 0 auto 128px auto;
  width: fit-content;
  box-sizing: "content-box";
`;

type MainViewType = "SoccerFieldView" | "ListView";

const MakeTeamPage = () => {
  const [mainView, setMainView] = useState<MainViewType>("SoccerFieldView");

  return (
    <StyledContainer
      styles={{
        gridTemplateColumns: "273px 869px",
        gridTemplateRows: "auto auto",
        gap: "32px",
      }}
    >
      <Row
        styles={{
          justifyContent: "center",
          gridArea: "1 / 2 / 1 / 2",
        }}
      >
        <WeakSeason />
      </Row>
      <Column styles={{ gridArea: "2 / 1 / 2 / 1" }}>
        <ChoosePlayerComponent />
      </Column>
      <Column styles={{ gridArea: "2 / 2 / 2 / 2" }}>
        <Row
          styles={{
            gap: "24px",
          }}
        >
          <Wallet />
          <SpecialLogoColumn styles={{}}>
            <RahnemaLogo />
            <SpecialButtonRow styles={{}}>
              <ButtonGroup
                defaultId={0}
                onChange={() => {}}
                styles={{
                  height: "30px",
                  width: "131px",
                  background: "white",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                <span onClick={() => setMainView("SoccerFieldView")}>
                  <ButtonGroupBtn id={0}>شماتیک ترکیب</ButtonGroupBtn>
                </span>
                <span onClick={() => setMainView("ListView")}>
                  <ButtonGroupBtn id={1}>مشاهده لیست</ButtonGroupBtn>
                </span>
              </ButtonGroup>
            </SpecialButtonRow>
          </SpecialLogoColumn>
          <RemainingPlayer />
        </Row>
        <SpecialMainViewContainer
          styles={{
            gridTemplateColumns: "auto",
            gridTemplateRows: "auto",
          }}
        >
          {mainView === "SoccerFieldView" ? (
            <CreateTeamSoccerField />
          ) : (
            <ListView />
          )}
        </SpecialMainViewContainer>
      </Column>
    </StyledContainer>
  );
};

export default MakeTeamPage;
