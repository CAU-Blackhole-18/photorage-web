import React, { ReactElement } from "react";
import styled, { CSSProperties } from "styled-components";
import classNames from "classnames";

export enum ButtonType {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  TRANSPARENT = 'transparent',
  SECONDARY = 'secondary',
  GRAY = 'gray',
  GRAY_SUB = 'gray_sub',
  PLAIN = 'plain',
  DANGER = 'danger'
}

export interface ButtonProps{
  buttonType: ButtonType;
  disabled?: boolean;
  bold?: boolean;
  rounded?: boolean;
  borderless?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  onClick?: (e?: React.MouseEvent) => void;
};

export default function Button({
  buttonType,
  className,
  disabled,
  bold,
  rounded,
  borderless,
  children,
  style,
  onClick
}: ButtonProps) {

  const buttonClassNames = classNames(
    className,
    {
      disabled: disabled,
      bold: bold,
      rounded: rounded,
      borderless: borderless
    }
  );

  return (
    <Container
      className={`${buttonClassNames} ${buttonType}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </Container>
  )
}

const Container = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid black;

  @include font_size(14);

  &.default {
    color: ${({theme}) => theme.color.white};
    background-color: ${({ theme }) => theme.color.main};
  }

  &.primary {
    color: ${({theme}) => theme.color.white};
    background-color: ${({ theme }) => theme.color.main};

    &:focus {
      opacity: 0.8;
      border: solid 2px rgba(0, 0, 0, 0.12);
    }

    &:active {
      opacity: 0.8;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    }

    &.disabled {
      color: rgba(37, 40, 47, 0.3);
      background-color: ${({theme}) => theme.color.gray};
    }
  }

  &.transparent {
    background-color: ${({theme}) => theme.color.transparent};
    border: none;
  }

  &.disabled {
    background-color: ${({theme}) => theme.color.gray};
  }

  
  &.rounded {
    border-radius: 20px;
  }
  
  &.bold {
    font-weight: 500;
  }
  
  &.borderless {
    border: none;
    
    &:focus {
      border: none;
    }
    
    &:active {
      border: none;
    }
    
    &.disabled {
      border: none;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;