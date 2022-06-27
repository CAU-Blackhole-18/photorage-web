import styled from "styled-components";

const Button = (props: ButtonPropsType) => {
  const { onClick, backgroundColor, radius, height, width, children, type } =
    props;

  return (
    <Container
      type={type}
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

type ButtonPropsType = Partial<{
  backgroundColor: string;
  children: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  type: "submit" | "reset" | "button";
}>;

const Container = styled.button.attrs((props) => ({
  type: props.type || "button",
}))<ButtonPropsType>`
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
