import { myModals } from "@src/state/modals";
import { ModalTypes } from "@src/types";
import { useRecoilState } from "recoil";

const useModal = (): {
  addModal: (modal: ModalTypes) => void;
  getLastModal: () => ModalTypes | undefined;
  removeLastModal: () => void;
} => {
  const [modalList, setModalList] = useRecoilState(myModals);

  const addModal = (modal: ModalTypes) => {
    setModalList([...modalList, modal]);
  };

  const removeLastModal = (): void => {
    setModalList(modalList.slice(1));
  };

  const getLastModal = (): ModalTypes | undefined => {
    if (!modalList.length) return undefined;

    const res = modalList[0];

    removeLastModal();
    return res;
  };

  return {
    addModal,
    getLastModal,
    removeLastModal,
  };
};

export default useModal;
