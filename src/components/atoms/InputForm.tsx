import styled from "styled-components";

type InputFormProps = {
  placeholder: string;
  width: string;
  height: string;
  tabIndex?: number;
  type?: string;
  autoComplete?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputForm = (props: InputFormProps) => {
  const {
    placeholder,
    width,
    height,
    tabIndex,
    type,
    autoComplete,
    value,
    onChange,
  } = props;
  return (
    <Input
      tabIndex={tabIndex}
      placeholder={placeholder}
      aria-label={placeholder}
      width={width}
      height={height}
      spellCheck={false}
      type={type}
      autoComplete={autoComplete}
      defaultValue={value}
      onChange={onChange}
    />
  );
};

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 2px solid ${({ theme }) => theme.color.lightGrey};
  font-size: ${({ theme }) => theme.mixin.fontSize(16, theme.color.grey)};
  padding: 0px 14px;
`;

export default InputForm;
