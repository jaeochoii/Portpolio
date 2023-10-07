import React from "react";
import Modal from "../Component/Page/Modal";
import styled from "styled-components";
import image from "../Assets/image5.jpg";

function TenthModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <img src={image} alt="smile" />
      <h1>3km 기록을 측정하며 기록한 부분 중 일부</h1>
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

export default TenthModal;
