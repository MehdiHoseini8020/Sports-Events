import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
   overflow-x: hidden;
}
`;

export const Container = styled.div`
  height: fit-content;
  min-width: 100vw;
  display: flex;
  overflow-x: hidden;
  position: relative;
  background-color: #fcfcfc;
`;

export const Main = styled.div`
  height: 100%;
  width: 1440px;
  background-color: #ebe9ee;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Drawer = styled.div`
  height: 100%;
  width: 240px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  @media screen and (max-width: 480px) {
    position: absolute;
    height: 35px;
    width: 35px;
    left: 3%;
    top: 1%;
    background-color: transparent;
  }
`;