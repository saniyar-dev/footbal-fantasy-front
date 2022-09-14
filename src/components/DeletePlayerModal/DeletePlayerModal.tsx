import React, {FC, ReactElement} from "react";
import { Modal, ModalDescription, ModalHeader, ModalPrimaryButton, ModalSecondaryButton } from "@src/atomComponents/Modal/Modal";
import ImageUrl from '@assets/Images/Player/ActivePlayer.svg'
import { USERPLAYER } from "@src/types";
import Row from "@src/atomComponents/Grid/Row";
import useModal from "@src/helpers/useModal";
import useManagePlayer from "@src/helpers/useManagePlayer";

const Image = () => <img src={ImageUrl} alt="active player" width="100px" />

const DeletePlayerModal: FC<{
    playerInfo: USERPLAYER 
}> = ({playerInfo}): ReactElement => {
    const {removeLastModal} = useModal()
    const {removePlayer} = useManagePlayer()
    return (
        <Modal styles={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            width: '770px'
        }}>
            <ModalHeader>حذف بازیکن</ModalHeader>
            <Image />
            <ModalDescription>ایا از حذف {playerInfo.web_name} مطمین هستید؟</ModalDescription>
            <Row styles={{
                gap: '24px',
                width: '370px'
            }}>
                <ModalPrimaryButton onClick={() => {removePlayer(playerInfo.squad_place, playerInfo.player_id); removeLastModal()}}>حذف</ModalPrimaryButton>
                <ModalSecondaryButton onClick={removeLastModal}>لغو</ModalSecondaryButton>
            </Row>
        </Modal>
    )
}

export default DeletePlayerModal