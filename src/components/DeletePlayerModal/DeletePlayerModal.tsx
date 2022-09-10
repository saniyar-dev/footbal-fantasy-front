import React, {FC, ReactElement} from "react";
import { Modal, ModalDescription, ModalHeader, ModalPrimaryButton, ModalSecondaryButton } from "@src/atomComponents/Modal/Modal";
import ImageUrl from '@assets/Images/Player/ActivePlayer.svg'
import { PLAYER } from "@src/types";
import Row from "@src/atomComponents/Grid/Row";

const Image = () => <img src={ImageUrl} alt="active player" width="100px" />

const DeletePlayerModal: FC<{
    playerInfo: PLAYER
}> = ({playerInfo}): ReactElement => {
    return (
        <Modal styles={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            width: '770px'
        }}>
            <ModalHeader>حذف بازیکن</ModalHeader>
            <Image />
            <ModalDescription>ایا از حذف {playerInfo.name} مطمین هستید؟</ModalDescription>
            <Row styles={{
                gap: '24px',
            }}>
                <ModalPrimaryButton>حذف</ModalPrimaryButton>
                <ModalSecondaryButton>لغو</ModalSecondaryButton>
            </Row>
        </Modal>
    )
}

export default DeletePlayerModal