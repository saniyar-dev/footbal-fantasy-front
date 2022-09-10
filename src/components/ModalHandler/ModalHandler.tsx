import { myModals } from "@src/state/modals";
import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import DeletePlayerModal from "../DeletePlayerModal/DeletePlayerModal";
import Container from "@src/atomComponents/Grid/Container";

const CustomContainer = styled(Container)`
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 110;
    top: 0;
    width: 100%;
    height: 100vh;
`

const ModalHandler: FC = (): ReactElement => {
    const [modalList, ] = useRecoilState(myModals)
    console.log(modalList)
    return (
        <CustomContainer>
            {
                modalList.map(modal => {
                    return <DeletePlayerModal playerInfo={modal.playerInfo} />
                })
            }
        </CustomContainer>
    )
}

export default ModalHandler