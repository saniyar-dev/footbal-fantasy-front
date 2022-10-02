import React, {FC, ReactElement} from "react";
import { Modal, ModalDescription, ModalHeader, ModalPrimaryButton, ModalSecondaryButton } from "@src/atomComponents/Modal/Modal";
import ImageUrl from '@assets/Images/Player/ActivePlayer.svg'
import { USERPLAYER } from "@src/types";
import Row from "@src/atomComponents/Grid/Row";
import styled from "styled-components";
import useModal from "@src/helpers/useModal";

const Image = () => <img src={ImageUrl} alt="active player" width="100px" />

const StyledPrimaryButton = styled(ModalPrimaryButton)`
    background: #00FF87 !important;
`

const ChangePlayerModal: FC<{
    playerIn: USERPLAYER;
    playerOut: USERPLAYER;
}> = ({playerIn, playerOut}): ReactElement => {
    const {removeLastModal} = useModal()
   return <Modal
   styles={{
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
    width: '770px'
   }}
   >
        <ModalHeader>تعویض بازیکن</ModalHeader>
        <Image />
        <ModalDescription>آیا از تعویض {playerIn.web_name} با {playerOut.web_name} اطمینان دارید؟</ModalDescription>
        <Row styles={{
            gap: '24px',
            width: '370px'
        }}>
            <StyledPrimaryButton onClick={() => removeLastModal()}>بله</StyledPrimaryButton>
            <ModalSecondaryButton onClick={removeLastModal}>خیر</ModalSecondaryButton>
        </Row>
   </Modal> 
}

export default ChangePlayerModal