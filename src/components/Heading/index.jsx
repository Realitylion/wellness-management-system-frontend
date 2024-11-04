import React from "react";

const sizes = {
  heading_2: "text-[42px] font-bold lg:text-[42px] md:text-[38px] sm:text-[35px]",
  other_menu_m: "text-[16px] font-medium sm:text-[13px]",
  heading_1: "text-[54px] font-bold lg:text-[54px] md:text-[46px] sm:text-[45px]",
  heading_4: "tracking-[0.50px] text-[16px] font-bold lg:text-[16px] md:text-[14px] sm:text-[13px]",
  button_m: "tracking-[0.50px] text-[16px] font-bold lg:text-[16px] md:text-[14px] sm:text-[13px]",
  heading_6: "text-[18px] font-bold sm:text-[15px]",
  h3: "font-spacegrotesk text-[30px] font-medium lg:text-[30px] md:text-[28px] sm:text-[25px]",
  text2xl: "text-[18px] font-medium sm:text-[15px]",
  text3xl: "text-[20px] font-medium sm:text-[17px]",
  text4xl: "text-[24px] font-medium lg:text-[24px] md:text-[22px] sm:text-[20px]",
  text5xl: "text-[27px] font-medium lg:text-[27px] md:text-[25px] sm:text-[22px]",
  headingsxs: "text-[13px] font-semibold",
  headings: "text-[14px] font-semibold",
  headingmd: "text-[24px] font-bold lg:text-[24px] md:text-[22px] sm:text-[20px]",
  headinglg: "text-[48px] font-bold lg:text-[48px] md:text-[44px] sm:text-[40px]",
};

const Heading = ({ children, className = "", size = "other_menu_m", as, ...restProps }) => {
  const Component = as || "h6";
  
  return (
    <Component className={`text-coolgray-90 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };