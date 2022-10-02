import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import Column from "@src/atomComponents/Grid/Column";
import { usePlayerLogic } from "@src/atomComponents/Player/Player";
import { USERPLAYER } from "@src/types";
import subtituteIconUrl from '@assets/Icons/substitute.svg'

import DefaultPlayerUrl from '@assets/Images/Player/DefaultPlayer.svg'
import ActivePlayerUrl from '@assets/Images/Player/ActivePlayer.svg'
import Row from "@src/atomComponents/Grid/Row";
import Icon from "@src/atomComponents/Icon/Icon";
import { useRecoilState } from "recoil";
import { _selectedPlayer } from "@src/state/players";
import useModal from "@src/helpers/useModal";

const DefaultImg = () => <img src={DefaultPlayerUrl} alt="default player" />
const ActiveImg = () => <img src={ActivePlayerUrl} alt="active player" />

const CustomPlayerColumn = styled(Column)`
  position: relative;
  z-index: 2;
`;

const ActivePlayerDetail = styled(Row)`
background: #37013B;
border-radius: 4px;
justify-content: center;
align-items: center;

width: 120px;
height: 25px;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 12px;
text-align: center;

color: #FFFFFF;
`

const SelectedPlayerDetail = styled(Row)`
background: #EBFF00;
border-radius: 4px;
justify-content: center;
align-items: center;

width: 120px;
height: 25px;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 12px;
text-align: center;

color: #3D185B;
`

const SubstituteIcon = styled(Icon)`
position: absolute;
right: 0;
bottom: 30px;
cursor: pointer;
`

const MainPlayer: FC<{playerInfo: USERPLAYER}> = ({playerInfo}): ReactElement => {
  const {status, setToSelected} = usePlayerLogic({playerInfo, clickActive: true})
  const [selectedPlayer] = useRecoilState(_selectedPlayer)
  const {addModal} = useModal()

  return <CustomPlayerColumn>
      {
        status === 'Default' ? <DefaultImg /> : undefined
      }
      {/* {
        status === 'Hovered' ? "aoifjaoisdjfoaijdfoiajdfoajs" : undefined
      } */}
      {
        status === 'Active' ?
        <Column>
          <ActiveImg />
          <ActivePlayerDetail>
            {playerInfo.web_name}
          </ActivePlayerDetail>
          <SubstituteIcon src={subtituteIconUrl}
           onClick={(e) => {
            if (selectedPlayer !== undefined) {
              addModal({
                _tag: 'change-player',
                playerIn: playerInfo,
                playerOut: selectedPlayer
              })
            } else {
              setToSelected(playerInfo)
            }
           }} />
        </Column>
        : undefined
      }
      {
        status === 'Selected' ? <Column>
          <ActiveImg />
          <SelectedPlayerDetail>
            {playerInfo.web_name}
          </SelectedPlayerDetail>
          <SubstituteIcon src={subtituteIconUrl}
           onClick={(e) => setToSelected("none")} />
        </Column> : undefined
      }
  </CustomPlayerColumn>
};

export default MainPlayer;
