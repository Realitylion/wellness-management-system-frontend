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
