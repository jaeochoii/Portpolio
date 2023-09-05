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

const MainBodySubText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 26px;
  color: white;
  margin-bottom: 2px;
  opacity: 0.8;
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

const CategoryContent = styled.div`
  width: 170px;
  height: 100px;
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 40px;
  color: white;
`;

const MainPage = () => {
  return (
    <>
      <MainBodyWrapper>
        <CategoryBodyWrapper>
          <CategoryContent>Github</CategoryContent>
          <CategoryContent>Velog</CategoryContent>
          <CategoryContent>Project</CategoryContent>
          <CategoryContent>Activies</CategoryContent>
          <CategoryContent
            style={{
              fontSize: 18,
              paddingTop: 70,
              height: 30,
            }}
          >
            chlwodh0716@gmail.com
          </CategoryContent>
          <CategoryContent style={{ fontSize: 18 }}>
            @uh_jaeo_neul
          </CategoryContent>
        </CategoryBodyWrapper>
        <MainImageWrapper>
          <MainBodyImage src={mainImage}></MainBodyImage>
          <MainBodyText>어제보다 더 성장한 오늘을 꿈꾸는 개발자</MainBodyText>
          <MainBodyText>
            <span style={{ fontSize: 88 }}>최재오</span>입니다.
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
