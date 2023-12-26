import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTittle = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 30px 20px 0px 0px;
  color: var(--Foundation-Grey-Dark, #4d4d4d);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 480px) {
    padding: 12px 15px 0px 0px;
    height: 45px;
  }
`;

export const DatePlace = styled.div`
  height: 290px;
  width: 100%;
  margin-left: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    margin-left: 0px;
  }
`;

export const OnlineDairy = styled.div`
  height: 70px;
  width: 305px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 480px) {
   width:100%;
  }
`;

export const DairyText = styled.div`
  height: 40px;
  width: 288px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: var(--Foundation-Grey-Dark, #4d4d4d);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 8px;
  background-color: #d8d8d8;

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const DairyIcons = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChartContain = styled.div`
  height: 350px;
  width: 100%;
`;

export const EventList = styled.div`
  min-height: 500px;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
`;

export const FutureMatchs = styled.div`
  height: 35px;
  width: fit-content;
  margin-right: 15px;
`;

export const Events = styled.div`
  height: 420px;
  max-height: fit-content;
  width: 100%;
  direction: rtl;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  flex-wrap: wrap;
  overflow-x: auto;
  gap: 16px;

  @media screen and (max-width: 480px) {
   flex-wrap:unset;
   gap: 0px;
  }
`;

export const EventDate = styled.div`
  height: 50px;
  width: 40%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px){
   width:100% ;
  }
`;

export const EventDetail = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: #f94698;
    color: white;
    transition: all 0.3s ease-in-out;
  }

  @media screen {
   width:90% ;
  }
`;

export const DateDetail = styled.div`
  height: fit-content;
  width: 26%;
  margin-right: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LocationDetail = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

export const NameDetail = styled.div`
  height: fit-content;
  width: 51%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Selected = styled.select`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  text-align: center;
  direction: rtl;
`;
