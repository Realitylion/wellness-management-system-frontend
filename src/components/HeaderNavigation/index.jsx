import { Img, Heading } from "./..";
import React from "react";

export default function HeaderNavigation({
  headerLogoImage,
  headerTitleText,
  menuItemHomeText = "Home",
  menuItemAboutUsText = "About Us",
  menuItemServicesText = "Services",
  menuItemBlogText = "Blog",
  ...props
}) {
    return (
        <div {...props} className={`${props.className} flex justify-center items-center p-[18px] border-coolgray-20 border-b border-solid bg-default-white`}>
            <div className="container-sm flex items-center justify-between gap-5 md:w-full md:px-5">
                <div className="flex w-[26%] items-start justify-center px-[50px] md:w-full md:px-5">
                {!!headerLogoImage ? <Img src={headerLogoImage} alt="Image" className="h-[24px] w-[24px]" /> : null}
                <div className="flex flex-1 self-center">
                    {!!headerTitleText ? (
                    <Heading
                        as="h4"
                        size="heading_4"
                        className="mb-1.5 text-[24px] font-bold text-coolgray-60 md:text-[22px]"
                    >
                        {headerTitleText}
                    </Heading>
                    ) : null}
                </div>
                </div>
        
                <div className="flex flex-wrap py-2 pl-[196px] pr-14 md:px-5">
                <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                    {menuItemHomeText}
                </Heading>
                <Heading as="p" className="ml-8 text-[16px] font-medium text-coolgray-90">
                    {menuItemAboutUsText}
                </Heading>
                <Heading as="p" className="ml-8 text-[16px] font-medium text-coolgray-90">
                    {menuItemServicesText}
                </Heading>
                <Heading as="p" className="ml-8 text-[16px] font-medium text-coolgray-90">
                    {menuItemBlogText}
                </Heading>
                </div>
        
                <Img src="images/img_lock.svg" alt="Lock" className="h-[30px] self-end md:w-full md:self-auto" />
            </div>
            </div>
    );
}