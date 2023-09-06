import React from "react";
import styled from "styled-components";

const urlGithub = "https://github.com/jaeochoii";
const urlVelog = "https://velog.io/@jaeochoiii";

const MainBodyWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const CategoryBodyWrapper = styled.div`
  width: 285px;
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

const ActivitiesPage = () => {
  const onClickGithub = () => {
    window.open(urlGithub);
  };

  const onClickVelog = () => {
    window.open(urlVelog);
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
      </MainBodyWrapper>
    </>
  );
};

export default ActivitiesPage;
