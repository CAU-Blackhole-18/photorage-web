import styled from "styled-components";

const Button = (props: ButtonPropsType) => {
  const { onClick, backgroundColor, radius, height, width, children } = props;
  return (
    <Container
      onClick={onClick}
      backgroundColor={backgroundColor}
      radius={radius}
      height={height}
      width={width}
      tabIndex={-1}
    >
      {children}
    </Container>
  );
};

type ButtonPropsType = {
  backgroundColor?: string;
  children: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
};

const Container = styled.button.attrs({ type: "button" })<ButtonPropsType>`
  ${({ theme }) => theme.mixin.flexCenter()};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.radius};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
