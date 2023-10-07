import React from "react";
import Modal from "../Component/Page/Modal";
import styled from "styled-components";
import image from "../Assets/image10.jpg";

function FourthModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <img src={image} alt="smile" />
      <h1 style={{ marginBottom: "0px" }}>실력 향상을 통해 협력자로서</h1>
      <h1>수상한 전국 연합 해커톤 대회 은상</h1>
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

export default FourthModal;
