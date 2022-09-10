import { myModals } from "@src/state/modals";
import { ModalTypes } from "@src/types";
import { useRecoilState } from "recoil";

const useModal = (): {
  addModal: (modal: ModalTypes) => void;
  getLastModal: () => ModalTypes | undefined;
} => {
  const [modalList, setModalList] = useRecoilState(myModals);

  const addModal = (modal: ModalTypes) => {
    setModalList([...modalList, modal]);
  };

  const getLastModal = (): ModalTypes | undefined => {
    if (!modalList.length) return undefined;

    const res = modalList[0];

    setModalList(modalList.slice(0, 1));
    return res;
  };

  return {
    addModal,
    getLastModal,
  };
};

export default useModal;
