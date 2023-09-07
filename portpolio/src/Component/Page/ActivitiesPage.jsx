import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const urlGithub = "https://github.com/jaeochoii";
const urlVelog = "https://velog.io/@jaeochoiii";

const MainBodyWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const MainImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  animation: fadeIna 2s;
  @keyframes fadeIna {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const MainTitleText = styled.div`
  width: 200px;
  height: 70px;
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 50px;
  color: black;
  padding-top: 15px;
  margin-left: 30px;
  box-shadow: inset 0 -7px 0 #0f7ca8;
`;

const MainHeadText = styled.div`
  width: 400px;
  height: 50px;
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 35px;
  color: black;
  padding-top: 30px;
  margin-left: 30px;
`;

const MainSubText = styled.div`
  width: 400px;
  height: 40px;
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 25px;
  color: black;
  padding-top: 5px;
  margin-left: 55px;
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

const ActivitiesPage = () => {
  const navigate = useNavigate();
  const onClickGithub = () => {
    window.open(urlGithub);
  };

  const onClickVelog = () => {
    window.open(urlVelog);
  };

  const onClickProjects = () => {
    navigate("/ProjectPage");
  };
  return (
    <>
      <MainBodyWrapper>
        <CategoryBodyWrapper>
          <CategoryContent onClick={onClickGithub}>
            Github<span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
          </CategoryContent>
          <CategoryContent onClick={onClickVelog}>
            Velog<span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
          </CategoryContent>
          <CategoryContent onClick={onClickProjects}>
            Project
            <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
          </CategoryContent>
          <CategoryContent>
            Activies<span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
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
          <MainTitleText>
            Activies<span style={{ color: "#0F7CA8" }}>.</span>
          </MainTitleText>
          <MainHeadText>• 인하대학교</MainHeadText>
          <MainSubText>&nbsp;&nbsp;- 컴퓨터공학과 4학년 재학</MainSubText>
          <MainHeadText>• 인하대학교 위드아이 멘토링</MainHeadText>
          <MainSubText>
            &nbsp;&nbsp;- 인천광역시 1기 컴퓨터공학과 멘토
          </MainSubText>
          <MainSubText>
            &nbsp;&nbsp;- 인천광역시 2기 컴퓨터공학과 멘토
          </MainSubText>
          <MainHeadText>• 멋쟁이 사자처럼</MainHeadText>
          <MainSubText>
            &nbsp;&nbsp;- 멋쟁이 사자처럼 10기 인하대학교
          </MainSubText>
          <MainSubText>
            &nbsp;&nbsp;- 멋쟁이 사자처럼 11기 인하대학교 운영진
          </MainSubText>
          <MainSubText>
            &nbsp;&nbsp;- 멋쟁이 사자처럼 11기 중앙 운영진
          </MainSubText>
          <MainSubText>
            &nbsp;&nbsp;- 자바스크립트 기본, 심화 세션 진행
          </MainSubText>
        </MainImageWrapper>
      </MainBodyWrapper>
    </>
  );
};

export default ActivitiesPage;
