import React from "react";

type Props = {
  variant: string;
};

const Button = ({ variant }: Props) => {
  return <button className={variant}>Button</button>;
};

export default Button;
