// import { Text, Heading } from "./..";
// import React from "react";

// export default function Footer({ ...props }) {
//   return (
//     <footer {...props} className={`${props.className} flex flex-col py-[22px] sm:py-5 bg-coolgray-60`}>
//       <div className="container-sm mb-6 flex flex-col items-center gap-12 md:px-5">
//         <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
//           {/* Replacing the logo with "Trenify" in bold and stylish font */}
//           <Text as="span" className="text-[24px] font-bold text-default-white" style={{ fontFamily: "Arial, sans-serif", letterSpacing: "1px" }}>
//             Trenify
//           </Text>
//           <ul className="flex w-[32%] flex-wrap justify-between gap-5 p-2 sm:w-full">
//             <li>
//               <a href="Home" target="_blank" rel="noreferrer">
//                 <Heading as="p" className="text-[16px] font-medium text-default-white">
//                   Home
//                 </Heading>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <Heading as="p" className="text-[16px] font-medium text-default-white">
//                   About Us
//                 </Heading>
//               </a>
//             </li>
//             <li>
//               <a href="Services" target="_blank" rel="noreferrer">
//                 <Heading as="p" className="text-[16px] font-medium text-default-white">
//                   Services
//                 </Heading>
//               </a>
//             </li>
//             <li>
//               <a href="Contact" target="_blank" rel="noreferrer">
//                 <Heading as="p" className="text-[16px] font-medium text-default-white">
//                   Contact
//                 </Heading>
//               </a>
//             </li>
//             <li>
//               <a href="Blog" target="_blank" rel="noreferrer">
//                 <Heading as="p" className="text-[16px] font-medium text-default-white">
//                   Blog
//                 </Heading>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <Text as="p" className="text-[14px] font-normal text-default-white">
//           Trenify@2024. All rights reserved.
//         </Text>
//       </div>
//     </footer>
//   );
// }

import { Text } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex flex-col py-[22px] sm:py-5 bg-coolgray-60`}>
      <div className="container-sm mb-6 flex flex-row justify-between items-start gap-12 md:px-5">
        {/* "Trenify" styled and aligned to the left */}
        <Text
          as="span"
          className="text-[24px] font-bold text-default-white"
          style={{
            fontFamily: "Georgia, serif",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#f0f0f0",
          }}
        >
          Trenify
        </Text>

        {/* Team members' names and IDs aligned to the right */}
        <div className="text-[16px] font-normal text-default-white text-right">
          <p>Dhanush Baalaji - 21BCE3980</p>
          <p>B Dinesh - 21BCE3799</p>
          <p>Ishan Khambhaliya - 21BCE3171</p>
          <p>Bhumireddy Thanmaye - 21BCI0013</p>
          <p>Mishika Ahuja - 21BCT0239</p>
          <p>Gauri Sharma - 21BCE2328</p>
          <p>Ramasani Rajitha - 21BKT0106</p>
        </div>
      </div>
      <Text as="p" className="text-[14px] font-normal text-default-white text-center">
        Trenify@2024. All rights reserved.
      </Text>
    </footer>
  );
}
