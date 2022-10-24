import React, { FC } from 'react';
import './CustomButton.scss';

type ButtonType = 'submit' | 'reset' | 'button';
type CustomButtonType = 'cancelBtn' | 'submitBtn';

interface ButtonProps {
  type: ButtonType;
  btnType: CustomButtonType;
  children?: React.ReactNode;
  onClick?: () => void;
}
const CustomButton: FC<ButtonProps> = ({
  type,
  btnType,
  children,
  onClick,
}) => {
  return (
    <button type={type} onClick={onClick} className={btnType}>
      {children}
    </button>
  );
};

export default CustomButton;
