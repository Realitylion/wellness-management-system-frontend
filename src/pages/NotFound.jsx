// import { Helmet } from "react-helmet";
// import { Text, Img, Heading, Button } from "../components";
// import MegaMenu1 from "../components/MegaMenu1";
// import PagenotfoundPagecontent from "./PagenotfoundPagecontent";
// import React from "react";

// export default function PageNotFoundPage() {
//   const [menuOpen, setMenuOpen] = React.useState(false);

//   return (
//     <>
//     <Helmet>
//       <title>Wellness Management System</title>
//       <meta name="description" content="Web site created using create-react-app" />
//     </Helmet>
//     <div className="w-full bg-default-white">
//       <header className="relative flex items-center justify-center border-b border-solid border-coolgray-20 bg-default-white py-4">
//         <div className="container-sm flex items-center justify-between gap-5 md:flex-col md:px-5">
//           <Img src="images/img_header_logo.png" alt="Headerlogo" className="h-[38px] w-[104px] object-contain" />
//           <div className="flex w-[62%] items-center justify-between gap-5 self-center md:w-full md:flex-col">
//           <ul className="flex items-center gap-8">
//             <li>
//               <a href="#">
//                 <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
//                   Eleven
//                 </Heading>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
//                   Twelve
//                 </Heading>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
//                   Thirteen
//                 </Heading>
//               </a>
//             </li>
//             <li
//               onMouseLeave={() => {
//                 setMenuOpen(false);
//               }}
//               onMouseEnter={() => {
//                 setMenuOpen(true);
//               }}
//             >
//               <div className="flex cursor-pointer items-center gap-2">
//                 <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
//                   Sixteen
//                 </Heading>
//                 <Img src="images/img_arrow_down_coolgray_90.svg" alt="Arrowdown" className="h-[24px] w-[24px]" />
//             </div>
//             {menuOpen ? <MegaMenu1 /> : null}
//             </li> 
//             </ul>
//         <div className="flex gap-4">
//         <Button
//             variant="outline"
//             shape="square"
//             className="min-w-[144px] border-2 px-[26px] font-medium tracking-[0.50px] sm:px-5"
//         >
//             Button Text
//         </Button>
//         <Button
//             shape="square"
//             className="min-w-[144px] border-2 border-solid border-primary-60 px-[26px] font-medium tracking-[0.50px] sm:px-5"
//         >
//             Button Text
//         </Button>
//         </div>
//         </div>
//         </div>
//         </header>
//         <PagenotfoundPagecontent />
// <footer className="flex flex-col items-center bg-coolgray-60 py-[22px] sm:py-5">
//   <div className="container-sm mb-6 flex flex-col items-center gap-12 md:px-5">
//     <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
//       <Img src="images/img_footer_logo.png" alt="Footerlogo" className="h-[38px] w-[104px] object-contain" />
//       <div className="flex w-[70%] items-center justify-between gap-5 md:w-full md:flex-col">
//         <div className="flex flex-wrap gap-8 p-2"> 
//             <a href="Eleven" target="_blank" rel="noreferrer">
//               <Heading as="p" className="text-[16px] font-medium text-default-white">
//                 Eleven
//               </Heading>
//             </a>
//             <a href="Twelve" target="_blank" rel="noreferrer">
//               <Heading as="p" className="text-[16px] font-medium text-default-white">
//                 Twelve
//               </Heading>
//             </a>
//             <a href="Thirteen" target="_blank" rel="noreferrer">
//               <Heading as="p" className="text-[16px] font-medium text-default-white">
//                 Thirteen
//               </Heading>
//             </a>
//             <a href="Fourteen" target="_blank" rel="noreferrer">
//               <Heading as="p" className="text-[16px] font-medium text-default-white">
//                 Fourteen
//               </Heading>
//             </a>
//             <a href="Fifteen" target="_blank" rel="noreferrer">
//                 <Heading as="p" className="text-[16px] font-medium text-default-white">
//                 Fifteen
//                 </Heading>
//             </a>
//             <a href="Sixteen" target="_blank" rel="noreferrer">
//                 <Heading as="p" className="text-[16px] font-medium text-default-white">
//                 Sixteen
//                 </Heading>
//             </a>
//         </div>
//         <div className="flex gap-4">
//             <Img
//                 src="images/img_icon_jam_icons_default_white.svg"
//                 alt="Iconjamicons"
//                 className="h-[24px] w-[24px]"
//             />
//             <Img
//                 src="images/img_icon_jam_icons_default_white_24x24.svg"
//                 alt="Iconjamicons"
//                 className="h-[24px] w-[24px]"
//             />
//             <Img src="images/img_icon_jam_icons_24x24.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" />
//             <Img src="images/img_icon_jam_icons_1.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" />
//             <Img src="images/img_icon_jam_icons_2.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" />
//         </div>
//         </div>
//         </div>
//         <Text as="p" className="text-[14px] font-normal text-default-white">
//             CompanyName @202X. All rights reserved.
//         </Text>
//         </div>
//         </footer>
//         </div>
//         </>
//     );
// }

import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../components";
import MegaMenu1 from "../components/MegaMenu1";
import PagenotfoundPagecontent from "./PagenotfoundPagecontent";
import NavBar from "../components/NavBar";  // Importing NavBar component
import React from "react";

export default function PageNotFoundPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-default-white">
        {/* Include NavBar here */}
        <NavBar />  {/* Displaying NavBar on the page */}

        <header className="relative flex items-center justify-center border-b border-solid border-coolgray-20 bg-default-white py-4">
          <div className="container-sm flex items-center justify-between gap-5 md:flex-col md:px-5">
            {/* Header content */}
            <div className="flex w-[62%] items-center justify-between gap-5 self-center md:w-full md:flex-col">
              {/* Add any specific header content if needed */}
            </div>
          </div>
        </header>
        
        <PagenotfoundPagecontent />
      </div>
    </>
  );
}
