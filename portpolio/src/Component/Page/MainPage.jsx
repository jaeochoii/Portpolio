import React from "react";
import styled from "styled-components";
import mainImage from "../../Assets/profile.jpg";
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
  opacity: 0.5;
  object-fit: cover;
`;

const MainBodyText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 46px;
  color: white;
  margin-bottom: 20px;
  opacity: 0.9999;
`;

const MainBodySubText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 28px;
  color: white;
  margin-bottom: 2px;
  opacity: 0.9999;
`;

const CategoryBodyWrapper = styled.div`
  width: 350px;
  height: 100vh;
  background-color: rgb(32, 34, 36);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CategoryContent = styled.button`
  width: 170px;
  height: 50px;
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 40px;
  background: none;
  border: 0px solid;
  color: white;
  text-align: left;
  box-shadow: inset 0 0 0 0 #0f7ca8;
  transition: ease-out 0.5s;
  margin-bottom: 35px;
  &:hover {
    box-shadow: inset 300px 0 0 0 #0f7ca8;
    cursor: pointer;
  }
`;

const CategorySubContent = styled.div`
  width: 170px;
  height: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 18px;
  color: white;
  margin-bottom: 10px;
`;

const MainPage = () => {
  return (
    <>
      <MainBodyWrapper>
        <CategoryBodyWrapper>
          <CategoryContent>
            Github<span style={{ color: "#0F7CA8" }}>.</span>
          </CategoryContent>
          <CategoryContent>
            Velog<span style={{ color: "#0F7CA8" }}>.</span>
          </CategoryContent>
          <CategoryContent>
            Project
            <span style={{ color: "#0F7CA8" }}>.</span>
          </CategoryContent>
          <CategoryContent>
            Activies<span style={{ color: "#0F7CA8" }}>.</span>
          </CategoryContent>
          <CategorySubContent
            style={{
              paddingTop: 50,
            }}
          >
            chlwodh0716@gmail.com
          </CategorySubContent>
          <CategorySubContent>@uh_jaeo_neul</CategorySubContent>
        </CategoryBodyWrapper>
        <MainImageWrapper>
          <MainBodyImage src={mainImage}></MainBodyImage>
          <MainBodyText>어제보다 더 성장한 오늘을 꿈꾸는 개발자</MainBodyText>
          <MainBodyText>
            <span
              style={{
                fontSize: 88,
                boxShadow: "inset 0 -20px 0 #0F7CA8",
              }}
            >
              최재오
            </span>
            입니다.
          </MainBodyText>
          <MainBodySubText>
            프론트엔드 개발을 공부하고 있습니다.
          </MainBodySubText>
          <MainBodySubText>
            공부하며 기록한 것들이 사람들에게 조금이나마 도움이 되었으면 합니다.
          </MainBodySubText>
          <MainBodySubText>
            매일 조금씩 성장하는 개발자가 되기 위해서 노력하고 있습니다.
          </MainBodySubText>
        </MainImageWrapper>
      </MainBodyWrapper>
    </>
  );
};

export default MainPage;
