import { myModals } from "@src/state/modals";
import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import DeletePlayerModal from "../DeletePlayerModal/DeletePlayerModal";
import FollowUserModal from "../FollowUserModal/FollowUserModal";
import Container from "@src/atomComponents/Grid/Container";
import useModal from "@src/helpers/useModal";

const CustomContainer = styled(Container)`
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 110;
    top: 0;
    width: 100%;
    height: 100%;
`

const CustomBackground = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: -1;

    background: rgba(0, 0, 0, 0.2);
`

const ModalHandler: FC = (): ReactElement => {
    const [modalList, ] = useRecoilState(myModals)
    const {removeLastModal} = useModal()
    return (
        <>
        {
            modalList.length > 0 && 
            <CustomContainer>
                <CustomBackground onClick={() => {
                    removeLastModal();
                    console.log(modalList)
                }} />
                {
                    modalList.map(modal => {
                        return modal._tag === 'player-delete' ? <DeletePlayerModal playerInfo={modal.playerInfo} /> :
                        <FollowUserModal />
                    })
                }
            </CustomContainer>
        }
        </>
    )
}

export default ModalHandler