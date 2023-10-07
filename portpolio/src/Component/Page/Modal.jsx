import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useOutSideClick from "../../useOutSideClick";
import ModalContainer from "./ModalContainer";

function Modal({ onClose, children }) {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };
  useOutSideClick(modalRef, handleClose);
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);
  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <Contents>{children}</Contents>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
`;

const Contents = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin: 30px 30px;
  h1 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  img {
    margin-top: 20px;
    width: 450px;
  }
`;
export default Modal;
