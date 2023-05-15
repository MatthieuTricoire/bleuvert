import React, { FC } from "react";
import "./index.css";
interface ModalProps {
  modalVisible: boolean;
  setModalVisible : React.Dispatch<React.SetStateAction<boolean>>;

}

const Modal: FC<ModalProps> = ({ modalVisible, setModalVisible }) => {
  return <div className="modal-container">


    
  </div>;
};

export default Modal;
