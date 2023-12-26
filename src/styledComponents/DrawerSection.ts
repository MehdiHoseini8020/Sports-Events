import styled from "styled-components";

export const Container = styled.div`
  height: 672px;
  width: 100%;
  margin-top: 16px;
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const WebIcon = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  height: 32px;
  width: 50.56px;
`;

export const TopLinks = styled.div`
  height: 352px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Items = styled.div`
  height: 56px;
  width: 224px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 12px;
  gap: 16px;
  color: #3d3d3d;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ffe5f1;
  }

  @media screen and (max-width: 480px) {
    width: 185px;
  }
`;

export const MiddleLine = styled.div`
  height: 1px;
  width: 224px;
  background-color: #f0f0f0;
`;

export const DownSection = styled.div`
  height: 224px;
  width: 224px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DrawerIcons = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 24px;

  @media screen and (max-width: 480px) {
    margin-right: 15px;
  }
`;

export const MenuImgPlace = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
