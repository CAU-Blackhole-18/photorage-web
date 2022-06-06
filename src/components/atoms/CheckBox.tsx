import styled from "styled-components";

type CheckBoxPropsType = {
  checked: boolean;
  onChange: () => void;
};

const CheckBox = (props: CheckBoxPropsType) => {
  const { checked, onChange } = props;

  return (
    <Container>
      <HiddenCheckBox type={"checkbox"} defaultChecked={checked} />
      <StyledCheckBox onClick={onChange} defaultChecked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="19 7 10 17 5 12" />
        </Icon>
      </StyledCheckBox>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckBox = styled.div<{ defaultChecked: boolean }>`
  display: inline-block;
  cursor: pointer;
  width: 28px;
  height: 28px;
  border: ${(props) =>
    props.defaultChecked ? "none" : "solid 0.1rem #dddddd"};
  background: ${(props) => (props.defaultChecked ? "black" : "white")};
  border-radius: 100%;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.defaultChecked ? "visible" : "hidden")};
  }
`;

const HiddenCheckBox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default CheckBox;
