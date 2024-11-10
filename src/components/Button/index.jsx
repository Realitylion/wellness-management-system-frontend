import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[14px]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    default_white: "bg-default-white text-color_black-900_01",
    light_blue_A700: "bg-light_blue-a700 text-gray-100",
    primary_60: "bg-primary-60 text-default-white",
    coolgray_20: "bg-coolgray-20",
  },
  outline: {
    primary_60: "border-primary-60 border-2 border-solid text-primary-60",
  },
};
const sizes = {
  md: "h-[36px] pl-2.5 pr-[30px] text-[13px]",
  "4xl": "h-[68px] px-[34px] text-[20px]",
  sm: "h-[32px] px-3 text-[16px]",
  xs: "h-[28px] px-2.5 text-[15px]",
  lg: "h-[38px] px-5 text-[16px]",
  xl: "h-[48px] px-3",
  "2xl": "h-[48px] px-[34px] text-[16px]",
  "3xl": "h-[56px] px-8 text-[20px]",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "2xl",
    color = "primary_60",
    ...restProps
  }) => {
    return (
      <button
        className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
        {...restProps}
      >
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round", "square"]),
    size: PropTypes.oneOf(["md", "4xl", "sm", "xs", "lg", "xl", "2xl", "3xl"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf(["default_white", "light_blue_A700", "primary_60", "coolgray_20"]),
};
  
export { Button };