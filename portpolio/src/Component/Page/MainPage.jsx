import { React, useState } from "react";
import styled from "styled-components";
import FirstModal from "../../ModalPage/FirstModal";
import SecondModal from "../../ModalPage/SecondModal";
import ThirdModal from "../../ModalPage/ThirdModal";
import FourthModal from "../../ModalPage/FourthModal";
import FifthModal from "../../ModalPage/FifthModal";
import SixthModal from "../../ModalPage/SixthModal";
import SeventhModal from "../../ModalPage/SeventhModal";
import EighthModal from "../../ModalPage/EighthModal";
import NinethModal from "../../ModalPage/NinethModal";
import TenthModal from "../../ModalPage/TenthModal";
import EleventhModal from "../../ModalPage/EleventhModal";
import TwelvethModal from "../../ModalPage/TwelvthModal";
import ThirteenthModal from "../../ModalPage/ThirteenthModal";
import mainImage from "../../Assets/profile.jpg";
import blogImage from "../../Assets/blog.png";
import arrow from "../../Assets/arrow.png";
import mentorImage from "../../Assets/mentorImage.png";
import sessionImage from "../../Assets/sessionImage.png";
import assemble from "../../Assets/assemble.png";
import dukku from "../../Assets/dukku.png";
import ecord from "../../Assets/ecord.png";
import image1 from "../../Assets/image1.jpeg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.JPG";
import image4 from "../../Assets/image4.jpg";
import image5 from "../../Assets/image5.jpg";
import image6 from "../../Assets/image6.JPG";
import image7 from "../../Assets/image7.jpg";
import image8 from "../../Assets/image8.jpg";
import image9 from "../../Assets/image9.jpg";
import image10 from "../../Assets/image10.jpg";
import image11 from "../../Assets/image11.JPG";
import image12 from "../../Assets/image12.JPG";
import image13 from "../../Assets/image13.JPG";
import { SectionsContainer, Section } from "react-fullpage";

const urlGithub = "https://github.com/jaeochoii";
const urlVelog = "https://velog.io/@jaeochoiii";
const urlAssemble = "https://github.com/Likelion-Inha-10/Assemble-Front";
const urlDukku = "https://github.com/Likelion-Inha-10/Duckku-fe";
const urlEcord =
  "https://github.com/Ecord-2023-super-challenge-hackathon/ecord-frontend";
const urlSession =
  "https://velog.io/@jaeochoiii/%EB%A9%8B%EC%9F%81%EC%9D%B4-%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC-JS%EA%B8%B0%EB%B3%B8-%EC%84%B8%EC%85%98";
const urlMentor =
  "https://velog.io/@jaeochoiii/%EB%81%84%EC%A0%81%EB%81%84%EC%A0%81-%EC%BB%B4%ED%93%A8%ED%84%B0%EA%B3%B5%ED%95%99%EA%B3%BC-%EB%A9%98%ED%86%A0%EB%A7%81-%ED%9B%84%EA%B8%B0";

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

