import React from "react";

const sizes = {
  body_s: "text-[18px] font-normal not-italic sm:text-[15px]",
  body_1: "text-[14px] font-normal not-italic",
  body_m: "text-[16px] font-normal not-italic sm:text-[13px]",
  single_line_body_base: "font-inter text-[16px] font-normal not-italic sm:text-[13px]",
  p: "font-spacegrotesk text-[18px] font-normal not-italic sm:text-[15px]",
  textxs: "text-[11px] font-normal",
  texts: "text-[12px] font-normal not-italic",
  textmd: "text-[13px] font-normal",
  textlg: "text-[14px] font-normal not-italic",
  textxl: "text-[16px] font-normal not-italic sm:text-[13px]",
  text6xl: "text-[48px] font-normal not-italic lg:text-[48px] md:text-[44px] sm:text-[40px]",
};

const Text = ({ children, className = "", as = "p", size = "body_s", ...restProps }) => {
  const Component = as || "p";
  
  return (
    <Component className={`text-coolgray-90 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };