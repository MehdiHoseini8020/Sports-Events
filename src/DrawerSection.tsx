import React, { useState } from "react";
import {
  Container,
  DownSection,
  DrawerIcons,
  Icon,
  Items,
  MenuImgPlace,
  MiddleLine,
  TopLinks,
  WebIcon,
} from "./styledComponents/DrawerSection";
import Drawer from "@mui/material/Drawer";
import { useMediaQuery } from "@mui/material";

export default function DrawerSection() {
  const responsive = useMediaQuery("(max-width: 480px)");
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      {responsive ? (
        <>
          <MenuImgPlace>
            <img
              onClick={() => {
                setOpenMenu(true);
              }}
              alt="menu"
              src="./images/action_density_medium.svg"
            />
          </MenuImgPlace>
          {/* Drawer */}
          <Drawer
            sx={{
              "& .MuiPaper-root ": {
                width: "47%",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
              },
            }}
            onClick={() => {
              if (openMenu === true) {
                setOpenMenu(false);
              }
            }}
            anchor="right"
            open={openMenu}
          >
            <Container
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <WebIcon>
                <Icon src="./images/TP- LOGO 1.jpg" />
              </WebIcon>
              <TopLinks>
                <Items style={{ backgroundColor: "#FFE5F1" }}>
                  خانه
                  <DrawerIcons src="./images/Home.svg" />
                </Items>
                <Items>
                  تقویم
                  <DrawerIcons src="./images/Calendar.svg" />
                </Items>
                <Items>
                  آنالیز
                  <DrawerIcons src="./images/Chart.svg" />
                </Items>
                <Items>
                  ATP
                  <DrawerIcons src="./images/Group 10.svg" />
                </Items>
                <Items>
                  مدیریت ورزشکاران
                  <DrawerIcons src="./images/3 User.svg" />
                </Items>
              </TopLinks>
              <MiddleLine />
              <DownSection>
                <Items>
                  مخزن تمزین ها
                  <DrawerIcons src="./images/fitness-dumbbell-lift.svg" />
                </Items>
                <Items>
                  استراتژی
                  <DrawerIcons src="./images/route.svg" />
                </Items>
                <Items>
                  تنظیمات
                  <DrawerIcons src="./images/Setting.svg" />
                </Items>
                <Items>
                  آخرین فعالیت ها
                  <DrawerIcons src="./images/Notification.svg" />
                </Items>
              </DownSection>
            </Container>
          </Drawer>
        </>
      ) : (
        <>
          <Container>
            <WebIcon>
              <Icon src="./images/TP- LOGO 1.jpg" />
            </WebIcon>
            <TopLinks>
              <Items style={{ backgroundColor: "#FFE5F1" }}>
                خانه
                <DrawerIcons src="./images/Home.svg" />
              </Items>
              <Items>
                تقویم
                <DrawerIcons src="./images/Calendar.svg" />
              </Items>
              <Items>
                آنالیز
                <DrawerIcons src="./images/Chart.svg" />
              </Items>
              <Items>
                ATP
                <DrawerIcons src="./images/Group 10.svg" />
              </Items>
              <Items>
                مدیریت ورزشکاران
                <DrawerIcons src="./images/3 User.svg" />
              </Items>
            </TopLinks>
            <MiddleLine />
            <DownSection>
              <Items>
                مخزن تمزین ها
                <DrawerIcons src="./images/fitness-dumbbell-lift.svg" />
              </Items>
              <Items>
                استراتژی
                <DrawerIcons src="./images/route.svg" />
              </Items>
              <Items>
                تنظیمات
                <DrawerIcons src="./images/Setting.svg" />
              </Items>
              <Items>
                آخرین فعالیت ها
                <DrawerIcons src="./images/Notification.svg" />
              </Items>
            </DownSection>
          </Container>
        </>
      )}
    </>
  );
}
