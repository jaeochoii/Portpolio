import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mainImage from "../../Assets/profile.jpg";
import blogImage from "../../Assets/blog.png";
import arrow from "../../Assets/arrow.png";
import { SectionsContainer, Section } from "react-fullpage";

const urlGithub = "https://github.com/jaeochoii";
const urlVelog = "https://velog.io/@jaeochoiii";

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

const MainBodyImage2 = styled.img`
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
  animation: fadeIna 2s;
  @keyframes fadeIna {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const MainBlogText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  height: 80px;
  font-size: 45px;
  margin-left: 20px;
  opacity: 0.9999;
  animation: fadeInv 9s;
  @keyframes fadeInv {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

const MainBodySubText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 28px;
  color: white;
  margin-bottom: 2px;
  opacity: 0.9999;
  animation: fadeIna 3.5s;
  @keyframes fadeIna {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ArrowWrapper = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 15px;
  opacity: 0.9999;
  animation: fadeInp 11s;
  @keyframes fadeInp {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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

const LinkButton = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #20c997;
  opacity: 0.9999;
  color: white;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    transition: all 0.5s ease;
    color: black;
    background-color: #20c997;
  }
  animation: fadeIni 12s;
  @keyframes fadeIni {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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

const MainPage = () => {
  const onClickHome = () => {
    navigate("/");
  };

  const onClickGithub = () => {
    window.open(urlGithub);
  };

  const onClickVelog = () => {
    window.open(urlVelog);
  };

  const navigate = useNavigate();

  const onClickActivies = () => {
    navigate("/ActivePage");
  };

  const onClickProjects = () => {
    navigate("/ProjectPage");
  };

  let options = {
    anchors: [
      "sectionOne",
      "sectionTwo",
      "sectionThree",
      "sectionFour",
      "sectionFive",
    ],
  };

  return (
    <>
      <SectionsContainer {...options}>
        <Section>
          <MainBodyWrapper>
            <CategoryBodyWrapper>
              <CategoryContent onClick={onClickHome}>
                Home<span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
              <CategoryContent onClick={onClickGithub}>
                Github
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
              <CategoryContent onClick={onClickVelog}>
                Velog<span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
              <CategoryContent onClick={onClickProjects}>
                Project
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
              <CategoryContent onClick={onClickActivies}>
                Activies
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
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
              <MainBodyText>
                어제보다 더 성장한 오늘을 꿈꾸는 개발자
              </MainBodyText>
              <MainBodyText style={{ animation: "fadeIna 3.5s" }}>
                <span
                  style={{
                    fontSize: 88,
                    boxShadow: "inset 0 -20px 0 #0F7CA8",
                    animationName: "run",
                    animationDuration: "2s",
                    animationDelay: "1s",
                    animationFillMode: "forwards",
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
                공부하며 기록한 것들이 사람들에게 조금이나마 도움이 되었으면
                합니다.
              </MainBodySubText>
              <MainBodySubText>
                매일 조금씩 성장하는 개발자가 되기 위해서 늘 노력하고 있습니다.
              </MainBodySubText>
            </MainImageWrapper>
          </MainBodyWrapper>
        </Section>
        <Section>
          <MainBodyWrapper style={{ backgroundColor: "white" }}>
            <CategoryBodyWrapper>
              <CategoryContent>
                Home<span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
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
              <CategoryContent onClick={onClickActivies}>
                Activies
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
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
              <MainBodyImage2 src={blogImage} />
              <MainBlogText style={{ animation: "fadeIna 8s" }}>
                배운 내용을
                <span
                  style={{ fontSize: 80, boxShadow: "inset 0 -10px 0 #0F7CA8" }}
                >
                  기록
                </span>
                &nbsp;하고
              </MainBlogText>
              <MainBlogText style={{ animation: "fadeIna 9s" }}>
                <span
                  style={{ fontSize: 80, boxShadow: "inset 0 -10px 0 #0F7CA8" }}
                >
                  공유
                </span>
                &nbsp;하는 것을 즐겨하는,
              </MainBlogText>
              <MainBlogText style={{ animation: "fadeIna 10s" }}>
                <span
                  style={{ fontSize: 80, boxShadow: "inset 0 -10px 0 #0F7CA8" }}
                >
                  소통
                </span>
                &nbsp;하는 개발자
              </MainBlogText>
              <ArrowWrapper src={arrow}></ArrowWrapper>
              <LinkButton onClick={onClickVelog}>
                블로그 글 구경하러 가기
              </LinkButton>
            </MainImageWrapper>
          </MainBodyWrapper>
        </Section>
        <Section>
          <MainBodyWrapper>
            <CategoryBodyWrapper>
              <CategoryContent>
                Home<span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
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
              <CategoryContent onClick={onClickActivies}>
                Activies
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
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
            <MainImageWrapper></MainImageWrapper>
          </MainBodyWrapper>
        </Section>
        <Section>
          <MainBodyWrapper>
            <CategoryBodyWrapper>
              <CategoryContent>
                Home<span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
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
              <CategoryContent onClick={onClickActivies}>
                Activies
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
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
            <MainImageWrapper></MainImageWrapper>
          </MainBodyWrapper>
        </Section>
        <Section>
          <MainBodyWrapper>
            <CategoryBodyWrapper>
              <CategoryContent>
                Home<span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
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
              <CategoryContent onClick={onClickActivies}>
                Activies
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
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
            <MainImageWrapper></MainImageWrapper>
          </MainBodyWrapper>
        </Section>
      </SectionsContainer>
    </>
  );
};

export default MainPage;
