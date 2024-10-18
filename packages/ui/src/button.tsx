"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({
  children,
  className,
  appName,
  ...res
}: ButtonProps) => {
  return (
    <button
      onClick={() => {
        alert(`Hello from your  app!`);
      }}
      className={className}
      style={{ background: "red" }}
      {...res}
    >
      111 templates
      {children}
    </button>
  );
};
