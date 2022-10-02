import { myModals } from "@src/state/modals";
import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import DeletePlayerModal from "../DeletePlayerModal/DeletePlayerModal";
import FollowUserModal from "../FollowUserModal/FollowUserModal";
import Container from "@src/atomComponents/Grid/Container";
import useModal from "@src/helpers/useModal";
import ChangePlayerModal from "../ChangePlayerModal/ChangePlayerModal";

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
                }} />
                {
                    modalList.map(modal => {
                        switch (modal._tag) {
                            case 'player-delete':
                                return <DeletePlayerModal playerInfo={modal.playerInfo} />
                            case 'follow-user':
                                return <FollowUserModal />
                            case 'change-player':
                                return <ChangePlayerModal playerIn={modal.playerIn} playerOut={modal.playerOut} />
                        }
                    })
                }
            </CustomContainer>
        }
        </>
    )
}

export default ModalHandler