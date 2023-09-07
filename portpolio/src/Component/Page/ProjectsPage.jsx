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
  width: 400px;
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
  padding-top: 25px;
  margin-left: 30px;
`;

const MainSubText = styled.div`
  width: 850px;
  height: 23px;
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 25px;
  color: black;
  margin-bottom: 10px;
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
  animation: fadeIn 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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
  animation: fadeIn 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ProjectsPage = () => {
  const navigate = useNavigate();

  const onClickGithub = () => {
    window.open(urlGithub);
  };

  const onClickVelog = () => {
    window.open(urlVelog);
  };

  const onClickActivies = () => {
    navigate("/ActivePage");
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
          <CategoryContent>
            Project
            <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
          </CategoryContent>
          <CategoryContent onClick={onClickActivies}>
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
            Projects<span style={{ color: "#0F7CA8" }}>.</span>
          </MainTitleText>
          <MainHeadText>• Assemble 🥈</MainHeadText>
          <MainSubText>&nbsp;&nbsp;- 인하대학교 해커톤 2위 수상</MainSubText>
          <MainSubText>
            &nbsp;&nbsp;- 구글시트와 깃허브에서 영감을 받아 팀플 과제를 할 때
            수정된 내용과 수정자를 쉽게 확인할 수
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;있게 해주고, 모두가 가능한 날짜로 팀플
            약속을 잡게 도와주는 협업 플랫폼을 제작하였습니다.{" "}
          </MainSubText>
          <MainSubText />
          <MainSubText>
            &nbsp;&nbsp;- 활용기술: 자바스크립트, 리액트
          </MainSubText>
          <MainHeadText>• Dukku(덕꾸) 🥈</MainHeadText>
          <MainSubText>
            &nbsp;&nbsp;- 멋쟁이 사자처럼 중앙 해커톤 은상 수상
          </MainSubText>
          <MainSubText>
            &nbsp;&nbsp;- 소비자가 필요로 하는 구성품만을 제공하는 앨범인 토큰형
            앨범을 제작하고, 이 토큰형 앨범 &nbsp;&nbsp;&nbsp;&nbsp; 에 대한
            구매 내역을 기록하여 환경도 보존하는 온라인 앨범보관 플랫폼을
            제작하였습니다.{" "}
          </MainSubText>
          <MainSubText />
          <MainSubText>
            &nbsp;&nbsp;- 활용기술: 자바스크립트, 리액트, 피그마
          </MainSubText>
          <MainHeadText>• Ecord</MainHeadText>
          <MainSubText>
            &nbsp;&nbsp;- 종이 영수증 발급으로 발생하는 환경오염을 줄이고자
            NFT와 연결하여 전자 영수증을 온라인으 &nbsp;&nbsp;&nbsp;&nbsp; 로
            발급받을 수 있고, 영수증을 꾸며서 보관할 수 있는 프로그램을
            제작하였습니다.{" "}
          </MainSubText>
          <MainSubText />
          <MainSubText>
            &nbsp;&nbsp;- 활용기술: 자바스크립트, 리액트, 피그마
          </MainSubText>
        </MainImageWrapper>
      </MainBodyWrapper>
    </>
  );
};

export default ProjectsPage;
