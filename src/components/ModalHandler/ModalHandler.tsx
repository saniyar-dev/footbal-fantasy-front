import { myModals } from "@src/state/modals";
import React, {FC, ReactElement} from "react";
import { useRecoilState } from "recoil";
import DeletePlayerModal from "../DeletePlayerModal/DeletePlayerModal";

const ModalHandler: FC = (): ReactElement => {
    const [modalList, ] = useRecoilState(myModals)
    return (
        <>
            {
                modalList.map(modal => {
                    return <DeletePlayerModal playerInfo={modal.playerInfo} />
                })
            }
        </>
    )
}

export default ModalHandler