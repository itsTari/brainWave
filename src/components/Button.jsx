import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, color }) => {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${color ? 'text-n-8' :'text-n-1'} ${className || ''}`
    const spanClasses = 'relative z-10'
  const renderBtn = () => (

    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(color)}
    </button>
  );

  const renderlink = () =>(
    <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(color)}
    </a>
  )

  return href ? renderlink() : renderBtn();
};

export default Button;
