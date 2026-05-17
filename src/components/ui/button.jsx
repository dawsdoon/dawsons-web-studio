import React from "react";

const variants = {
  default: "bg-primary text-primary-foreground hover:opacity-90",
  outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
};

export function Button({ className = "", variant = "default", asChild = false, children, ...props }) {
  const classes = `inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant] || variants.default} ${className}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: [classes, children.props.className].filter(Boolean).join(" "),
      ...props,
    });
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
