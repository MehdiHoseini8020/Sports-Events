import React, { useEffect, useState } from "react";
import {
  ChartContain,
  Container,
  DairyIcons,
  DairyText,
  DateDetail,
  DatePlace,
  EventDate,
  EventDetail,
  EventList,
  Events,
  FutureMatchs,
  HeaderTittle,
  LocationDetail,
  NameDetail,
  OnlineDairy,
  Selected,
} from "./styledComponents/ChartSection";
import ReactEcharts from "echarts-for-react";
import { NE, US, ES, IS } from "country-flag-icons/react/3x2";

export default function ChartSection() {
  // const [find, setFind] = useState<any | undefined>();
  // useEffect(() => {
  //   const getDataa = () => { fetch('https://vo2.ir/api/getChartsData', {
  //       mode: "no-cors",
  //     }
  //     )
  //       .then((res) => res.json())
  //       .then((res) => console.log(res))
  //       .catch((err) => console.error(err));
  //   };
  //   getDataa();
  // }, []);
  const Event = [
    {
      id: "300",
      name: "قهرمانی آسیا",
      event_date: "۲۰ فروردین",
      location: <NE />,
    },
    {
      id: "350",
      name: "قهرمانی ویژه بانوان",
      event_date: "۱۰ اردیبهشت",
      location: "",
    },
    {
      id: "440",
      name: "قهرمانی بانوان",
      event_date: "۱۸ خرداد ",
      location: <US />,
    },
    {
      id: "220",
      name: "قهرمانی اسپانیا",
      event_date: "۴ مرداد ",
      location: "",
    },
    {
      id: "440",
      name: "قهرمانی ویژه بانوان اسپانیا ",
      event_date: "شهریور ۲۹",
      location: <ES />,
    },
    {
      id: "670",
      name: "قهرمانی اروپا",
      event_date: "آبان ۲۰",
      location: <IS />,
    },
    {
      id: "650",
      name: "مرحله اول لیگ بانوان",
      event_date: "آذر ۱۵",
      location: <NE />,
    },
    {
      id: "590",
      name: "کلاس 1 جوانان",
      event_date: "بهمن ۲۵",
      location: "",
    },
    {
      id: "390",
      name: "مرحله دوم لیگ",
      event_date: "بهمن ۲۹",
      location: <US />,
    },
    {
      id: "700",
      name: "قهرمانی کشور",
      event_date: "اسفند ۱",
      location: "",
    },
    {
      id: "340",
      name: "جام کلاس2",
      event_date: "اسفند ۹",
      location: <ES />,
    },
    {
      id: "800",
      name: "قهرمانی اروپا",
      event_date: "اسفند ۲۹",
      location: <IS />,
    },
  ];
  const Option = {
    xAxis: {
      type: "category",
      data: Event.map((item) => {
        return item.name;
      }),
    },
    yAxis: {},
    tooltip: {
      trigger: "axis",
    },
    series: [
      {
        data: Event.map((item) => {
          return item.id;
        }),
        type: "line",
        color: "transparent",
        areaStyle: {
          color: "#FF0072",
        },
      },
    ],
  };

  const [data, setData] = useState(undefined);
  const onOptionChangeHandler = (e: any) => {
    setData(e.target.value);
  };

  return (
    <Container>
      <HeaderTittle>ورزشکاران من</HeaderTittle>
      <DatePlace>
        <OnlineDairy>
          <DairyText>
            <Selected onChange={onOptionChangeHandler}>
              {Event.map((option, index) => {
                return (
                  <option
                    style={{
                      border: "none",
                      fontSize: "16px",
                    }}
                    key={index}
                  >
                    {option.name}
                  </option>
                );
              })}
            </Selected>
          </DairyText>
          <DairyIcons>
            <img src="./images/Calendar.svg" />
          </DairyIcons>
          <DairyIcons>
            <img src="./images/Setting.svg" />
          </DairyIcons>
        </OnlineDairy>
        <ChartContain>
          <ReactEcharts
            style={{
              height: "290px",
              width: "100%",
            }}
            option={Option}
          />
        </ChartContain>
      </DatePlace>
      <EventList>
        <FutureMatchs>مسابقات آینده</FutureMatchs>
        <Events>
          {Event.map((item, index) => {
            return (
              <EventDate key={index}>
                <EventDetail>
                  <DateDetail>{item.event_date}</DateDetail>
                  <LocationDetail>{item.location}</LocationDetail>
                  <NameDetail>{item.name}</NameDetail>
                </EventDetail>
              </EventDate>
            );
          })}
        </Events>
      </EventList>
    </Container>
  );
}
