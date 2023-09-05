import React from "react";
import styled from "styled-components";
import mainImage from "../../Assets/Image.png";
const MainBodyWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const MainImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const MainBodyImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

const MainBodyText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 46px;
  color: white;
  margin-bottom: 20px;
  opacity: 0.8;
`;

const CategoryBodyWrapper = styled.div`
  width: 350px;
  height: 100vh;
  background-color: rgb(32, 34, 36);
`;

const MainPage = () => {
  return (
    <>
      <MainBodyWrapper>
        <CategoryBodyWrapper />
        <MainImageWrapper>
          <MainBodyImage src={mainImage}></MainBodyImage>
          <MainBodyText>어제보다 더 성장한 오늘을 꿈꾸는 개발자</MainBodyText>
          <MainBodyText>
            <span style={{ fontSize: 88 }}>최재오</span>입니다.
          </MainBodyText>
        </MainImageWrapper>
      </MainBodyWrapper>
    </>
  );
};

export default MainPage;
