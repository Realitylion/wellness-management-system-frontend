import { Img, Heading } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
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
            rootStyles={{ [`.$(sidebarClasses.container)`]: { gap: 16 }}}
            className={`${props.className} flex flex-col h-screen pt-5 gap-4 top-0 px-4 border-coolgray-20 border-solid bg-default-white sticky overflow-auto`}
        >
            <div className="flex flex-col items-start justify-center gap-1">
                <div className="flex items-center justify-center gap-14">
                    <Img src="images/img_rectangle_14_stroke.svg" alt="Image" className="h-[24px] w-[24px]" />
                    <div className="flex flex-1 justify-center self-center">
                        <Heading size="heading_4" as="h4" className="mb-1.5 text-[24px] font-bold text-coolgray-60">
                            Trenify
                        </Heading>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center rounded-[24px] bg-coolgray-10 p-3">
                <Img src="images/img_icon_jam_icons_coolgray_30_24x24.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" />
            </div>
            <Menu
                menuItemStyles={{
                    button: {
                    padding: "8px",
                    gap: "8px",
                    borderColor: "transparent",
                    borderStyle: "solid",
                    color: "#21272a",
                    fontWeight: 500,
                    fontSize: "16px",
                    borderBottomWidth: "1px",
                    "&:hover,&.ps-active": {
                        color: "#697077",
                        fontWeight: "400 !important",
                        borderColor: "#c1c7cd",
                        backgroundColor: "#f2f4f8 !important",
                    },
                    },
                }}
                rootStyles={{ "&>ul": { gap: "14px" } }}
                className="flex w-full flex-col self-stretch"
            >
                <MenuItem icon={<Img src="images/img_search.svg" alt="Search" className="h-[24px] w-[24px]" />}>
                    Search for...
                </MenuItem>
                <MenuItem
                icon={
                    <Img src="images/img_icon_jam_icons_coolgray_90.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" />
                }
                >
                    Profile
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}