import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[10px]",
    square: "rounded-[0px]",
};

const variants = {
    outline: {
        coolgray_10: "border-coolgray-10 border border-solid text-coolgray-90",
    },
    fill: {
        default_white: "bg-default-white text-coolgray-60",
        coolgray_10: "bg-coolgray-10 text-coolgray-60",
    },
};

const sizes = {
    xs: "h-[42px] px-3",
    lg: "h-[54px] px-4 text-[16px]",
    md: "h-[48px] px-3 text-[12px]",
    sm: "h-[48px] px-3.5 text-[16px]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder,
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "sm",
            color = "coolgray_10",
            ...restProps
        },
        ref
    ) => {
        return (
            <label
            className={`${className} flex items-center justify-center cursor-pointer border-solid ${
                shape && shapes[shape]
            } ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
            >
            {!!label && label}
            {!!prefix && prefix}
            <input
                ref={ref}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full bg-transparent focus:outline-none border-none"
                {...restProps}
            />
            {!!suffix && suffix}
            </label>
        );
    }
);
  
Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["round", "square"]),
    size: PropTypes.oneOf(["xs", "lg", "md", "sm"]),
    variant: PropTypes.oneOf(["outline", "fill"]),
    color: PropTypes.oneOf(["coolgray_10", "default_white", "coolgray_10"]),
};
  
export { Input };