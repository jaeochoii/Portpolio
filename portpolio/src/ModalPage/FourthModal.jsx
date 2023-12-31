import React from "react";
import Modal from "../Component/Page/Modal";
import styled from "styled-components";
import image from "../Assets/no2_1.gif";

function FourthModal({ onClose }) {
  const urlVelog =
    "https://velog.io/@jaeochoiii/React-Footer-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%81%B4%EB%A6%AD%EC%8B%9C-%EC%83%89-%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0";

  const onClickVelog = () => {
    window.open(urlVelog);
  };

  return (
    <Modal onClose={onClose}>
      <img src={image} alt="smile" />
      <h1 style={{ marginBottom: "0px" }}>
        개인 프로젝트 좋아요 기능 구현한 화면
      </h1>
      <h1
        onClick={onClickVelog}
        style={{ cursor: "pointer", color: "#0F7CA8" }}
      >
        👉 관련 블로그 글 보러 가기 👈
      </h1>
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
