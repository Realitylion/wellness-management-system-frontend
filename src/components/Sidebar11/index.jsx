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

//   return (
//     <Sidebar
//       {...props}
//       width="258px !important"
//       collapsedWidth="80px !important"
//       collapsed={collapsed}
//       rootStyles={{ [`${sidebarClasses.container}`]: { gap: 16 }}}
//       className={`${props.className} flex flex-col self-center h-screen pt-5 gap-4 top-0 px-4 border-coolgray-20 border-1 border-r border-solid bg-default-white sticky overflow-auto`}
//     >
//         <div className="flex flex-col items-start justify-center gap-1">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
//   <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
// </svg>
//             <div className="flex flex-1 justify-center self-center">
//                 <Heading size="heading_4" as="h4" className="mb-1.5 text-[24px] font-bold text-coolgray-60">
//                 Trenify
//                 </Heading>
//             </div>
//         </div>
//         <div className="flex flex-col items-center rounded-[24px] bg-coolgray-10 p-3">
//           <Img src="images/img_icon_jam_icons_coolgray_30_24x24.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" />
//         </div>
//         {/* <Input
//           shape="square"
//           name="search"
//           placeholder="Search for..."
//           value={searchBarValue9}
//           onChange={(e) => setSearchBarValue9(e.target.value)}
//           prefix={<Img src="images/img_search.svg" alt="Search" className="h-[24px] w-[24px]" />}
//           suffix={
//             searchBarValue9?.length > 0 ? (
//               <CloseSVG onClick={() => setSearchBarValue9("")} height={24} width={24} fillColor="#697077ff" />
//             ) : null
//           }
//           className="w-full gap-2 self-stretch border-b border-coolgray-30 px-3"
//         /> */}
//         <Menu
//         menuItemStyles={{
//             button: {
//             padding: "10px 10px 10px 22px",
//             gap: "8px",
//             borderColor: "#f2f4f8",
//             borderStyle: "solid",
//             color: "#21272a",
//             fontWeight: 500,
//             fontSize: "16px",
//             },
//         }}
//         rootStyles={{ "&>ul": { gap: "0.33px" } }}
//         className="flex w-full flex-col self-stretch"
//         >
//             <MenuItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-keyboard-fill" viewBox="0 0 16 16">
//   <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm13 .25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25M2.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 8.75v-.5A.25.25 0 0 0 2.75 8zM4 8.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 5 8.75v-.5A.25.25 0 0 0 4.75 8h-.5a.25.25 0 0 0-.25.25M6.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 7 8.75v-.5A.25.25 0 0 0 6.75 8zM8 8.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 9 8.75v-.5A.25.25 0 0 0 8.75 8h-.5a.25.25 0 0 0-.25.25M13.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-3-2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm.75 2.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25M11.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM9 6.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5A.25.25 0 0 0 9.75 6h-.5a.25.25 0 0 0-.25.25M7.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 8 6.75v-.5A.25.25 0 0 0 7.75 6zM5 6.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 6 6.75v-.5A.25.25 0 0 0 5.75 6h-.5a.25.25 0 0 0-.25.25M2.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5A.25.25 0 0 0 4 6.75v-.5A.25.25 0 0 0 3.75 6zM2 10.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25M4.25 10a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25z"/>
// </svg>}>
//                 Change Password
//             </MenuItem>
//             <MenuItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
//   <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
//   <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
// </svg>}>
//                 Profile
//             </MenuItem>
//         </Menu>
//     </Sidebar>
//   );
}