import { CloseSVG } from "../Input/close.jsx";
import { Img, Input, Heading } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [searchBarValue9, setSearchBarValue9] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  // setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="258px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`${sidebarClasses.container}`]: { gap: 16 }}}
      className={`${props.className} flex flex-col self-center h-screen pt-5 gap-4 top-0 px-4 border-coolgray-20 border-1 border-r border-solid bg-default-white sticky overflow-auto`}
    >
        <div className="flex flex-col items-start justify-center gap-1">
            <Img src="images/img_rectangle_14_stroke.svg" alt="Image" className="h-[24px] w-[24px]" />
            <div className="flex flex-1 justify-center self-center">
                <Heading size="heading_4" as="h4" className="mb-1.5 text-[24px] font-bold text-coolgray-60">
                Trenify
                </Heading>
            </div>
        </div>
        <div className="flex flex-col items-center rounded-[24px] bg-coolgray-10 p-3">
          <Img src="images/img_icon_jam_icons_coolgray_30_24x24.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" />
        </div>
        <Input
          shape="square"
          name="search"
          placeholder="Search for..."
          value={searchBarValue9}
          onChange={(e) => setSearchBarValue9(e.target.value)}
          prefix={<Img src="images/img_search.svg" alt="Search" className="h-[24px] w-[24px]" />}
          suffix={
            searchBarValue9?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue9("")} height={24} width={24} fillColor="#697077ff" />
            ) : null
          }
          className="w-full gap-2 self-stretch border-b border-coolgray-30 px-3"
        />
        <Menu
        menuItemStyles={{
            button: {
            padding: "10px 10px 10px 22px",
            gap: "8px",
            borderColor: "#f2f4f8",
            borderStyle: "solid",
            color: "#21272a",
            fontWeight: 500,
            fontSize: "16px",
            },
        }}
        rootStyles={{ "&>ul": { gap: "0.33px" } }}
        className="flex w-full flex-col self-stretch"
        >
            <MenuItem icon={<Img src="images/img_icon_jam_icons_coolgray_90_24x24.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" />}>
                Change Password
            </MenuItem>
            <MenuItem icon={<Img src="images/img_icon_jam_icons_coolgray_90.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" />}>
                Profile
            </MenuItem>
        </Menu>
    </Sidebar>
  );
}