import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary: "checked:border-[3px]",
};
const sizes = {
  xs: "h-[20px] w-[20px]",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "checkbox",
      label = "",
      id = "checkbox_id",
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {

    return (
      <>
        <div className={`${className} flex items-center gap-[5px] cursor-pointer`}>
            <input
            className={`${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            id={id}
            {...restProps}
            />
            {!!label && <label htmlFor={id}>{label}</label>}
        </div>
      </>
    );
  }
);

CheckBox.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["primary"]),
};
  
export { CheckBox };