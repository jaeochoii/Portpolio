import React from "react";
import Modal from "../Component/Page/Modal";
import styled from "styled-components";
import image from "../Assets/image6.JPG";

function ThirteenthModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <img src={image} alt="smile" />
      <h1>전국 모범 장병 50인에 들어 받은 상장과 상품</h1>
      <Button onClick={onClose}>Close</Button>
    </Modal>
  );
}

const Button = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;

export default ThirteenthModal;