const MainBodyText2 = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 46px;
  color: white;
  margin-top: 10px;
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
  animation: fadeIni 10s;
  @keyframes fadeIni {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    70% {
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

const ImageWrapper = styled.div`
  width: 1050px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  margin-top: 10px;
`;

const ActiveWrapper = styled.img`
  width: 500px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const ActiveWrapper2 = styled.img`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const ActiveTextWrapper = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  border-radius: 10px;
  background-color: #16161c;
`;

const TeachText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
  font-family: "Do Hyeon", sans-serif;
  font-size: 25px;
  color: white;
  line-height: 1.5;
`;

const MainPage = () => {
  const onClickVelog = () => {
    window.open(urlVelog);
  };
  const onClickGithub = () => {
    window.open(urlGithub);
  };

  const onClickAssemble = () => {
    window.open(urlAssemble);
  };

  const onClickDukku = () => {
    window.open(urlDukku);
  };

  const onClickEcord = () => {
    window.open(urlEcord);
  };

  const onClickMentor = () => {
    window.open(urlMentor);
  };

  const onClickSession = () => {
    window.open(urlSession);
  };

  let options = {
    anchors: [
      "sectionOne",
      "sectionTwo",
      "sectionThree",
      "sectionFour",
      "sectionFive",
      "sectionSix",
    ],
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);

  const onClickButton1 = () => {
    setIsOpen1(true);
  };

  const onClickButton2 = () => {
    setIsOpen2(true);
  };

  const onClickButton3 = () => {
    setIsOpen3(true);
  };

  const onClickButton4 = () => {
    setIsOpen4(true);
  };
  const onClickButton5 = () => {
    setIsOpen5(true);
  };
  const onClickButton6 = () => {
    setIsOpen6(true);
  };
  const onClickButton7 = () => {
    setIsOpen7(true);
  };
  const onClickButton8 = () => {
    setIsOpen8(true);
  };
  const onClickButton9 = () => {
    setIsOpen9(true);
  };
  const onClickButton10 = () => {
    setIsOpen10(true);
  };
  const onClickButton11 = () => {
    setIsOpen11(true);
  };
  const onClickButton12 = () => {
    setIsOpen12(true);
  };
  const onClickButton13 = () => {
    setIsOpen13(true);
  };

  return (
    <>
      <SectionsContainer {...options}>
        <Section>
          <MainBodyWrapper>
            <CategoryBodyWrapper>
              <CategoryContent>
                <a
                  href="#sectionOne"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent onClick={onClickGithub}>
                Github
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionTwo"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Velog
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionThree"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#2
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFour"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#3
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFive"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Mentoring
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionSix"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Projects
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategorySubContent
                style={{
                  paddingTop: 20,
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
                <a
                  href="#sectionOne"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent onClick={onClickGithub}>
                Github
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionTwo"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Velog
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionThree"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#2
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFour"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#3
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFive"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Mentoring
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionSix"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Projects
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
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
          <MainBodyWrapper style={{ backgroundColor: "#16161c" }}>
            <CategoryBodyWrapper>
              <CategoryContent>
                <a
                  href="#sectionOne"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent onClick={onClickGithub}>
                Github
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionTwo"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Velog
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionThree"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#2
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFour"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#3
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFive"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Mentoring
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionSix"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Projects
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
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
              <MainBodyText style={{ fontSize: 60 }}>
                우아한테크코스 2번문항 증빙 자료
              </MainBodyText>
              <ImageWrapper>
                <ActiveWrapper
                  src={image1}
                  onClick={onClickButton1}
                ></ActiveWrapper>
                {isOpen1 && (
                  <FirstModal
                    open={isOpen1}
                    onClose={() => {
                      setIsOpen1(false);
                    }}
                  />
                )}
                <ActiveWrapper
                  src={image3}
                  onClick={onClickButton2}
                ></ActiveWrapper>
                {isOpen2 && (
                  <SecondModal
                    open={isOpen2}
                    onClose={() => {
                      setIsOpen2(false);
                    }}
                  />
                )}
              </ImageWrapper>
              <ImageWrapper>
                <ActiveWrapper
                  src={image4}
                  onClick={onClickButton3}
                ></ActiveWrapper>
                {isOpen3 && (
                  <ThirdModal
                    open={isOpen3}
                    onClose={() => {
                      setIsOpen3(false);
                    }}
                  />
                )}
                <ActiveWrapper
                  src={image10}
                  onClick={onClickButton4}
                ></ActiveWrapper>
                {isOpen4 && (
                  <FourthModal
                    open={isOpen4}
                    onClose={() => {
                      setIsOpen4(false);
                    }}
                  />
                )}
              </ImageWrapper>
            </MainImageWrapper>
          </MainBodyWrapper>
        </Section>
        <Section>
          <MainBodyWrapper style={{ backgroundColor: "#16161c" }}>
            <CategoryBodyWrapper>
              <CategoryContent>
                <a
                  href="#sectionOne"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent onClick={onClickGithub}>
                Github
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionTwo"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Velog
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionThree"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#2
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFour"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#3
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFive"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Mentoring
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionSix"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Projects
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
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
              <MainBodyText2 style={{ fontSize: 60 }}>
                우아한테크코스 3번문항 증빙 자료
              </MainBodyText2>
              <ImageWrapper>
                <ActiveWrapper2
                  src={image11}
                  onClick={onClickButton5}
                ></ActiveWrapper2>
                {isOpen5 && (
                  <FifthModal
                    open={isOpen5}
                    onClose={() => {
                      setIsOpen5(false);
                    }}
                  />
                )}
                <ActiveWrapper2
                  src={image12}
                  onClick={onClickButton6}
                ></ActiveWrapper2>
                {isOpen6 && (
                  <SixthModal
                    open={isOpen6}
                    onClose={() => {
                      setIsOpen6(false);
                    }}
                  />
                )}
                <ActiveWrapper2
                  src={image13}
                  onClick={onClickButton7}
                ></ActiveWrapper2>
                {isOpen7 && (
                  <SeventhModal
                    open={isOpen7}
                    onClose={() => {
                      setIsOpen7(false);
                    }}
                  />
                )}
              </ImageWrapper>
              <ImageWrapper>
                <ActiveWrapper2
                  src={image7}
                  onClick={onClickButton8}
                ></ActiveWrapper2>
                {isOpen8 && (
                  <EighthModal
                    open={isOpen8}
                    onClose={() => {
                      setIsOpen8(false);
                    }}
                  />
                )}
                <ActiveWrapper2
                  src={image8}
                  onClick={onClickButton9}
                ></ActiveWrapper2>
                {isOpen9 && (
                  <NinethModal
                    open={isOpen9}
                    onClose={() => {
                      setIsOpen9(false);
                    }}
                  />
                )}
                <ActiveWrapper2
                  src={image5}
                  onClick={onClickButton10}
                ></ActiveWrapper2>
                {isOpen10 && (
                  <TenthModal
                    open={isOpen10}
                    onClose={() => {
                      setIsOpen10(false);
                    }}
                  />
                )}
              </ImageWrapper>
              <ImageWrapper>
                <ActiveWrapper2
                  src={image9}
                  onClick={onClickButton11}
                ></ActiveWrapper2>
                {isOpen11 && (
                  <EleventhModal
                    open={isOpen11}
                    onClose={() => {
                      setIsOpen11(false);
                    }}
                  />
                )}
                <ActiveWrapper2
                  src={image2}
                  onClick={onClickButton12}
                ></ActiveWrapper2>
                {isOpen12 && (
                  <TwelvethModal
                    open={isOpen12}
                    onClose={() => {
                      setIsOpen12(false);
                    }}
                  />
                )}
                <ActiveWrapper2
                  src={image6}
                  onClick={onClickButton13}
                ></ActiveWrapper2>
                {isOpen13 && (
                  <ThirteenthModal
                    open={isOpen13}
                    onClose={() => {
                      setIsOpen13(false);
                    }}
                  />
                )}
              </ImageWrapper>
            </MainImageWrapper>
          </MainBodyWrapper>
        </Section>
        <Section>
          <MainBodyWrapper style={{ backgroundColor: "#16161c" }}>
            <CategoryBodyWrapper>
              <CategoryContent>
                <a
                  href="#sectionOne"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent onClick={onClickGithub}>
                Github
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionTwo"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Velog
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionThree"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#2
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFour"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#3
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFive"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Mentoring
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionSix"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Projects
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
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
              <MainBodyText style={{ fontSize: 60 }}>
                그동안 해왔던 활동
              </MainBodyText>
              <ImageWrapper>
                <ActiveWrapper
                  src={mentorImage}
                  onClick={onClickMentor}
                ></ActiveWrapper>
                <ActiveTextWrapper>
                  <TeachText>
                    개발자, 컴퓨터공학과 진학을 꿈꾸는 많은 학생들에게 학과 소개
                    및 다양한 실습활동을 통해 진로 선택 과정에 도움이 되고자
                    노력하였습니다. Deep한 내용보다는 눈높이에 맞는 수업으로
                    학생의 흥미를 유발하고자 하였습니다.{" "}
                    <span style={{ color: "#fcba03" }}>
                      왼쪽 사진을 클릭하면 더 자세한 글을 확인할 수 있습니다.
                    </span>
                  </TeachText>
                </ActiveTextWrapper>
              </ImageWrapper>
              <ImageWrapper>
                <ActiveWrapper
                  src={sessionImage}
                  onClick={onClickSession}
                ></ActiveWrapper>
                <ActiveTextWrapper>
                  <TeachText>
                    프론트엔드 개발자가 되기 위해서는 자바스크립트를 필수적으로
                    알아야 합니다. 연산자, 반복문, 조건문과 같은 기본적인
                    내용부터 함수, 객체와 같은 심화적인 내용까지 이론과 실습
                    강의를 병행하여 책임감 있게 진행하였습니다.{" "}
                    <span style={{ color: "#fcba03" }}>
                      왼쪽 사진을 클릭하면 더 자세한 글을 확인할 수 있습니다.
                    </span>
                  </TeachText>
                </ActiveTextWrapper>
              </ImageWrapper>
            </MainImageWrapper>
          </MainBodyWrapper>
        </Section>
        <Section>
          <MainBodyWrapper>
            <CategoryBodyWrapper>
              <CategoryContent>
                <a
                  href="#sectionOne"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent onClick={onClickGithub}>
                Github
                <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionTwo"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Velog
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionThree"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#2
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFour"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Proof#3
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionFive"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Mentoring
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
              </CategoryContent>
              <CategoryContent>
                <a
                  href="#sectionSix"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Projects
                  <span style={{ color: "#0F7CA8", fontSize: 50 }}>.</span>
                </a>
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
              <ImageWrapper style={{ height: 250 }}>
                <ActiveWrapper
                  src={assemble}
                  style={{ height: 200 }}
                  onClick={onClickAssemble}
                ></ActiveWrapper>
                <ActiveTextWrapper style={{ height: 200 }}>
                  <TeachText>
                    구글시트와 깃허브에서 영감을 받아 팀플 과제를 할 때 수정된
                    내용과 수정자를 쉽게 확인할 수 있게 해주고, 모두가 가능한
                    날짜로 팀플 약속을 잡게 도와주는{" "}
                    <span style={{ boxShadow: "inset 106px 0 0 0 #0F7CA8" }}>
                      협업 플랫폼
                    </span>
                    을 제작하였습니다.
                  </TeachText>
                </ActiveTextWrapper>
              </ImageWrapper>
              <ImageWrapper style={{ height: 250 }}>
                <ActiveWrapper
                  src={dukku}
                  style={{ height: 200 }}
                  onClick={onClickDukku}
                ></ActiveWrapper>
                <ActiveTextWrapper style={{ height: 200 }}>
                  <TeachText>
                    소비자가 필요로 하는 구성품만을 제공하는 앨범인 토큰형
                    앨범을 제작하고, 이 토큰형 앨범에 대한 구매 내역을 기록하여
                    환경도 보존하는{" "}
                    <span style={{ boxShadow: "inset 206px 0 0 0 #0F7CA8" }}>
                      온라인 앨범보관 플랫폼
                    </span>
                    을 제작하였습니다.
                  </TeachText>
                </ActiveTextWrapper>
              </ImageWrapper>
              <ImageWrapper style={{ height: 250 }}>
                <ActiveWrapper
                  src={ecord}
                  style={{ height: 200 }}
                  onClick={onClickEcord}
                ></ActiveWrapper>
                <ActiveTextWrapper style={{ height: 200 }}>
                  <TeachText>
                    종이 영수증 발급으로 발생하는 환경오염을 줄이고자 NFT와
                    연결하여{" "}
                    <span style={{ boxShadow: "inset 106px 0 0 0 #0F7CA8" }}>
                      전자 영수증
                    </span>
                    을 온라인으로 발급받을 수 있고, 영수증을 꾸며서 보관할 수
                    있는 프로그램을 제작하였습니다.
                  </TeachText>
                </ActiveTextWrapper>
              </ImageWrapper>
            </MainImageWrapper>
          </MainBodyWrapper>
        </Section>
      </SectionsContainer>
    </>
  );
};

export default MainPage;
