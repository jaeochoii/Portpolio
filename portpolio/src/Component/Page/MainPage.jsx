import React from "react";
import styled from "styled-components";
import mainImage from "../../Assets/MainImage.jpg";
const MainBodyWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
const MainBodyImage = styled.img`
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
`;

const CategoryBodyWrapper = styled.div`
  width: 380px;
  height: 100vh;
  background-color: rgb(32, 34, 36);
`;

const MainPage = () => {
  return (
    <>
      <MainBodyWrapper>
        <CategoryBodyWrapper />
        <MainBodyImage src={mainImage} />
      </MainBodyWrapper>
    </>
  );
};

export default MainPage;
